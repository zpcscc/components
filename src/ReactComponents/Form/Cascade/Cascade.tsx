/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState, type FC } from 'react';
import type { StyledType } from 'src/type';
import Select, { type SelectProps } from '../Select/Select';
import TextArea, { type TextAreaProps } from '../TextArea/TextArea';
import { arr2Tree, initValueArr, updateSelectList } from './helpers';
import { Wrapper } from './Styled';
import type { SelectListType } from './type';

export interface CascadeProps
  extends Omit<SelectProps, 'onChange' | 'value' | 'optionsConfig' | 'styled'> {
  value?: string[];
  cascadeData?: string[][];
  styled?: StyledType;
  level?: number;
  selectOptions?: Omit<SelectProps, 'onChange' | 'optionsConfig'>;
  textAreaOptions?: Omit<TextAreaProps, 'onChange'>;
  showTextArea?: boolean;
  placeholders?: string[];
  onChange?: (value: string[]) => void;
}

/**
 * @name 级联组件
 * @param value 每个级联选中的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param level 级联层级
 * @param placeholder 级联输入框占位符
 * @param showTextArea 显示自定义文本框
 * @param selectOptions 自定义下拉框的配置项
 * @param textAreaOptions 自定义文本框的配置项
 * @param cascadeData 外部输入的级联选项数据
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Cascade: FC<CascadeProps> = (props) => {
  const {
    value = [],
    cascadeData = [],
    level = 3,
    styled,
    showTextArea = false,
    selectOptions = {},
    textAreaOptions = {},
    placeholders = [],
    onChange,
  } = props;

  const treeData = arr2Tree(cascadeData);
  const [valueArr, setValueArr] = useState<string[]>(
    initValueArr(value, showTextArea ? level + 1 : level),
  );
  const [textValue, setTextValue] = useState<string>(valueArr?.[level]);
  const [selectList, setSelectList] = useState<SelectListType[]>(
    updateSelectList(treeData, valueArr, level),
  );

  const onSelectChange = (selectValue: string, index: number) => {
    let newValueArr: string[] = valueArr;
    if (showTextArea && index === level) {
      valueArr[index] = selectValue;
      newValueArr = valueArr;
      setTextValue(selectValue);
    } else {
      newValueArr = [...valueArr.slice(0, index), selectValue];
      newValueArr[level] = textValue;
      setSelectList(updateSelectList(treeData, newValueArr, level));
    }
    setValueArr(newValueArr);
    onChange?.(newValueArr.filter(Boolean));
  };

  useEffect(() => {
    setSelectList(updateSelectList(treeData, valueArr, level));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  return (
    <Wrapper css={css(styled)}>
      {selectList?.map(({ options }, index) => (
        <Select
          key={index}
          value={valueArr?.[index]}
          placeholder={placeholders?.[index] ?? '请选择...'}
          options={options}
          onChange={(selectValue) => onSelectChange(selectValue, index)}
          style={{
            marginBottom: `${index === selectList.length - 1 && !showTextArea ? 0 : 20}px`,
          }}
          notFoundContent={'暂无数据'}
          {...selectOptions}
        />
      ))}
      {showTextArea && (
        <TextArea
          defaultValue={textValue}
          placeholder={placeholders?.[level] ?? '请输入...'}
          onChange={(textAreaValue) => onSelectChange(textAreaValue, level)}
          {...textAreaOptions}
        />
      )}
    </Wrapper>
  );
};

export default Cascade;

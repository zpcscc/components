/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type InputProps as AntInputProps } from 'antd/lib/input';
import { useState, type FC } from 'react';
import Input from 'src/components/Input';
import { type StyledType } from 'src/types';
import { InputGroupWrapper } from './Styled';

export type InputGroupProps = {
  value?: string[];
  placeholders?: string[];
  level?: number;
  styled?: StyledType;
  onChange?: (value: string[]) => void;
} & Omit<AntInputProps, 'onChange' | 'placeholder'>;

/**
 * @name 输入框组，用于输入多条数据，组成数组
 * @param value 组件的值
 * @param placeholders 组件的占位符
 * @param level 输入框组件的数量，默认为2
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const InputGroup: FC<InputGroupProps> = (props) => {
  const { value = [], placeholders = [], level = 2, styled, onChange, ...rest } = props;
  const [valueArr, setValueArr] = useState<string[]>(Array.isArray(value) ? value : []);

  const onInputChange = (value: string, index: number) => {
    const newValueArr = [...valueArr];
    newValueArr[index] = value;
    setValueArr(newValueArr);
    onChange?.(newValueArr);
  };

  return (
    <InputGroupWrapper direction='vertical' css={css(styled)}>
      {Array(level)
        .fill('')
        .map((_item, index) => (
          <Input
            key={index}
            defaultValue={valueArr[index] || ''}
            placeholder={placeholders[index] || '请输入...'}
            onChange={(value) => onInputChange(value, index)}
            {...rest}
          />
        ))}
    </InputGroupWrapper>
  );
};

export default InputGroup;

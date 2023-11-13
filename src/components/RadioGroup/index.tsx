/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List, Radio, type ListProps } from 'antd';
import type { RadioProps as AntRadioProps } from 'antd/lib/radio';
import type { FC } from 'react';
import type { StyledType } from 'src/type/customType';
import type { OptionType, OptionsConfigType } from 'src/type/optionsConfigType';
import { Wrapper } from './Styled';

export interface RadioGroupProps extends Omit<AntRadioProps, 'onChange'> {
  optionsConfig?: OptionsConfigType<'Radio'>;
  listOptions?: ListProps<string>;
  styled?: StyledType;
  onChange?: (value: string) => void;
}

/**
 * @name 单选
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param size 组件大小
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/radio-cn/
 */
const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    value,
    optionsConfig,
    listOptions = { size: 'default' },
    styled,
    onChange,
    ...rest
  } = props;

  return (
    <Wrapper css={css(styled)}>
      <Radio.Group
        value={value || optionsConfig?.defaultValue}
        onChange={(e) => onChange?.(e?.target?.value)}
        {...rest}
      >
        <List bordered {...listOptions}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={option.value}>
              <Radio value={option.value}>{option.label}</Radio>
            </List.Item>
          ))}
        </List>
      </Radio.Group>
    </Wrapper>
  );
};

export default RadioGroup;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Checkbox, List, type ListProps } from 'antd';
import { type CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox';
import { type FC } from 'react';
import { type OptionType, type OptionsConfigType, type StyledType } from 'src/types';
import { Wrapper } from './Styled';

export type CheckboxGroupProps = {
  optionsConfig?: OptionsConfigType<'Checkbox'>;
  listOptions?: ListProps<string>;
  styled?: StyledType;
} & AntCheckboxGroupProps;

/**
 * @name 多选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param size 组件大小
 * @param optionsConfig 组件选项配置
 * @link 其他参数详见 https://ant.design/components/checkbox-cn/
 */
export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { value, optionsConfig, listOptions = { size: 'default' }, styled, ...rest } = props;

  return (
    <Wrapper className='bg-white ' css={css(styled)}>
      <Checkbox.Group value={value || optionsConfig?.defaultValue} {...rest}>
        <List bordered {...listOptions}>
          {optionsConfig?.options?.map((option: OptionType) => (
            <List.Item key={option.value}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </List.Item>
          ))}
        </List>
      </Checkbox.Group>
    </Wrapper>
  );
};

export default CheckboxGroup;

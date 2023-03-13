/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { InputProps as AntInputProps } from 'antd/lib/input';
import type { StyledType } from 'src/type';
import { InputWrapper } from './Styled';

export interface InputProps extends Omit<AntInputProps, 'onChange'> {
  styled?: StyledType;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const Input: React.FC<InputProps> = (props) => {
  const { onChange, styled, ...rest } = props;
  return (
    <InputWrapper css={css(styled)} onChange={(e) => onChange?.(e?.target?.value, e)} {...rest} />
  );
};

export default Input;

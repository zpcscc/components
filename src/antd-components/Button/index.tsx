/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button as AntdButton } from 'antd';
import { type ButtonProps as AntButtonProps } from 'antd/lib/button';
import { type FC } from 'react';
import { type StyledType } from 'src/types';

export type ButtonProps = {
  styled?: StyledType;
} & AntButtonProps;

/**
 * @name 按钮
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */
const Button: FC<ButtonProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <AntdButton css={css(styled)} {...rest}>
      {children}
    </AntdButton>
  );
};

export default Button;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { ButtonWrapper } from './Styled';

export interface ButtonProps extends AntButtonProps {
  styled?: CSSInterpolation;
}

/**
 * @name 按钮
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */
const Button: React.FC<ButtonProps> = (props) => {
  const { children = '按钮', styled, ...rest } = props;
  return (
    <ButtonWrapper css={css(styled)} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

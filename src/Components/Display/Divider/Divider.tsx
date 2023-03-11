/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { DividerProps as AntDividerProps } from 'antd/lib/Divider';
import { DividerWrapper } from './Styled';

export interface DividerProps extends AntDividerProps {
  styled?: CSSInterpolation;
}

/**
 * @name 分隔线
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */
const Divider: React.FC<DividerProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <DividerWrapper css={css(styled)} {...rest}>
      {children}
    </DividerWrapper>
  );
};

export default Divider;

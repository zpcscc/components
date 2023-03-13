/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { RowProps as AntRowProps } from 'antd';
import { RowWrapper } from './Styled';

export interface RowProps extends AntRowProps {
  styled?: CSSInterpolation;
}

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */
const Row: React.FC<RowProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <RowWrapper css={css(styled)} {...rest}>
      {children}
    </RowWrapper>
  );
};

export default Row;

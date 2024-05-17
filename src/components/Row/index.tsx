/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { RowProps as AntRowProps } from 'antd';
import type { FC } from 'react';
import type { StyledType } from 'src/types';
import { RowWrapper } from './Styled';

export type RowProps = {
  styled?: StyledType;
} & AntRowProps;

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */
const Row: FC<RowProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <RowWrapper css={css(styled)} {...rest}>
      {children}
    </RowWrapper>
  );
};

export default Row;

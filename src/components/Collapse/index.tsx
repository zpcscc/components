/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CollapseProps as AntCollapseProps } from 'antd';
import type { FC } from 'react';
import type { StyledType } from 'src/types';
import { CollapseWrapper } from './Styled';

export type CollapseProps = {
  styled?: StyledType;
} & AntCollapseProps;

/**
 * @name 布局组件-折叠面板（子组件只能为“布局面板”）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const Collapse: FC<CollapseProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <CollapseWrapper css={css(styled)} {...rest}>
      {children}
    </CollapseWrapper>
  );
};

export default Collapse;

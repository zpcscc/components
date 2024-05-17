/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CollapsePanelProps as AntCollapsePanelProps } from 'antd';
import type { FC } from 'react';
import type { StyledType } from 'src/types';
import { CollapsePanelWrapper } from './Styled';

export type CollapsePanelProps = {
  styled?: StyledType;
} & AntCollapsePanelProps;

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Collapse.Panel
 */
const CollapsePanel: FC<CollapsePanelProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <CollapsePanelWrapper css={css(styled)} {...rest}>
      {children}
    </CollapsePanelWrapper>
  );
};

export default CollapsePanel;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type CollapsePanelProps as AntCollapsePanelProps, Collapse as AntdCollapse } from 'antd';
import { type FC } from 'react';
import { type StyledType } from 'src/types';

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
    <AntdCollapse.Panel css={css(styled)} {...rest}>
      {children}
    </AntdCollapse.Panel>
  );
};

export default CollapsePanel;

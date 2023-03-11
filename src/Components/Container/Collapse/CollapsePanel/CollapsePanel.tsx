/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { CollapsePanelProps as AntCollapsePanelProps } from 'antd';
import { CollapsePanelWrapper } from './Styled';

export interface CollapsePanelProps extends AntCollapsePanelProps {
  styled?: CSSInterpolation;
}

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Collapse.Panel
 */
const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <CollapsePanelWrapper css={css(styled)} {...rest}>
      {children}
    </CollapsePanelWrapper>
  );
};

export default CollapsePanel;

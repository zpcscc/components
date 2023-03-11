/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import { type SpaceProps as AntSpaceProps } from 'antd';
import { SpaceWrapper } from './Styled';

export interface SpaceProps extends AntSpaceProps {
  styled?: CSSInterpolation;
}

/**
 * @name Space 间距
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */
const Space: React.FC<SpaceProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <SpaceWrapper css={css(styled)} {...rest}>
      {children}
    </SpaceWrapper>
  );
};

export default Space;

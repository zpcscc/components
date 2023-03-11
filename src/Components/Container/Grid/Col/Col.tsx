/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { ColProps as AntColProps } from 'antd';
import { ColWrapper } from './Styled';

export interface ColProps extends AntColProps {
  styled?: CSSInterpolation;
}

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Col
 */
const Col: React.FC<ColProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <ColWrapper css={css(styled)} {...rest}>
      {children}
    </ColWrapper>
  );
};

export default Col;

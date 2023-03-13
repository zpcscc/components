/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { TitleProps as AntTitleProps } from 'antd/lib/typography/Title';
import { TitleWrapper } from './Styled';

export interface TitleProps extends AntTitleProps {
  styled?: CSSInterpolation;
}

/**
 * @name 标题展示
 * @param styled 自定义样式 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const Title: React.FC<TitleProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <TitleWrapper css={css(styled)} {...rest}>
      {children}
    </TitleWrapper>
  );
};

export default Title;

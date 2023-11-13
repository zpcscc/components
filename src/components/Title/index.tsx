/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { TitleProps as AntTitleProps } from 'antd/lib/typography/Title';
import type { FC } from 'react';
import type { StyledType } from 'src/type/customType';
import { TitleWrapper } from './Styled';

export interface TitleProps extends AntTitleProps {
  styled?: StyledType;
}

/**
 * @name 标题展示
 * @param styled 自定义样式 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const Title: FC<TitleProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <TitleWrapper css={css(styled)} {...rest}>
      {children}
    </TitleWrapper>
  );
};

export default Title;

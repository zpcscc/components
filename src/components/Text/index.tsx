/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { TextProps as AntTextProps } from 'antd/lib/typography/Text';
import type { FC } from 'react';
import type { StyledType } from 'src/types';
import { TextWrapper } from './Styled';

export type TextProps = {
  styled?: StyledType;
} & AntTextProps;

/**
 * @name 文本展示
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */
const Text: FC<TextProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <TextWrapper css={css(styled)} {...rest}>
      {children}
    </TextWrapper>
  );
};

export default Text;

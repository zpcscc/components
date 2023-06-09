/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { TextProps as AntTextProps } from 'antd/lib/typography/Text';
import type { StyledType } from 'src/type';
import { TextWrapper } from './Styled';

export interface TextProps extends AntTextProps {
  styled?: StyledType;
}

/**
 * @name 文本展示
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */
const Text: React.FC<TextProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <TextWrapper css={css(styled)} {...rest}>
      {children}
    </TextWrapper>
  );
};

export default Text;

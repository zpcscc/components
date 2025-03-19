/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from 'antd';
import { type TextProps as AntTextProps } from 'antd/lib/typography/Text';
import { type FC } from 'react';
import { type StyledType } from 'src/types';

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
    <Typography.Text css={css(styled)} {...rest}>
      {children}
    </Typography.Text>
  );
};

export default Text;

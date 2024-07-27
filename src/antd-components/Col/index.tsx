/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type ColProps as AntColProps } from 'antd';
import { type FC } from 'react';
import { type StyledType } from 'src/types';
import { ColWrapper } from './Styled';

export type ColProps = {
  styled?: StyledType;
} & AntColProps;

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Col
 */
const Col: FC<ColProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <ColWrapper css={css(styled)} {...rest}>
      {children}
    </ColWrapper>
  );
};

export default Col;

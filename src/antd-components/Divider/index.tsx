/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider as AntdDivider } from 'antd';
import { type DividerProps as AntDividerProps } from 'antd/lib/Divider';
import { type FC } from 'react';
import { type StyledType } from 'src/types';

export type DividerProps = {
  styled?: StyledType;
} & AntDividerProps;

/**
 * @name 分隔线
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */
const Divider: FC<DividerProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <AntdDivider css={css(styled)} {...rest}>
      {children}
    </AntdDivider>
  );
};

export default Divider;

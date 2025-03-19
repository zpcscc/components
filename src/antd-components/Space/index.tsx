/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type SpaceProps as AntSpaceProps, Space as AntdSpace } from 'antd';
import { type FC } from 'react';
import { type StyledType } from 'src/types';

export type SpaceProps = {
  styled?: StyledType;
} & AntSpaceProps;

/**
 * @name Space 间距
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */
const Space: FC<SpaceProps> = (props) => {
  const { children, styled, ...rest } = props;
  return (
    <AntdSpace className='w-full' css={css(styled)} {...rest}>
      {children}
    </AntdSpace>
  );
};

export default Space;

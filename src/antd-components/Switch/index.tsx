/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { type SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { type FC } from 'react';
import { type StyledType } from 'src/types';
import { SwitchWrapper } from './Styled';

export type SwitchProps = {
  value?: boolean;
  styled?: StyledType;
} & AntSwitchProps;

/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */
const Switch: FC<SwitchProps> = (props) => {
  const { value, checked, styled, ...rest } = props;
  return <SwitchWrapper css={css(styled)} checked={value || checked} {...rest} />;
};

export default Switch;

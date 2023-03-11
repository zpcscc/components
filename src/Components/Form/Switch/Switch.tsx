/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { SwitchWrapper } from './Styled';

export interface SwitchProps extends AntSwitchProps {
  value?: boolean;
  styled?: CSSInterpolation;
}

/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */
const Switch: React.FC<SwitchProps> = (props) => {
  const { value, checked, styled, ...rest } = props;
  return <SwitchWrapper css={css(styled)} checked={value || checked} {...rest} />;
};

export default Switch;

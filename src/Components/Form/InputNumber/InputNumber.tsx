/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { InputNumberProps as AntInputNumberProps } from 'antd/lib/input-number';
import { InputNumberWrapper } from './Styled';

export interface InputNumberProps extends AntInputNumberProps {
  styled?: CSSInterpolation;
}

/**
 * @name 数字输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-number-cn/
 */
const InputNumber: React.FC<InputNumberProps> = (props) => {
  const { styled, ...rest } = props;
  return <InputNumberWrapper css={css(styled)} {...rest} />;
};

export default InputNumber;

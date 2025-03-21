/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Input as AntdInput } from 'antd';
import { type InputProps as AntInputProps } from 'antd/lib/input';
import { type ChangeEvent, type FC } from 'react';
import { type StyledType } from 'src/types';

export type InputProps = {
  styled?: StyledType;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
} & Omit<AntInputProps, 'onChange'>;

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const Input: FC<InputProps> = (props) => {
  const { onChange, styled, ...rest } = props;
  return (
    <AntdInput
      className='w-full'
      css={css(styled)}
      onChange={(e) => onChange?.(e?.target?.value, e)}
      {...rest}
    />
  );
};

export default Input;

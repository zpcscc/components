/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { SelectProps as AntSelectProps } from 'antd/lib/select';
import type { FC } from 'react';
import type { StyledType } from 'src/types';
import { SelectWrapper } from './Styled';

export type SelectProps = {
  styled?: StyledType;
} & AntSelectProps<string>;

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Select: FC<SelectProps> = (props) => {
  const { value, styled, ...rest } = props;
  return <SelectWrapper css={css(styled)} value={value} {...rest} />;
};

export default Select;

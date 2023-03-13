/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import type { SelectProps as AntSelectProps } from 'antd/lib/select';
import { SelectWrapper } from './Styled';

export interface SelectProps extends AntSelectProps<string> {
  styled?: CSSInterpolation;
}

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Select: React.FC<SelectProps> = (props) => {
  const { value, styled, ...rest } = props;
  return <SelectWrapper css={css(styled)} value={value} {...rest} />;
};

export default Select;

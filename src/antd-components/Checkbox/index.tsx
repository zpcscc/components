/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Checkbox as AntCheckbox, Space } from 'antd';
import { type CheckboxProps as AntCheckboxProps } from 'antd/es/checkbox';
import { type FC, type ReactNode } from 'react';
import { type SpaceProps } from 'src/antd-components/Space';
import { type StyledType } from 'src/types';

export type CheckboxProps = {
  // 前缀内容
  prefix?: string | ReactNode;
  // 后缀内容
  suffix?: string | ReactNode;
  // 自定义样式
  styled?: StyledType;
  // Space组件配置
  spaceOptions?: SpaceProps;
  // 选项改变时
  onChange?: (value: boolean) => void;
} & Omit<AntCheckboxProps, 'onChange'>;

/**
 * @name 单个勾选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param prefix 前缀内容
 * @param suffix 后缀内容
 * @param spaceOptions Space组件配置
 * @link https://ant.design/components/checkbox-cn/
 */
const Checkbox: FC<CheckboxProps> = (props) => {
  const { value, prefix, suffix, spaceOptions, styled, onChange, ...rest } = props;
  return (
    <Space className='w-full' css={css(styled)} {...spaceOptions}>
      {prefix}
      <AntCheckbox
        checked={Boolean(value)}
        onChange={(e) => onChange?.(e?.target?.checked)}
        {...rest}
      />
      {suffix}
    </Space>
  );
};

export default Checkbox;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
import type { ChangeEvent, FC } from 'react';
import type { StyledType } from 'src/types';
import { TextAreaWrapper } from './Styled';

export type TextAreaProps = {
  styled?: StyledType;
  onChange?: (value: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
} & Omit<AntTextAreaProps, 'onChange'>;

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const TextArea: FC<TextAreaProps> = (props) => {
  const { styled, onChange, ...rest } = props;
  return (
    <TextAreaWrapper
      css={css(styled)}
      onChange={(e) => onChange?.(e?.target?.value, e)}
      {...rest}
    />
  );
};

export default TextArea;

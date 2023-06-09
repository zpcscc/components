/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
import type { StyledType } from 'src/type';
import { TextAreaWrapper } from './Styled';

export interface TextAreaProps extends Omit<AntTextAreaProps, 'onChange'> {
  styled?: StyledType;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const TextArea: React.FC<TextAreaProps> = (props) => {
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

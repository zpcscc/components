/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Space, Text, TextArea } from '@zpcscc/components';
import { toString } from '@zpcscc/utils';
import type { FC } from 'react';
import type { StyledType } from 'src/type/customType';

export type ResultTextareaProps = {
  value: any;
  styled?: StyledType;
};

/**
 * @name 结果文本域，用于展示组件返回的值
 * @param props
 * @returns
 */
const ResultTextarea: FC<ResultTextareaProps> = (props) => {
  const { value, styled, ...rest } = props;
  return (
    <Space direction='vertical' css={css(styled)} {...rest}>
      <Text>onChange返回的结果</Text>
      <TextArea value={toString(value)} style={{ width: '300px' }} />
    </Space>
  );
};

export default ResultTextarea;

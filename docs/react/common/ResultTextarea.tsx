/** @jsxImportSource @emotion/react */
import { Space, Text, TextArea } from '@dxsixpc/components';
import { dataToString } from '@dxsixpc/utils';
import { css } from '@emotion/react';
import type { StyledType } from 'src/type';

export interface ResultTextareaProps {
  value: any;
  styled?: StyledType;
}

/**
 * @name 结果文本域，用于展示组件返回的值
 * @param props
 * @returns
 */
const ResultTextarea: React.FC<ResultTextareaProps> = (props) => {
  const { value, styled, ...rest } = props;
  return (
    <Space direction='vertical' css={css(styled)} {...rest}>
      <Text>onChange返回的结果</Text>
      <TextArea value={dataToString(value)} style={{ width: '300px' }} />
    </Space>
  );
};

export default ResultTextarea;

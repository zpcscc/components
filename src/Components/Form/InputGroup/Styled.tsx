import styled from '@emotion/styled';
import { Space } from 'antd';

export const InputGroupWrapper = styled(Space.Compact)`
  .ant-input:first-of-type {
    border-radius: 6px 6px 0 0;
  }
  .ant-input:last-of-type {
    border-radius: 0 0 6px 6px;
  }
`;

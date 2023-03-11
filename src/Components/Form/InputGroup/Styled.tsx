import styled from '@emotion/styled';
import { Input } from 'antd';

export const InputGroupWrapper = styled(Input.Group)`
  .ant-input:first-of-type {
    border-radius: 6px 6px 0 0;
  }
  .ant-input:last-of-type {
    border-radius: 0 0 6px 6px;
  }
`;

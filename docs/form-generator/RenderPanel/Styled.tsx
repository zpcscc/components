import styled from '@emotion/styled';
import { Space } from 'antd';

export const RenderSpace = styled(Space)`
  & > .ant-space-item:last-child {
    height: 500px;
    width: 450px;
    overflow: auto;
  }
`;

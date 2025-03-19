import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & > div {
    width: 100%;
  }
  .ant-list {
    width: 100%;
    .ant-checkbox-group {
      width: 100%;
      .ant-list-item {
        display: flex;
        & > label {
          width: 100%;
          span {
            white-space: pre-line;
          }
        }
      }
    }
  }
`;

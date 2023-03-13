import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 100px;
  display: flex;
  flex-direction: var(--flex-direction, row);
  .ant-slider {
    width: 98%;
    margin: 10px 1%;
    margin-right: var(--margin-right, 16px);
  }
  .ant-input-number {
    width: var(--input-number-width, 110px);
  }
`;

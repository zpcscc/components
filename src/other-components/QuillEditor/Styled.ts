import styled from '@emotion/styled';

type Wrapper = {
  toolbarHeight?: number;
};

export const Wrapper = styled.div<Wrapper>`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .ql-container {
    flex: 1;
  }
`;

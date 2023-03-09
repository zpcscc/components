import styled from '@emotion/styled';

// 拖拽容器布局
export const SortableWrapper = styled.div`
  min-width: 200px;
  border: 1px dashed rgb(187, 187, 187);
  margin-bottom: 8px;
  background-color: #fff;
  &:hover {
    border: 1px solid #4096ff;
  }
  .ant-form-item {
    margin: 0;
  }
  z-index: 999;
`;
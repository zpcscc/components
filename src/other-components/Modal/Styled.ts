import styled from '@emotion/styled';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

export const ModalWrapper = styled.div``;

export const ModalMask = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
  ${(props: { isVisible: any }) => `opacity: ${props.isVisible ? 1 : 0}`};
`;

export const ModalContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  ${(props: { isVisible: any }) =>
    props.isVisible
      ? `
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      `
      : `
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      `}
`;

// 关闭按钮
export const ModalCloseBtn = styled(CloseOutlined)`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  font-size: 16px;
`;

// 拖拽按钮
export const ModalDragBtn = styled(MenuOutlined)`
  position: absolute;
  top: 6px;
  left: 6px;
  background: transparent;
  border: none;
  font-size: 16px;
`;

import { css } from '@emotion/react';
import { type FC, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import useDrag from 'src/hooks/useDrag';
import { type StyledType } from 'src/types';
import { ModalCloseBtn, ModalContainer, ModalDragBtn, ModalMask, ModalWrapper } from './Styled';
import { useAnimation, useShowModal } from './hooks';
import { type ModalInstanceType } from './types';

let modalIdCounter = 0; // 用于生成唯一 ID
const modals: ModalInstanceType = {}; // 存储各个 modal 实例的 root

export type ModalProps = {
  id?: string;
  show?: boolean;
  mask?: boolean;
  closeable?: boolean;
  draggable?: boolean;
  children: ReactNode;
  onClose?: () => void;
  styled?: StyledType;
};

export type ModalMethodType = {
  show: (props: ModalProps) => string;
  hide: (id: string) => void;
};

/**
 * @name 自定义弹框
 * @param show 是否显示弹框
 * @param mask 是否开启遮罩
 * @param closeable 是否显示关闭按钮
 * @param draggable 是否可拖动
 * @param children 自定义的需要渲染的dom
 * @param onClose 关闭弹框的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 */
const Modal: FC<ModalProps> & ModalMethodType = (props) => {
  const {
    id,
    mask = true,
    show = false,
    closeable = false,
    draggable = false,
    styled,
    children,
    onClose
  } = props;
  const { bindDragHandle, bindDragTarget, resetPosition } = useDrag(); // 拖拽功能
  const { isVisible, setIsVisible } = useAnimation({ id, modals, onClose }); // 控制显示与隐藏的动画
  const { showModal, handleClose } = useShowModal({
    id,
    show,
    hide: Modal.hide,
    resetPosition,
    onClose,
    setIsVisible
  }); // 控制显示与隐藏

  return (
    showModal && (
      <ModalWrapper css={css(styled)}>
        {mask && <ModalMask isVisible={isVisible} onClick={handleClose} />}
        <ModalContainer isVisible={isVisible}>
          <div ref={draggable ? bindDragTarget : null}>
            {closeable && <ModalCloseBtn onClick={handleClose} />}
            {draggable && <ModalDragBtn ref={bindDragHandle} />}
            {children}
          </div>
        </ModalContainer>
      </ModalWrapper>
    )
  );
};

// 命令式弹框参数
export type ModalOptions = Omit<ModalProps, 'id' | 'show'>;

Modal.show = (options: ModalOptions) => {
  const id = `modal-${++modalIdCounter}`;
  const div = document.createElement('div');
  div.id = id;
  document.body.append(div);
  const root = createRoot(div);
  root.render(<Modal show={true} id={id} {...options} />);
  modals[id] = { root };
  return id;
};

Modal.hide = (id: string) => {
  const modalInstance = modals[id];
  modalInstance?.setIsVisible?.(false); // 触发隐藏动画
  setTimeout(() => {
    modalInstance?.onClose?.(); // 触发隐藏动画
    modalInstance?.root?.unmount(); // 动画结束后卸载组件
    delete modals[id];
    const div = document.querySelector(`#${id}`);
    div?.remove();
  }, 300); // 动画时间
};

export default Modal;

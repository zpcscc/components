import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { type FC, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import useDrag from 'src/hooks/useDrag';
import { type StyledType } from 'src/types';
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
    onClose,
  } = props;
  const { bindDragHandle, bindDragTarget, resetPosition } = useDrag(); // 拖拽功能
  const { isVisible, setIsVisible } = useAnimation({ id, modals, onClose }); // 控制显示与隐藏的动画
  const { showModal, handleClose } = useShowModal({
    id,
    show,
    hide: Modal.hide,
    resetPosition,
    onClose,
    setIsVisible,
  }); // 控制显示与隐藏

  return (
    showModal && (
      <div css={css(styled)}>
        {mask && (
          <div
            className='fixed top-0 left-0 w-100vw h-100vh bg-#0000007f z-999'
            style={{
              transition: 'opacity 0.2s ease-in-out',
              opacity: isVisible ? 1 : 0,
            }}
            role='button'
            onClick={handleClose}
          />
        )}
        <div
          className='fixed top-50% left-50% z-1000'
          style={{
            transition: 'opacity 0.2s ease-in-out,transform 0.2s ease-in-out',
            opacity: isVisible ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.8})`,
          }}
        >
          <div ref={draggable ? bindDragTarget : null}>
            {closeable && (
              <CloseOutlined
                className='absolute top-6px right-6px bg-transparent b-none text-16px'
                onClick={handleClose}
              />
            )}
            {draggable && (
              <MenuOutlined
                className='absolute top-6px left-6px bg-transparent b-none text-16px'
                ref={bindDragHandle}
              />
            )}
            {children}
          </div>
        </div>
      </div>
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
  }, 200); // 动画时间
};

export default Modal;

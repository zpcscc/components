import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { type ModalInstanceType } from './types';

type UseAnimationProps = {
  id: string | undefined;
  modals: ModalInstanceType;
  onClose?: () => void;
};

// 控制弹框动画显示隐藏的 hook
export const useAnimation = ({ id, modals, onClose }: UseAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (id && modals[id]) {
      modals[id].setIsVisible = setIsVisible;
      modals[id].onClose = onClose;
    }
  }, [id]);

  return { isVisible, setIsVisible };
};

type UseShowModalProps = {
  show: boolean;
  id?: string;
  hide?: (id: string) => void;
  onClose?: () => void;
  resetPosition?: () => void;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

// 控制弹框显示隐藏的 hook
export const useShowModal = ({
  show,
  id,
  hide,
  setIsVisible,
  onClose,
  resetPosition,
}: UseShowModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    resetPosition?.();
    if (id) {
      hide?.(id);
    } else {
      setIsVisible(false);
    }
    setTimeout(() => {
      setShowModal(false);
      onClose?.();
    }, 300); // 动画时间与 CSS 中的过渡时间保持一致
  };

  useEffect(() => {
    if (show) {
      setShowModal(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }
  }, [show]);

  return { handleClose, showModal, setShowModal };
};

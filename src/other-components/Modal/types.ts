import { type Dispatch, type SetStateAction } from 'react';
import { type Root } from 'react-dom/client';

// 弹框实例类型
export type ModalInstanceType = Record<
  string,
  { root: Root; onClose?: () => void; setIsVisible?: Dispatch<SetStateAction<boolean>> }
>;

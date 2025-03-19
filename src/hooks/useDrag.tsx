import { type RefObject, useCallback, useEffect, useRef } from 'react';

// 定义返回的 bindDrag 类型
type UseDragResult = {
  bindDragHandle: (node: HTMLElement | null) => void;
  bindDragTarget: (node: HTMLElement | null) => void;
  resetPosition: () => void;
};

const useDrag = (): UseDragResult => {
  const dragHandleRef: RefObject<HTMLElement | null> = useRef(null); // 拖拽手柄区域
  const dragTargetRef: RefObject<HTMLElement | null> = useRef(null); // 实际移动的元素
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const resetPosition = useCallback(() => {
    currentPos.current = { x: 0, y: 0 };
  }, []);

  // 开始拖拽
  const handleMouseDown = useCallback((event: MouseEvent) => {
    isDragging.current = true;
    startPos.current = {
      x: event.clientX - currentPos.current.x,
      y: event.clientY - currentPos.current.y,
    };
  }, []);

  // 结束拖拽
  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // 拖拽过程中
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isDragging.current) return;

    const newPosX = event.clientX - startPos.current.x;
    const newPosY = event.clientY - startPos.current.y;

    currentPos.current = { x: newPosX, y: newPosY };

    // 更新实际移动元素的位置
    if (dragTargetRef.current) {
      dragTargetRef.current.style.transform = `translate(${newPosX}px, ${newPosY}px)`;
    }
  }, []);

  // 绑定拖拽手柄
  const bindDragHandle = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        dragHandleRef.current = node;

        node.addEventListener('mousedown', handleMouseDown);
      }
      // 如果没有指定手柄，直接使用目标元素作为手柄
      if (dragTargetRef.current) {
        dragTargetRef.current.addEventListener('mousedown', handleMouseDown);
      }
    },
    [handleMouseDown, handleMouseMove, handleMouseUp],
  );

  // 绑定实际移动的目标元素
  const bindDragTarget = useCallback(
    (node: HTMLElement | null) => {
      dragTargetRef.current = node;
      // 如果没有传入拖拽手柄，目标元素即为手柄
      if (!dragHandleRef.current) {
        node?.addEventListener('mousedown', handleMouseDown);
      }
    },
    [handleMouseDown, handleMouseMove, handleMouseUp],
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    bindDragHandle,
    bindDragTarget,
    resetPosition,
  };
};

export default useDrag;

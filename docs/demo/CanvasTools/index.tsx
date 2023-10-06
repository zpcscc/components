import { useLatest } from 'ahooks';
import { Modal } from 'antd';
import { fabric } from 'fabric';
import { useEffect, useRef, useState, type FC } from 'react';
import ContextMenu from './ContextMenu';
import type { MenuDataType } from './ContextMenu/type';
import Panel from './Panel';
import { CanvasContainer } from './Styled';
import type { AnyObject, PanelOptType } from './type';

// 画布工具
const CanvasTools: FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvas = useRef<fabric.Canvas | null>(null);
  const target = useRef<AnyObject | null>(null);
  const clipboard = useRef<AnyObject | null>(null);
  const defaultOpt = {
    width: 3,
    color: '#66ccff',
    backgroundColor: '#66ccff',
    showArrow: false,
    showBackground: false,
    isDrawingMode: true,
  };
  const [opt, setOpt] = useState<PanelOptType>(defaultOpt);
  const [modalOpt, setModalOpt] = useState<PanelOptType>({});
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [menuData, setMenuData] = useState<MenuDataType[]>([]);
  const optRef = useLatest(opt);

  const blankMenuData = [
    {
      label: '粘贴',
      onClick: () => {
        setOpen(false);
        if (!clipboard.current) {
          alert('还没复制过任何内容');
          return;
        }
        clipboard.current.clone((clonedObj) => {
          if (!clipboard.current) return;

          // 设置新内容的坐标位置
          clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
          });
          if (clonedObj.type === 'activeSelection') {
            // 活动选择需要一个对画布的引用
            clonedObj.canvas = canvas.current;
            clonedObj.forEachObject((obj) => {
              canvas.current?.add(obj);
            });
            clonedObj.setCoords();
          } else {
            canvas.current?.add(clonedObj);
          }
          clipboard.current.top += 10;
          clipboard.current.left += 10;
          canvas.current?.renderAll();
        });
      },
    },
  ];

  const overlayMenuData: MenuDataType[] = [
    {
      label: '复制',
      onClick: () => {
        setOpen(false);
        if (target.current) {
          target.current.clone((cloned: any) => {
            clipboard.current = cloned;
          });
        }
      },
    },
    ...blankMenuData,
    {
      label: '删除',
      onClick: () => {
        setOpen(false);
        if (target.current) {
          canvas.current?.remove?.(target.current as any);
        }
        target.current = null;
      },
    },
    {
      label: '设置',
      onClick: () => {
        setOpen(false);
        setModalOpt({
          color: target.current?.stroke,
          width: target.current?.strokeWidth,
          backgroundColor: target.current?.fill,
          showBackground: Boolean(target.current?.fill),
        });
        setIsModalOpen(true);
      },
    },
  ];

  // 初始化自由绘制笔刷工具
  const initFreeDrawingBrush = (canvas: fabric.Canvas) => {
    // 将画布的画笔设置成铅笔
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = defaultOpt.color;
    canvas.freeDrawingBrush.width = defaultOpt.width;
    // 拐角平滑度
    canvas.freeDrawingBrush.decimate = 5;
  };

  const updateCanvasContext = (canvas: fabric.Canvas) => {
    if (!canvas) return;
    initFreeDrawingBrush(canvas);
  };

  // 绑定相关事件
  const bindEvent = (canvas: fabric.Canvas) => {
    // 鼠标按下时
    canvas.on('mouse:down', (opt) => {
      const { button, e } = opt;
      // 在元素上右键
      if (button === 3) {
        if (opt.target) {
          target.current = opt.target;
          setMenuData(overlayMenuData);
        } else {
          setMenuData(blankMenuData);
        }
        // 设置定位
        setPosition({ left: e.pageX, top: e.pageY });
        // 显示菜单
        setOpen(true);
      } else {
        target.current = null;
        setOpen(false);
      }
    });
    // 路径生成完成时
    canvas.on('path:created', ({ path }: any) => {
      if (optRef.current.showBackground) {
        path.set('fill', optRef.current.backgroundColor);
      }
    });
  };

  // 全局配置更新时
  const onOptChange = (type: keyof PanelOptType, opt: PanelOptType) => {
    setOpt(opt);
    if (!canvas.current) return;
    switch (type) {
      case 'isDrawingMode': {
        canvas.current.isDrawingMode = opt.isDrawingMode;
        break;
      }
      case 'color':
      case 'width': {
        (canvas.current.freeDrawingBrush as any)[type] = opt[type];
        break;
      }
    }
  };
  // 弹出框
  const setTargetOpt = () => {
    if (!target.current || !canvas.current) return;

    if (!modalOpt.showBackground) {
      target.current.set('fill', null);
    }
    if (modalOpt.backgroundColor && modalOpt.showBackground) {
      target.current.set('fill', modalOpt.backgroundColor);
    }
    if (modalOpt.color) {
      target.current.set('stroke', modalOpt.color);
    }
    if (modalOpt.width) {
      target.current.set('strokeWidth', modalOpt.width);
    }
    setIsModalOpen(false);
    setModalOpt({});
    // 刷新画布
    canvas.current.renderAll();
  };

  useEffect(() => {
    const { offsetWidth, offsetHeight } = document.querySelector('#container') as HTMLElement;
    const options = {
      width: offsetWidth,
      height: offsetHeight,
      isDrawingMode: defaultOpt.isDrawingMode, // 开启自由绘画模式
      fireRightClick: true, // 启用右键，button的数字为3
      stopContextMenu: true, // 禁止默认右键菜单
    };
    canvas.current = new fabric.Canvas(canvasEl.current, options);
    updateCanvasContext(canvas.current);
    bindEvent(canvas.current);
    return () => {
      canvas?.current?.dispose();
    };
  }, []);

  return (
    <>
      <Panel opt={opt} onOptChange={onOptChange} />
      <CanvasContainer id='container'>
        <canvas ref={canvasEl} />
      </CanvasContainer>
      <ContextMenu open={open} position={position} menuData={menuData} />
      <Modal
        title='配置当前对象'
        open={isModalOpen}
        width={600}
        okText='确定'
        cancelText='取消'
        onOk={setTargetOpt}
        onCancel={() => setIsModalOpen(false)}
      >
        <Panel type='local' opt={modalOpt} onOptChange={(_type, opt) => setModalOpt(opt)} />
      </Modal>
    </>
  );
};

export default CanvasTools;

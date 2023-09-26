import { init, type EChartsType } from 'echarts';
import { useEffect, useState, type FC } from 'react';
import { chartOption } from './data';
import Panel from './Panel';
import type { PanelOptType, PosType, RectType } from './type';
import { drawArrow, getPos } from './utils';

// 画布工具
const CanvasTools: FC = () => {
  const defaultOpt = {
    width: 5,
    color: '#66ccff',
    showArrow: true,
    showBackground: false,
  };
  const [opt, setOpt] = useState<PanelOptType>(defaultOpt);
  let isDrawing = false;
  let myChart: EChartsType;
  let points: PosType[] = [];
  let context: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;
  let rect: RectType;

  // 初始化echarts图表
  const initEcharts = (chartDom: HTMLElement) => {
    // 初始化echarts
    myChart = init(chartDom);
    // 配置echarts
    myChart.setOption(chartOption);
    // 获取echarts的canvas节点
    canvas = myChart.getDom()?.childNodes?.[0]?.childNodes?.[0] as HTMLCanvasElement;
    // 初始化画布工具
    initTools();
  };

  // 初始化画布工具
  const initTools = () => {
    context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.shadowBlur = 0;
    if (!canvas || !context) return;
    const canvasRect = canvas.getBoundingClientRect();
    rect = {
      width: canvas.width,
      height: canvas.height,
      offsetWidth: canvas.offsetWidth,
      offsetHeight: canvas.offsetHeight,
      top: canvasRect.top,
      left: canvasRect.left,
    };
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
  };

  /**
   * @name 画笔工具自由绘制
   * @param event
   * @param startPos
   */
  const drawBrush = (context: CanvasRenderingContext2D, rect: RectType, event: MouseEvent) => {
    const pos = getPos(event, rect);
    points.push({ x: pos.x, y: pos.y });
    context.beginPath();
    const points_last_1 = points.at(-1);
    const points_last_2 = points.at(-2);
    const points_last_3 = points.at(-3);
    if (points_last_1 && points_last_2) {
      const x = (points_last_2.x + points_last_1.x) / 2;
      const y = (points_last_2.y + points_last_1.y) / 2;
      if (points.length === 2) {
        context.moveTo(points_last_2.x, points_last_2.y);
        context.lineTo(x, y);
      } else if (points_last_3) {
        const lastX = (points_last_3.x + points_last_2.x) / 2;
        const lastY = (points_last_3.y + points_last_2.y) / 2;
        context.moveTo(lastX, lastY);
        context.quadraticCurveTo(points_last_2.x, points_last_2.y, x, y);
      }
    }
    context.stroke();
    points.slice(0, 1);
  };

  // 监听鼠标按下事件
  const onMouseDown = (mouseDownEvent: MouseEvent) => {
    const pos = getPos(mouseDownEvent, rect);
    points.push({ x: pos.x, y: pos.y });
    context.strokeStyle = defaultOpt.color;
    context.lineWidth = defaultOpt.width;
    drawBrush(context, rect, mouseDownEvent);
    isDrawing = true;
  };
  // 监听鼠标移动事件
  const onMouseMove = (mouseMoveEvent: MouseEvent) => {
    if (isDrawing) {
      drawBrush(context, rect, mouseMoveEvent);
    }
  };
  // 监听鼠标抬起事件
  const onMouseUp = () => {
    const startPos = points.at(-5);
    const endPos = points.at(-1);
    if (startPos && endPos && defaultOpt.showArrow && isDrawing) {
      // 画箭头
      drawArrow({ ctx: context, startPos, endPos, color: defaultOpt.color });
    }
    points = [];
    isDrawing = false;
  };

  useEffect(() => {
    const chartDom = document.querySelector('#container') as HTMLElement;
    if (chartDom) initEcharts(chartDom);
    return () => myChart?.dispose();
  }, []);

  return (
    <>
      <Panel opt={opt} onOptChange={setOpt} />
      <div id='container' style={{ height: '80vh' }} />
    </>
  );
};

export default CanvasTools;

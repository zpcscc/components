import { fabric } from 'fabric';

/**
 * @name 画矩形
 * @param canvas fabric的canvas对象
 * @param opt fabric的line配置
 */
const drawLine = (canvas: fabric.Canvas, points?: number[], opt?: fabric.ILineOptions) => {
  const defaultPoints = [
    450,
    10, // 起始点坐标
    500,
    100, // 结束点坐标
  ];
  const defaultLineOpt: fabric.ILineOptions = {
    stroke: '#66ccff',
  };
  // 构建矩形
  const line = new fabric.Line(points || defaultPoints, { ...defaultLineOpt, ...opt });
  // 将矩形添加到画布中
  canvas.add(line);
};

export default drawLine;

import type { ArrowOptType, RectType } from './type';

/**
 * @name 获取鼠标在Canvas上的位置
 * @param event
 * @param rect
 */
export const getPos = (event: MouseEvent, rect: RectType) => {
  let x = event.pageX - rect.left;
  let y = event.pageY - rect.top;
  if (x <= 0) x = 0;
  if (x >= rect.width) x = rect.width;
  if (y <= 0) y = 0;
  if (y >= rect.height) y = rect.height;
  return { x, y };
};

/**
 *
 * @param  ctx Canvas绘图环境
 * @param  fromX 起点坐标（也可以换成 p1 ，只不过它是一个数组）
 * @param  fromY
 * @param  endPos.x  终点坐标 (也可以换成 p2 ，只不过它是一个数组)
 * @param  endPos.y
 * @param  theta  三角斜边一直线夹角
 * @param  headlen 三角斜边长度
 * @param  width 箭头线宽度
 * @param  color 箭头颜色
 */
export const drawArrow = (opts: ArrowOptType) => {
  const { ctx, startPos, endPos, theta = 30, headlen = 30, width = 5, color = '#66ccff' } = opts;
  const angle = (Math.atan2(startPos.y - endPos.y, startPos.x - endPos.x) * 180) / Math.PI;
  const angle1 = ((angle + theta) * Math.PI) / 180;
  const angle2 = ((angle - theta) * Math.PI) / 180;
  const topX = headlen * Math.cos(angle1);
  const topY = headlen * Math.sin(angle1);
  const botX = headlen * Math.cos(angle2);
  const botY = headlen * Math.sin(angle2);
  ctx.save();
  ctx.beginPath();
  let arrowX: number;
  let arrowY: number;
  arrowX = endPos.x + topX;
  arrowY = endPos.y + topY;
  ctx.moveTo(arrowX, arrowY);
  ctx.lineTo(endPos.x, endPos.y);
  arrowX = endPos.x + botX;
  arrowY = endPos.y + botY;
  ctx.lineTo(arrowX, arrowY);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.restore();
};

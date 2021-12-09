/**
 * 
 * @param {*} context: CanvasRenderingContext2D 
 * @param {*} moveTo 
 * @param {*} lineTo 
 */

interface IParams {
    context: CanvasRenderingContext2D,
    moveTo: [x: number, y: number];
    lineTo: [x: number, y: number];
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    lineWidth?: number;
}


export function drawLine(params: IParams) {
    const {context, moveTo, lineTo, strokeStyle, lineWidth} = params
    context.beginPath();
    context.moveTo(...moveTo);
    context.lineTo(...lineTo);
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();
}
"use strict";
/**
 *
 * @param {*} context: CanvasRenderingContext2D
 * @param {*} moveTo
 * @param {*} lineTo
 */
exports.__esModule = true;
exports.drawLine = void 0;
function drawLine(params) {
    var context = params.context, moveTo = params.moveTo, lineTo = params.lineTo, strokeStyle = params.strokeStyle, lineWidth = params.lineWidth;
    context.beginPath();
    context.moveTo.apply(context, moveTo);
    context.lineTo.apply(context, lineTo);
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();
}
exports.drawLine = drawLine;

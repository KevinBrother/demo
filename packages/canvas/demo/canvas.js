// Canvas类
var Canvas = /** @class */ (function () {
    function Canvas(ele) {
        // 初始化函数（输入的是canvas）
        // 设置canvas
        this.canvas = ele;
        this.ctx = this.canvas.getContext("2d");
        // 色块容器
        this.blockList = [];
    }
    Canvas.prototype.createBlock = function (option) {
        option.Canvas = this;
        this.blockList.push(new Block(option));
        this.painting();
    };
    Canvas.prototype.rendering = function (block) {
        // 渲染色块函数
        this.ctx.fillStyle = block.color;
        this.ctx.fillRect(block.x, block.y, block.w, block.h);
    };
    Canvas.prototype.painting = function () {
        var _this = this;
        // 将容器里的色块全部渲染到canvas
        // 清空画布（渲染之前应该将老的清空）
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.blockList.forEach(function (ele) {
            _this.rendering(ele);
        });
    };
    return Canvas;
}());
var Block = /** @class */ (function () {
    function Block(_a) {
        var w = _a.w, h = _a.h, x = _a.x, y = _a.y, color = _a.color, Canvas = _a.Canvas;
        // 初始化设置色块相关属性
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = color;
        this.Canvas = Canvas;
    }
    return Block;
}());

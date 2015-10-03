fabric.Object.prototype.setOriginToCenter = function () {
    this._originalOriginX = this.originX;
    this._originalOriginY = this.originY;

    var center = this.getCenterPoint();

    this.set({
        originX: 'center',
        originY: 'center',
        left: center.x,
        top: center.y
    });
};

fabric.Object.prototype.setCenterToOrigin = function () {
    var originPoint = this.translateToOriginPoint(
    this.getCenterPoint(),
    this._originalOriginX,
    this._originalOriginY);

    this.set({
        originX: this._originalOriginX,
        originY: this._originalOriginY,
        left: originPoint.x,
        top: originPoint.y
    });
};


function rotateObject(obj, angleOffset) {
    var resetOrigin = false;

    if (!obj) return;

    var angle = obj.getAngle() + angleOffset;

    if ((obj.originX !== 'center' || obj.originY !== 'center') && obj.centeredRotation) {
        obj.setOriginToCenter && obj.setOriginToCenter();
        resetOrigin = true;
    }

    obj.setAngle(angle).setCoords();

    if (resetOrigin) {
        obj.setCenterToOrigin && obj.setCenterToOrigin();
    }

    scope.renderAll();
}

function draw_grid(canvas) {

    var gridsize = 5,
        options = { stroke: "#000000", strokeWidth: 1, selectable:false, strokeDashArray: [5, 5]},
        height = canvas.height,
        width = canvas.width;


    for(var x=1; x < (width / gridsize); x++)
    {
        canvas.add(
            new fabric.Line(
                [100*x, 0, 100*x, height],
                options
            )
        );
        canvas.add(
            new fabric.Line(
                [0, 100*x, width, 100*x,],
                options
            )
        );
    }
}

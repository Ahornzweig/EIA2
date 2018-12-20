var A9Canvas;
(function (A9Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBezierCurve();
        drawSun();
        snowflakeRandom();
    }
    function drawBezierCurve() {
        console.log("curve");
        let start = { x: 0, y: 600 };
        let cp1 = { x: 110, y: 500 };
        let cp2 = { x: 220, y: 410 };
        let end = { x: 360, y: 330 };
        crc2.beginPath();
        crc2.moveTo(start.x, start.y);
        crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        crc2.lineWidth = 2;
        crc2.stroke();
    }
    function drawSun() {
        console.log("sun");
        crc2.fillStyle = "#ff6000";
        crc2.beginPath();
        crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    }
    function snowflakeRandom() {
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            console.log(x);
            drawSnowflake(x, y);
        }
    }
    function drawSnowflake(_x, _y) {
        crc2.fillStyle = "#5050ff";
        crc2.strokeStyle = "#5050ff";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 2, _y + 1);
        crc2.lineTo(_x, _y - 2);
        crc2.lineTo(_x + 2, _y + 1);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 2, _y - 1);
        crc2.lineTo(_x + 2, _y - 1);
        crc2.lineTo(_x, _y + 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(A9Canvas || (A9Canvas = {}));
//# sourceMappingURL=A9.js.map
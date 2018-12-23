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
        drawCloud();
        drawCloud2();
        snowflakeRandom();
        drawSled();
        drawSled2();
        drawChild();
        drawChild2();
    }
    function drawBezierCurve() {
        console.log("curve");
        let start = { x: 0, y: 600 };
        let cp1 = { x: 110, y: 500 };
        let cp2 = { x: 220, y: 410 };
        let end = { x: 360, y: 330 };
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(start.x, start.y);
        crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        crc2.lineTo(360, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        crc2.fillStyle = "#ff6000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    }
    function drawCloud() {
        crc2.fillStyle = "#ffffff";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(150, 300);
        crc2.quadraticCurveTo(180, 250, 120, 250);
        crc2.quadraticCurveTo(120, 200, 70, 230);
        crc2.quadraticCurveTo(40, 250, 60, 300);
        crc2.quadraticCurveTo(30, 350, 150, 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawCloud2() {
        crc2.fillStyle = "#ffffff";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(300, 200);
        crc2.quadraticCurveTo(350, 150, 270, 150);
        crc2.quadraticCurveTo(270, 80, 220, 130);
        crc2.quadraticCurveTo(190, 160, 210, 200);
        crc2.quadraticCurveTo(200, 270, 300, 200);
        crc2.closePath();
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
    function drawSled() {
        crc2.strokeStyle = "#8B4513";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(100, 610);
        crc2.lineTo(130, 585);
        crc2.moveTo(110, 603);
        crc2.lineTo(100, 590);
        crc2.moveTo(120, 594);
        crc2.lineTo(111, 581);
        crc2.moveTo(90, 598);
        crc2.lineTo(120, 573);
        crc2.moveTo(100, 610);
        crc2.quadraticCurveTo(80, 630, 90, 605);
        crc2.stroke();
    }
    function drawSled2() {
        crc2.strokeStyle = "#8B4513";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(200, 510);
        crc2.lineTo(230, 485);
        crc2.moveTo(210, 503);
        crc2.lineTo(200, 490);
        crc2.moveTo(220, 494);
        crc2.lineTo(211, 481);
        crc2.moveTo(190, 498);
        crc2.lineTo(220, 473);
        crc2.moveTo(230, 485);
        crc2.quadraticCurveTo(250, 470, 230, 470);
        crc2.stroke();
    }
    function drawChild() {
    }
    function drawChild2() {
    }
})(A9Canvas || (A9Canvas = {}));
//# sourceMappingURL=A9.js.map
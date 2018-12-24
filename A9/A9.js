/*Aufgabe: Aufgabe 9
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 24.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A9Canvas;
(function (A9Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBezierCurve();
        drawSun();
        drawCloud();
        drawCloud2();
        snowflakeRandom();
        drawSled();
        drawSled2();
        treeRandom();
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
        console.log("cloud1");
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
        console.log("cloud2");
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
        console.log("hiJan");
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
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
        console.log("hiNico");
        for (let i = 0; i < 2; i++) {
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo((i * 100) + 100, 610);
            crc2.lineTo((i * 100) + 130, 585);
            crc2.moveTo((i * 100) + 110, 603);
            crc2.lineTo((i * 100) + 100, 590);
            crc2.moveTo((i * 100) + 120, 594);
            crc2.lineTo((i * 100) + 111, 581);
            crc2.moveTo((i * 100) + 90, 598);
            crc2.lineTo((i * 100) + 120, 573);
            crc2.moveTo((i * 100) + 100, 610);
            crc2.quadraticCurveTo((i * 100) + 80, 630, (i * 100) + 90, 605);
            crc2.stroke();
        }
    }
    function drawSled2() {
        //console.log("hiJulia");
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
        //console.log("hiSebastian");
        for (let i = 0; i < 2; i++) {
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2.25;
            crc2.beginPath();
            crc2.moveTo((i * 100) + 90, 595);
            crc2.lineTo((i * 100) + 105, 582);
            crc2.lineTo((i * 100) + 105, 560);
            crc2.lineTo((i * 100) + 80, 570);
            crc2.moveTo((i * 100) + 105, 560);
            crc2.lineTo((i * 100) + 80, 580);
            crc2.moveTo((i * 100) + 90, 595);
            crc2.lineTo((i * 100) + 85, 610);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo((i * 100) + 105, 560);
            crc2.arc((i * 100) + 100, 550, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
        }
    }
    function drawChild2() {
        //console.log("hi");
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 2.25;
        crc2.beginPath();
        crc2.moveTo(250, 470);
        crc2.lineTo(252, 450);
        crc2.lineTo(262, 465);
        crc2.moveTo(252, 450);
        crc2.lineTo(252, 430);
        crc2.lineTo(247, 450);
        crc2.lineTo(230, 470);
        crc2.moveTo(252, 430);
        crc2.lineTo(260, 450);
        crc2.stroke();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(252, 430);
        crc2.arc(252, 422, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
    }
    function treeRandom() {
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            let start = { x: 0, y: 600 };
            let cp1 = { x: 110, y: 500 };
            let cp2 = { x: 220, y: 410 };
            let end = { x: 360, y: 330 };
            crc2.beginPath();
            crc2.moveTo(start.x, start.y);
            crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            if (crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        console.log("Trees", _x, _y);
        crc2.fillStyle = "#A52A2A";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y - 12.5);
        crc2.lineTo(_x + 5, _y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#228B22";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 13);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 20, _y - 13);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#228B22";
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 23);
        crc2.lineTo(_x, _y - 65);
        crc2.lineTo(_x + 20, _y - 23);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(A9Canvas || (A9Canvas = {}));
//# sourceMappingURL=A9.js.map
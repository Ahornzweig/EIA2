/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 24.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    window.addEventListener("load", init);
    let image;
    let fps = 25;
    let trees = [];
    let snowflakes = [];
    let childrenDown = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud();
        drawCloud2();
        image = A10.crc2.getImageData(0, 0, 360, 700);
        for (let i = 0; i < 7; i++) {
            let tree = new A10.Tree();
            tree.x = Math.random() * A10.crc2.canvas.width;
            tree.y = Math.random() * A10.crc2.canvas.height;
            A10.crc2.beginPath();
            A10.crc2.moveTo(0, 600);
            A10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            if (A10.crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 3; i++) {
            let child = new A10.ChildDown();
            child.x = Math.random() * A10.crc2.canvas.width;
            child.y = Math.random() * A10.crc2.canvas.height;
            child.dx = Math.random() * 3 - 5;
            child.dy = Math.random() * 4;
            A10.crc2.beginPath();
            A10.crc2.moveTo(200, 600);
            A10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            A10.crc2.lineTo(360, 600);
            A10.crc2.lineTo(200, 600);
            A10.crc2.closePath();
            if (A10.crc2.isPointInPath(child.x, child.y)) {
                childrenDown.push(child);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 222; i++) {
            let snow = new A10.Snowflake();
            console.log("randomJan");
            snow.x = Math.random() * A10.crc2.canvas.width;
            snow.y = Math.random() * A10.crc2.canvas.height;
            snow.dy = Math.random() * 3;
            snow.color = "#5050ff";
            snowflakes.push(snow);
        }
        update();
    }
    function update() {
        //window.setTimeout(update, 1000 / fps);
        A10.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < 7; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < 1; i++) {
            let child = childrenDown[i];
            child.move();
            child.draw();
        }
        for (let i = 0; i < 222; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        console.log("Update");
    }
    function drawSky() {
        A10.crc2.fillStyle = "#9fc1f9";
        A10.crc2.beginPath();
        A10.crc2.moveTo(0, 600);
        A10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        A10.crc2.lineTo(360, 0);
        A10.crc2.lineTo(0, 0);
        A10.crc2.closePath();
        A10.crc2.lineWidth = 2;
        A10.crc2.stroke();
        A10.crc2.fill();
    }
    function drawHill() {
        console.log("curve");
        A10.crc2.fillStyle = "#ffffff";
        A10.crc2.strokeStyle = "#9999ff";
        A10.crc2.beginPath();
        A10.crc2.moveTo(0, 600);
        A10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        A10.crc2.lineTo(360, 700);
        A10.crc2.lineTo(0, 700);
        A10.crc2.closePath();
        A10.crc2.lineWidth = 2;
        A10.crc2.stroke();
        A10.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        A10.crc2.fillStyle = "#f46542";
        A10.crc2.beginPath();
        A10.crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        A10.crc2.fill();
    }
    function drawCloud() {
        console.log("cloud1");
        A10.crc2.fillStyle = "#ffffff";
        A10.crc2.beginPath();
        A10.crc2.moveTo(150, 300);
        A10.crc2.quadraticCurveTo(180, 250, 120, 250);
        A10.crc2.quadraticCurveTo(120, 200, 70, 230);
        A10.crc2.quadraticCurveTo(40, 250, 60, 300);
        A10.crc2.quadraticCurveTo(30, 350, 150, 300);
        A10.crc2.closePath();
        A10.crc2.fill();
    }
    function drawCloud2() {
        console.log("cloud2");
        A10.crc2.fillStyle = "#ffffff";
        A10.crc2.beginPath();
        A10.crc2.moveTo(300, 200);
        A10.crc2.quadraticCurveTo(350, 150, 270, 150);
        A10.crc2.quadraticCurveTo(270, 80, 220, 130);
        A10.crc2.quadraticCurveTo(190, 160, 210, 200);
        A10.crc2.quadraticCurveTo(200, 270, 300, 200);
        A10.crc2.closePath();
        A10.crc2.fill();
    }
    function drawChild2() {
        console.log("Julia");
        A10.crc2.strokeStyle = "#8B4513";
        A10.crc2.lineWidth = 2;
        A10.crc2.beginPath();
        A10.crc2.moveTo(200, 510);
        A10.crc2.lineTo(230, 485);
        A10.crc2.moveTo(210, 503);
        A10.crc2.lineTo(200, 490);
        A10.crc2.moveTo(220, 494);
        A10.crc2.lineTo(211, 481);
        A10.crc2.moveTo(190, 498);
        A10.crc2.lineTo(220, 473);
        A10.crc2.moveTo(230, 485);
        A10.crc2.quadraticCurveTo(250, 470, 230, 470);
        A10.crc2.stroke();
        //console.log("hi");
        A10.crc2.strokeStyle = "#000000";
        A10.crc2.lineWidth = 2.25;
        A10.crc2.beginPath();
        A10.crc2.moveTo(250, 470);
        A10.crc2.lineTo(252, 450);
        A10.crc2.lineTo(262, 465);
        A10.crc2.moveTo(252, 450);
        A10.crc2.lineTo(252, 430);
        A10.crc2.lineTo(247, 450);
        A10.crc2.lineTo(230, 470);
        A10.crc2.moveTo(252, 430);
        A10.crc2.lineTo(260, 450);
        A10.crc2.stroke();
        A10.crc2.strokeStyle = "#000000";
        A10.crc2.fillStyle = "#000000";
        A10.crc2.lineWidth = 2;
        A10.crc2.beginPath();
        A10.crc2.moveTo(252, 430);
        A10.crc2.arc(252, 422, 6, 0, 2 * Math.PI);
        A10.crc2.fill();
        A10.crc2.stroke();
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=A10.js.map
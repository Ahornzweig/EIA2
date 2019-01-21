/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    window.addEventListener("load", init);
    let image;
    let fps = 25;
    let trees = [];
    let snowflakes = [];
    let childrenDown = [];
    let childrenUp = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A11.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawClouds();
        image = A11.crc2.getImageData(0, 0, 360, 700);
        for (let i = 0; i < 7; i++) {
            let tree = new A11.Tree();
            tree.x = Math.random() * A11.crc2.canvas.width;
            tree.y = Math.random() * A11.crc2.canvas.height;
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, 600);
            A11.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            if (A11.crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 6; i++) {
            let child = new A11.ChildDown();
            child.x = 360;
            child.y = Math.random() * 370 + 330;
            child.dx = Math.random() * 3 - 5;
            child.dy = -child.dx;
            childrenDown.push(child);
        }
        for (let i = 0; i < 6; i++) {
            let child = new A11.ChildUp();
            child.x = 0;
            child.y = Math.random() * 100 + 750;
            child.dx = Math.random() * 3;
            child.dy = -child.dx;
            childrenUp.push(child);
        }
        for (let i = 0; i < 222; i++) {
            let snow = new A11.Snowflake();
            console.log("randomJan");
            snow.x = Math.random() * A11.crc2.canvas.width;
            snow.y = Math.random() * A11.crc2.canvas.height;
            snow.dy = Math.random() * 3;
            snow.color = "#ffffff";
            snowflakes.push(snow);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A11.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < 7; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < 6; i++) {
            let child = childrenDown[i];
            child.move();
            child.draw();
        }
        for (let i = 0; i < 6; i++) {
            let child = childrenUp[i];
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
    //Hintergrund
    function drawSky() {
        A11.crc2.fillStyle = "#9fc1f9";
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 600);
        A11.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        A11.crc2.lineTo(360, 0);
        A11.crc2.lineTo(0, 0);
        A11.crc2.closePath();
        A11.crc2.lineWidth = 2;
        A11.crc2.stroke();
        A11.crc2.fill();
    }
    function drawHill() {
        console.log("curve");
        A11.crc2.fillStyle = "#ffffff";
        A11.crc2.strokeStyle = "#9999ff";
        A11.crc2.beginPath();
        A11.crc2.moveTo(0, 600);
        A11.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        A11.crc2.lineTo(360, 700);
        A11.crc2.lineTo(0, 700);
        A11.crc2.closePath();
        A11.crc2.lineWidth = 2;
        A11.crc2.stroke();
        A11.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        A11.crc2.fillStyle = "#f46542";
        A11.crc2.beginPath();
        A11.crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        A11.crc2.fill();
    }
    function drawClouds() {
        console.log("cloud1");
        A11.crc2.fillStyle = "#ffffff";
        A11.crc2.beginPath();
        A11.crc2.moveTo(150, 300);
        A11.crc2.quadraticCurveTo(180, 250, 120, 250);
        A11.crc2.quadraticCurveTo(120, 200, 70, 230);
        A11.crc2.quadraticCurveTo(40, 250, 60, 300);
        A11.crc2.quadraticCurveTo(30, 350, 150, 300);
        A11.crc2.closePath();
        A11.crc2.fill();
        console.log("cloud2");
        A11.crc2.fillStyle = "#ffffff";
        A11.crc2.beginPath();
        A11.crc2.moveTo(300, 200);
        A11.crc2.quadraticCurveTo(350, 150, 270, 150);
        A11.crc2.quadraticCurveTo(270, 80, 220, 130);
        A11.crc2.quadraticCurveTo(190, 160, 210, 200);
        A11.crc2.quadraticCurveTo(200, 270, 300, 200);
        A11.crc2.closePath();
        A11.crc2.fill();
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=A11.js.map
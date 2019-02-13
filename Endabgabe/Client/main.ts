/*Aufgabe: Aufgabe 11
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Finaly {

    window.addEventListener("load", init);

    function init(): void {
        document.getElementById("div").style.display = "initial";
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementsByTagName("button")[0];
        start.addEventListener("click", main);

        document.getElementById("hud").style.display = "none";
        document.getElementById("end").style.display = "none";

    };

    export let crc2: CanvasRenderingContext2D;
    let image: ImageData;
    let fps: number = 25;
    let allObjects: Origin[] = [];
    let SB: SnowBalls[] = [];
    let children: Children[] = [];
    let score: number = 0;

    function main(_event: Event): void {

        document.getElementById("div").style.display = "none";
        document.getElementById("hud").style.display = "initial";
        document.getElementById("end").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "initial";

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        canvas.addEventListener("click", throwSB);

        crc2 = canvas.getContext("2d");

        drawSky();
        drawHill();
        drawSun();
        drawClouds();
        image = crc2.getImageData(0, 0, 360, 700);

        for (let i: number = 0; i < 7; i++) {
            let tree: Tree = new Tree();

            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);

            if (crc2.isPointInPath(tree.x, tree.y)) {
                allObjects.push(tree);
            }
            else {
                i--;
            }
        }

        for (let i: number = 0; i < 20; i++) {
            let child: Children = new Children();
            child.x = 360;
            child.y = Math.random() * 370 + 330;
            child.dx = Math.random() * 3 - 5;
            child.dy = - child.dx;
            child.state = "down";
            children.push(child);

        }

        for (let i: number = 0; i < 222; i++) {
            let snow: Snowflake = new Snowflake();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = 0;
            snow.dy = Math.random() * 3;
            snow.color = "#ffffff";

            allObjects.push(snow);
        }

        update();
    }

    function throwSB(_event: MouseEvent): void {
        if (SB.length < 20) {
            let snowB: SnowBalls = new SnowBalls();

            snowB.x = _event.clientX;
            snowB.y = _event.clientY;
            snowB.radius = 50;
            snowB.state = "throw";
            SB.push(snowB);

            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
            canvas.addEventListener("click", throwSB);
        }

    }

    function update(): void {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            window.setTimeout(update, 1000 / fps);
            crc2.putImageData(image, 0, 0);
        }

        if (SB.length > 19) {
            window.setTimeout(end, 4000);
        }

        for (let i: number = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }

        for (let i: number = 0; i < children.length; i++) {
            children[i].move();
            children[i].draw();
        }

        for (let i: number = 0; i < SB.length; i++) {
            if (SB[i].radius > 15) {
                SB[i].move();
                SB[i].draw();
            }
            else {
                if (SB[i].radius == 15) {
                    SB[i].move();
                    SB[i].draw();
                    for (let i2: number = 0; i2 < children.length; i2++) {
                        if (SB[i].hit(children[i2].x, children[i2].y) == true && children[i2].state == "down") {
                            children[i2].state = "up";
                            score += Math.floor(children[i2].dy * children[i2].dx);
                            document.getElementById("score").innerHTML = "Curent Score: " + score.toString();
                            document.getElementById("throw").innerHTML = "SnowBalls you have throwen: " + SB.length.toString();
                        }
                        else {
                            document.getElementById("throw").innerHTML = "SnowBalls you have throwen: " + SB.length.toString();
                        }
                    }
                }
            }
        }
    }

    function end(): void {
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("hud").style.display = "none";
        document.getElementById("end").style.display = "initial";
        document.getElementById("result").innerHTML = "Your Low-Score: " + score.toString();
        document.getElementById("result").setAttribute("value", score.toString());
        document.getElementById("new").addEventListener("click", init);
    }


    //Hintergrund
    function drawSky(): void {

        crc2.fillStyle = "#9fc1f9";
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }

    function drawHill(): void {
        console.log("curve");

        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#9999ff";
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        crc2.lineTo(360, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }

    function drawSun(): void {
        console.log("sun");
        crc2.fillStyle = "#f46542";
        crc2.beginPath();
        crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawClouds(): void {
        console.log("cloud1");
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(150, 300);
        crc2.quadraticCurveTo(180, 250, 120, 250);
        crc2.quadraticCurveTo(120, 200, 70, 230);
        crc2.quadraticCurveTo(40, 250, 60, 300);
        crc2.quadraticCurveTo(30, 350, 150, 300);
        crc2.closePath();
        crc2.fill();

        console.log("cloud2");
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(300, 200);
        crc2.quadraticCurveTo(350, 150, 270, 150);
        crc2.quadraticCurveTo(270, 80, 220, 130);
        crc2.quadraticCurveTo(190, 160, 210, 200);
        crc2.quadraticCurveTo(200, 270, 300, 200);
        crc2.closePath();
        crc2.fill();
    }
}
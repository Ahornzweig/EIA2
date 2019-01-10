var A10;
(function (A10) {
    class Tree {
        draw() {
            console.log("Trees", this.x, this.y);
            A10.crc2.fillStyle = "#A52A2A";
            A10.crc2.strokeStyle = "#A52A2A";
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x + 5, this.y + 7.5);
            A10.crc2.lineTo(this.x - 5, this.y + 7.5);
            A10.crc2.lineTo(this.x - 5, this.y - 12.5);
            A10.crc2.lineTo(this.x + 5, this.y - 12.5);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = "#228B22";
            A10.crc2.strokeStyle = "#0f7027";
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 30, this.y - 10);
            A10.crc2.lineTo(this.x, this.y - 55);
            A10.crc2.lineTo(this.x + 30, this.y - 10);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = "#228B22";
            A10.crc2.strokeStyle = "#0f7027";
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 27, this.y - 27.5);
            A10.crc2.lineTo(this.x, this.y - 75);
            A10.crc2.lineTo(this.x + 27, this.y - 27.5);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.Tree = Tree;
})(A10 || (A10 = {}));
//# sourceMappingURL=tree.js.map
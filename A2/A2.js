var A2;
(function (A2) {
    let k0 = {
        name: "0",
        rot: 1,
        blau: 1,
        gruen: 1,
        gelb: 1,
    };
    let k1 = {
        name: "1",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k2 = {
        name: "2",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k3 = {
        name: "3",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k4 = {
        name: "4",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k5 = {
        name: "5",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k6 = {
        name: "6",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k7 = {
        name: "7",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k8 = {
        name: "8",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let k9 = {
        name: "9",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let kPluss2 = {
        name: "+2",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let kAussetzen = {
        name: "Aussetzen",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let kReverse = {
        name: "Reverse",
        rot: 2,
        blau: 2,
        gruen: 2,
        gelb: 2,
    };
    let arrey = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, kPluss2, kAussetzen, kReverse];
    let s1 = 4;
    let s2 = 4;
    let c = "";
    function getRendom(n) {
        return Math.floor(Math.random() * Math.floor(n));
    }
    function placeDiv(_color, _n, _x) {
        console.log(_color, _n, _x);
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x);
        document.getElementById("a" + _x).innerHTML += _n;
        let s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 100 + "px";
        s.height = 200 + "px";
        s.left = (_x + 0.1) * 120 + "px";
        s.bottom = 40 + "px";
        if (c == "#000000") {
            s.color = "white";
        }
    }
    let z;
    let i = prompt();
    z = Number(i);
    for (let d = 0; d < z; d++) {
        let l = getRendom(15);
        if (l == 13 && s1 > 0) {
            c = "#000000";
            s1--;
            placeDiv(c, "+4", d);
            continue;
        }
        else if (l == 13 && s1 <= 0) {
            d--;
            continue;
        }
        else {
            if (l == 14 && s2 > 0) {
                c = "#000000";
                s2--;
                placeDiv(c, "Farbwahl", d);
                continue;
            }
            else if (l == 14 && s2 <= 0) {
                d--;
                continue;
            }
            else {
                let m = getRendom(4);
                switch (m) {
                    case 0:
                        c = "#ff0000";
                        if (arrey[l].rot > 0) {
                            placeDiv(c, arrey[l].name, d);
                            arrey[l].rot--;
                            continue;
                        }
                    case 1:
                        c = "#00ff00";
                        if (arrey[l].gruen > 0) {
                            placeDiv(c, arrey[l].name, d);
                            arrey[l].gruen--;
                            continue;
                        }
                    case 2:
                        c = "#0000ff";
                        if (arrey[l].blau > 0) {
                            placeDiv(c, arrey[l].name, d);
                            arrey[l].blau--;
                            continue;
                        }
                    case 3:
                        c = "#ffff00";
                        if (arrey[l].gelb > 0) {
                            placeDiv(c, arrey[l].name, d);
                            arrey[l].gelb--;
                            continue;
                        }
                        else {
                            d--;
                            continue;
                        }
                }
            }
        }
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=A2.js.map
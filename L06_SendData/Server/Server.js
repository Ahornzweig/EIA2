"use strict";
const Http = require("http"); //Node.d.ts Datei wird importiert. Mit HTTP from "http" wird auf die HTTP objekte aus Node.d.ts zugegriffen.
//Forlesung: "http" Objekte werden als HTTP Objekte deklariert. Es importiert das Modul HTTP aus der Node.ts-Datei. HTTP hat Unterklassen. Ist ein Objekt(mit mehreren Eigenschaften), das in der Lage ist Server zu erstellen.
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // "Starting server" wird auf der Console ausgegeben
    let port = process.env.PORT; //Die Variable port wird als number deklariert, welche den Wert des ports des Heruku Servers hat.
    if (port == undefined)
        port = 8100; //Port wird zu 8100 gesetzt.
    let server = Http.createServer(); //server wird als Http.Server deffiniert und erstellt einen Server.
    server.addListener("request", handleRequest); //server bekommt einen listener. Falls der Server einen call/request bekommt, wird handleRequest ausgef�hrt.
    server.addListener("listening", handleListen); //server bekommt einen listener. Solange der Nutzer darauf zugreift wird handleListen ausgef�hrt.
    server.listen(port); //spezifizerung, dass der server auf den port h�rt.
    function handleListen() {
        console.log("Listening"); // "Listening" wird auf der Konsole ausgegeben.
    }
    function handleRequest(_request, _response) {
        //parameter _request (An IncomingMessage object is created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response' event respectively. It may be used to access response status, headers and data.) und _response (This object is created internally by an HTTP server � not by the user. It is passed as the second parameter to the 'request' event.) werden �bergeben.
        console.log("I hear voices!"); //"I hear voices!" wird auf der Konsole ausgegeben
        //console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // "content-type", "text/html; charset=utf-8" wird mit _response.setHeader in den header gesetzt
        //Forlesung: Sets a single header value for implicit headers. If this header already exists in the to-be-sent headers, its value will be replaced.
        _response.setHeader("Access-Control-Allow-Origin", "*"); // "Access-Control-Allow-Origin" wierd in den header gesetzt und dient dazu das die antwort des servers mit dem abgerufenen code der quelle geteilt wird.  "*" wird zus�tzlich in den header gesetzt
        /*let url: string = _request.url;
        if (url != "/favicon.ico") {
            let urlSection: string = Url.parse(url).search.substr(1);
            let childNodeHTML: string = "";
            for (let i: number = 0; i < urlSection.length; i++) {
                if (urlSection[i] == "&") {
                    articles.push(childNodeHTML);
                    childNodeHTML = "<br>";
                }
                else {
                    childNodeHTML += urlSection[i];
                }
            }
            articles.push(childNodeHTML);

            for (let i: number = 0; i < articles.length; i++) {
                _response.write(articles[i]);
            }
            console.log(articles);

        }*/
        let url = Url.parse(_request.url, true).query;
        for (let key in url) {
            _response.write(key + " = " + url[key] + "<br>");
        }
        //_response.write(_request.url); //Informationen(_request.url) werden an den header gesendet. 
        //"The first time response.write() is called, it will send the buffered header information and the first chunk of the body to the client. The second time response.write() is called, Node.js assumes data will be streamed, and sends the new data separately. That is, the response is buffered up to the first chunk of the body."
        _response.end(); // response wird beendet. 
        //"This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete."
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map
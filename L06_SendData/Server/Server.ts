import * as Http from "http"; //Node.d.ts Datei wird importiert. Mit HTTP from "http" wird auf die HTTP objekte aus Node.d.ts zugegriffen
  
namespace L06_SendData {
    console.log("Starting server"); // "Starting server" wird auf der Console ausgegeben
    let port: number = process.env.PORT; //Die Variable port wird als number deklariert. welchen den Wert des ports des Heruku Servers hat
    if (port == undefined) //falls port undefiniert ist. (dient als Sicherung)
        port = 8100; //wird port zu 8100 gesetzt

    let server: Http.Server = Http.createServer(); //server wird als Http.Server deffiniert und erstellt einen lokalen Server
    server.addListener("request", handleRequest); //server bekommt einen listener. falls der Server einen call/request bekommt, wird handleRequest ausgeführt
    server.addListener("listening", handleListen); //server bekommt einen listener. solande der nutzer darauf zugreift wird handleListen ausgeführt
    server.listen(port); //spezifizerung, dass der server auf den port 8100 hört

    function handleListen(): void {
        console.log("Listening"); // "Listening" wird auf der Konsole ausgegeben
    }
 
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {//parameter _request (An IncomingMessage object is created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response' event respectively. It may be used to access response status, headers and data.) und _response werden übergeben
        console.log("I hear voices!"); //"I hear voices!" wird auf der Konsole ausgegeben
        console.log(_request.url); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); // "content-type", "text/html; charset=utf-8" wird mit _response.setHeader in den header gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); // "Access-Control-Allow-Origin" wierd in den header gesetzt und dient dazu das die antwort des servers mit dem abgerufenen code der quelle geteilt wird.  "*" wird zusätzlich in den header gesetzt

        _response.write(_request.url); //Informationen(_request.url) werden an den header gesendet. "The first time response.write() is called, it will send the buffered header information and the first chunk of the body to the client. The second time response.write() is called, Node.js assumes data will be streamed, and sends the new data separately. That is, the response is buffered up to the first chunk of the body."
        
        _response.end(); // response wird beendet. "This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete."
    }
}
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://database-eia2.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("checkSearch");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function search(_event) {
        let getMartrikelNumber = document.getElementById("search");
        let mNumber = getMartrikelNumber.value;
        console.log(mNumber);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?command=search&searchFor=" + mNumber, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }
    DatabaseClient.search = search;
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map
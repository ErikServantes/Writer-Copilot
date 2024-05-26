function addCharacter() {
    var name = prompt("Nome do Personagem:");
    if (name) {
        var div = document.createElement("div");
        div.textContent = "Personagem: " + name;
        document.getElementById("characters-list").appendChild(div);
    }
}

function addWorldDetail() {
    var detail = prompt("Detalhe do Mundo:");
    if (detail) {
        var div = document.createElement("div");
        div.textContent = "Detalhe: " + detail;
        document.getElementById("world-details").appendChild(div);
    }
}

function addEvent() {
    var event = prompt("Evento:");
    if (event) {
        var div = document.createElement("div");
        div.textContent = "Evento: " + event;
        document.getElementById("events-timeline").appendChild(div);
    }
}

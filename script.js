function addCharacter() {
    var name = prompt("Nome do Personagem:");
    if (name) {
        var div = document.createElement("div");
        div.textContent = "Personagem: " + name;
        document.getElementById("characters-list").appendChild(div);
    }
}

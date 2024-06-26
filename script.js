document.querySelector('.menu-btn').addEventListener('click', function() {
    this.querySelector('.menu-btn__burger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('active');
});

function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.menu-btn__burger').classList.remove('open');
}

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
    var event = prompt("Descrição do Evento:");
    if (event) {
        var div = document.createElement("div");
        div.textContent = "Evento: " + event;
        document.getElementById("events-timeline").appendChild(div);
    }
}

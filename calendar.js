
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
 
    if (days < 1) {
        alert("Não possui esse número no calendário");
    } else if (days > 31) {
        alert("Não possui esse número no calendário");
    } else {
        let td = calendar.getElementsByTagName('td')[(parseInt(days) + 1)];
        td.style.backgroundColor = color;
    }
}

function alternar(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none") {
        document.getElementById(el).style.display = "block";
    } else {
        document.getElementById(el).style.display = "none";
    }
}


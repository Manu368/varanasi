function change_0() {
    document.getElementById("aboutButton").style.backgroundColor = "white";
    document.getElementById("aboutTab").style.display = "block";
    document.getElementById("timeToVisitTab").style.display = 'none';
    document.getElementById("attractionsTab").style.display = 'none';
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";
}

function change_1() {
    document.getElementById("timeToVisitButton").style.backgroundColor = "white";
    document.getElementById("aboutTab").style.display = "none";
    document.getElementById("timeToVisitTab").style.display = 'block';
    document.getElementById("attractionsTab").style.display = 'none';
    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";
}

function change_2() {
    document.getElementById("attractionsButton").style.backgroundColor = "white";
    document.getElementById("aboutTab").style.display = "none";
    document.getElementById("timeToVisitTab").style.display = 'none';
    document.getElementById("attractionsTab").style.display = 'block';
    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
}
function raten() {
    var counter = 1;
    var antwort1 = "Laika";
    var antwort2 = "Juri Gagarin"

    do {
        var eingabe = prompt(counter + ". Versuch. Wie hieß der erste Erdbewohner im All: ");

        if (eingabe == antwort2) {
            alert("Fast richtig, Sie dürfen noch einmal raten");
            continue;
        }

        if (eingabe == antwort1) {
            document.getElementById("ergebnis").innerHTML = "Richtig";
            break;
        }
        counter++;
    } while (counter <= 3);


    if (eingabe != antwort1) {
        document.getElementById("ergebnis").innerHTML = "3 x falsch";
    }
}
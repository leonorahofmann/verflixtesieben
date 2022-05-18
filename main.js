let wurf1 = 0
let wurf2 = 0
let anzahlWuerfe1 = 0
let anzahlWuerfe2 = 0
let summeSpieler1 = 0
let summeSpieler2 = 0
let spielerAnDerReihe = 1

function wuerfeln (){
    if (spielerAnDerReihe == 1)
    {
        let wurf1 = math.floor(math.random()*6 + 1)
    let wurf2 = math.floor(math.random()*6 + 1)
    document.getElementById("pW1").innerHTML = "Würfel 1:" + "wurf1"
    document.getElementById("pW2").innerHTML = "Würfel 2:" + "wurf2"

    anzahlWuerfe1++
    document.getElementById("pAnzahlwuerfeSpieler1").innerHTML = "Anzahl Würfe Spieler 1:" + anzahlWuerfe1
    if (wurf1 + wurf2 == 7) {
        spielerAnDerReihe = 2
        alert("Du hast eine 7 gewürfelt! Spieler 2 ist an der Reihe!")
    } else {
        summeSpieler1 + = wurf1 + wurf2
        document.getElementById("pSummeSpieler1").innerHTML = "Summe Sieler 1" + summeSpieler1
}


}


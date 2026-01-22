// Type of Attribute list
// 0 = Vigor
// 1 = Pre

var VigorAt = 0;
var PreAt = 0;

const VigorInicialAT = 6;
const VigorPorNivelAT = 2;

const PrecensaInicialAT = 2;
const PrecensaPorNivelAT = 1;

var Level = 1;

function CalculationDisplayer(E) {



    if (E < 99) {
        Level = E;
        console.log("hey")
    }
    document.getElementById("LevelDisplayAT").innerText = Level;
    //Level = document.getElementById("AtLevel").value;

    if (Level == 1) {
        VigorAt = Number(document.getElementById("AtletaAtributoVig").value);
        document.getElementById("DisplayAtPV").innerText = " PV: " + Number(6 + VigorAt);

        PreAt = Number(document.getElementById("AtletaAtributoPre").value);
        document.getElementById("DisplayAtPD").innerText = " PD: " + Number(2 + PreAt);
    }

    if (Level > 1) {

        VigorAt = document.getElementById("AtletaAtributoVig").value;
        PreAt = document.getElementById("AtletaAtributoPre").value;

        let VigorcalculadoAT = Number(VigorAt) + VigorInicialAT + Number(Level - 1) * (VigorPorNivelAT + Number(VigorAt));
        document.getElementById("DisplayAtPV").innerText = " PV: " + VigorcalculadoAT;

        let PrecalculadoAT = Number(PreAt) + PrecensaInicialAT + Number(Level - 1) * (PrecensaPorNivelAT + Number(PreAt));
        document.getElementById("DisplayAtPD").innerText = " PD: " + PrecalculadoAT;

    }

}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
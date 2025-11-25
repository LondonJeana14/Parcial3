function invertir() {
    let valor = document.getElementById("valor").value.trim();

    if (valor === "" || isNaN(valor)) {
        document.getElementById("resultado").innerHTML = "Ingrese un número válido.";
        return;
    }

    let invertido = valor.split("").reverse().join("");

    document.getElementById("resultado").innerHTML =
        "Número invertido: " + invertido;
}

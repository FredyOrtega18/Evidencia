function verificarCombate() {
    const ataque = parseInt(document.getElementById("ataque").value);
    const defensa = parseInt(document.getElementById("defensa").value);
    const nombre = document.getElementById("pokemonList").value;
    const tipo = document.getElementById("pokimon").value;

    if (isNaN(ataque) || isNaN(defensa)) {
        alert("Selecciona un Pokémon primero.");
        return;
    }

    const poderTotal = ataque + defensa;
    const poderPikachu = 90 + 40; 

    const datos = {
        nombre,
        tipo,
        ataque,
        defensa,
        resultado: poderTotal > poderPikachu ? "Ganó" : "Perdió"
    };

    localStorage.setItem("resultadoCombate", JSON.stringify(datos));

    if (poderTotal > poderPikachu) {
        alert("Fue registrado tu pokimon correctamente");
        window.location.href = "../vistas/combate.html";
    } else {
        alert("Fue registrado tu pokimon correctamente");
        window.location.href = "../vistas/combate.html";
    }
}

const datosPokemones = {  
    Pikachu: { tipo: "Eléctrico", ataque: 90, defensa: 40 },
    Charmander: { tipo: "Fuego", ataque: 85, defensa: 50 },
    Bulbasaur: { tipo: "Planta", ataque: 70, defensa: 65 },
    Squirtle: { tipo: "Agua", ataque: 60, defensa: 80 },
    Eevee: { tipo: "Normal", ataque: 75, defensa: 60 }
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pokemonList").addEventListener("change", function () {
        const seleccion = this.value;
        if (datosPokemones[seleccion]) {
            document.getElementById("pokimon").value = datosPokemones[seleccion].tipo;
            document.getElementById("ataque").value = datosPokemones[seleccion].ataque;
            document.getElementById("defensa").value = datosPokemones[seleccion].defensa;
    
            mostrarImagen(seleccion);
        } else {
            document.getElementById("pokimon").value = "";
            document.getElementById("ataque").value = "";
            document.getElementById("defensa").value = "";
    
            mostrarImagen("");
        }
    });
});


function mostrarImagen(nombre) {
    const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Eevee"];

    pokemons.forEach(pokemon => {
        const img = document.getElementById(`img${pokemon}`);
        if (img) {
            img.style.display = (pokemon === nombre) ? "block" : "none";
        }
    });
}


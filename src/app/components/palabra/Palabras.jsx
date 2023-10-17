"use client";
import React, { useState, useEffect } from "react";
import "./palabra.css";
import Contador from "../contador/Contador";
import Swal from "sweetalert2";
import Button from "../button/button";
import title from "../title/title";

export default function Palabras() {
  const palabrasAleatorias = [
    "plaza",
    "tabla",
    "lucir",
    "aviso",
    "flota",
    "nuevo",
    "campo",
    "debil",
    "perro",
    "gatos",
    "rosas",
    "amado",
    "verde",
    "comer",
    "noche",
    "casos",
    "casas",
    "coche",
    "arbol",
    "aguas",
    "fuego",
    "nieve",
    "amigo",
    "mouse",
    "salto",
    "manos",
    "cerdo",
    "llama",
    "tigre",
    "hojas",
    "dulce",
    "lugar",
    "dolor",
    "papel",
    "gente",
  ];
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [letrasIngresadas, setLetrasIngresadas] = useState(Array(5).fill(""));
  const [errores, setErrores] = useState(Array(5).fill(false));
  const [palabraSecreta, setPalabraSecreta] = useState(
    seleccionarPalabraAleatoria()
  );
  const [puntos, setPuntos] = useState(0);
  const [palabraDesordenada, setPalabraDesordenada] = useState(
    desordenarPalabra(palabraSecreta)
  );

  
  useEffect(() => {
    function win() {
      if (puntos > 7) {
        Swal.fire(
          'Good job!',
          'You guessed the word correctly!',
          'success'
        );
        resetearInputs();
      }
      
    }

    win();

    if (intentos >= 4) {
      Swal.fire({
        title: "Perdiste!",
        text: "Inténtalo de nuevo",
        icon: "error",
        confirmButtonText: "Ok",
      });
      resetearInputs();
    } else if (letrasIngresadas.join("") === palabraSecreta) {
      const nuevaPalabraSecreta = seleccionarPalabraAleatoria();
      setMensaje("¡Has adivinado la palabra! " + palabraSecreta);
      limpiarInputs();
      setPalabraSecreta(nuevaPalabraSecreta);
      setPuntos(puntos + 1);
      setIntentos(0);
      setPalabraDesordenada(desordenarPalabra(nuevaPalabraSecreta));
    }
  }, [intentos, letrasIngresadas, palabraSecreta, puntos]);

  function seleccionarPalabraAleatoria() {
    const palabrasDeCincoLetras = palabrasAleatorias.filter(
      (palabra) => palabra.length === 5
    );
    const indiceAleatorio = Math.floor(
      Math.random() * palabrasDeCincoLetras.length
    );
    return palabrasDeCincoLetras[indiceAleatorio];
  }

  function desordenarPalabra(palabra) {
    const palabraDesordenada = palabra
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return palabraDesordenada;
  }

  function resetearInputs() {
    setLetrasIngresadas(Array(5).fill(""));
    setErrores(Array(5).fill(false));
    setIntentos(0);
    setPuntos(0);
    // También puedes resetear otros estados si es necesario
  }

  function limpiarInputs() {
    setLetrasIngresadas(Array(5).fill(""));
    setErrores(Array(5).fill(false));
    // También puedes resetear otros estados si es necesario
  }

  function handleInputChange(e, index) {
    const inputValue = e.target.value;
    const nuevasLetrasIngresadas = [...letrasIngresadas];
    nuevasLetrasIngresadas[index] = inputValue;
    setLetrasIngresadas(nuevasLetrasIngresadas);

    const nuevosErrores = [...errores];
    if (inputValue !== "" && inputValue !== palabraSecreta[index]) {
      nuevosErrores[index] = true;
      setErrores(nuevosErrores);

      // Incrementar intentos solo si el valor ingresado no coincide con la letra esperada
      setIntentos(intentos + 1);
    } else {
      nuevosErrores[index] = false;
      setErrores(nuevosErrores);
    }
  }

  return (
    <div>
      <p>Pista: {palabraDesordenada}</p>
      <div className="palabra">
        {letrasIngresadas.map((letra, index) => (
          <input
            key={index}
            value={letra}
            onChange={(e) => handleInputChange(e, index)}
            style={{
              width: `${30 / letrasIngresadas.length}%`,
              border: errores[index] ? "1px solid red" : "1px solid #ccc",
              outlineColor: errores[index] ? "red" : "green",
            }}
            maxLength="1"
          />
        ))}
      </div>
      <div className="botones">
        <Contador texto="Intentos" contador={intentos} />
        <Contador texto="Puntaje" contador={puntos} />
      </div>
      {mensaje && <p>{mensaje}</p>}

      <div className="botones">
        <div onClick={resetearInputs}>
          <Button nombre="Reset" />
        </div>
        <div onClick={limpiarInputs}>
          <Button nombre="Clean" />
        </div>
      </div>
    </div>
  );
}

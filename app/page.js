"use client"
import { useState } from "react";

export default function Home() {

  const[nome, alteraNome] = useState("");

  function enviarFormulario(e){

    e.preventDefault();

    if(nome=="Jose"){
      alert("Parabéns, você digitou o nome correto!")
    }
    else{
      alert("Errou feio! Errou rude.")
    }
    
  }

  return (
    <div>
      <h1> Aula de publicação </h1>
      <p> Publicar um site na Versel usando NextJS e no GitHub Pages com arquivos estáticos.</p>


      <hr/>
      <p style={{backgroundColor: "yellow"}}> Este é uma nova versão do meu site</p>
      <hr/>

      <p> Ir Para a página de testes</p>

      <form onSubmit={ (e)=> enviarFormulario(e) }>

        <label> Digite seu nome </label>

        <input onChange={ (e)=> alteraNome(e.target.value) }/>

        <button> Enviar </button>

      </form>

    </div>
  );
}

import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function Contador() {

  const sContador = () => {
    
    axios.get('https://api.duda.co/api/sites/multiscreen/14557a2c/collection/clicks', {
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ZDIzOTYwYmY1MTpaRnlqQTVzVzdYSW8='
      }
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={sContador}>
        Incrementar contador
      </button>
    </div>
  )
}

export default Contador;

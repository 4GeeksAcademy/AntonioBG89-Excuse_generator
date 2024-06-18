/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let textExcuse = document.getElementById("excuse");
  innerHtml = resultado;

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let str = "";
    function randomNumber(arreglo) {
      return arreglo[Math.floor(Math.random() * arreglo.length)];
    }
    str += randomNumber(who) + " ";
    str += randomNumber(action) + " ";
    str += randomNumber(what) + " ";
    str += randomNumber(when) + " ";
    return str;
  }

  let resultado = generateExcuse();
  console.log(resultado);
};

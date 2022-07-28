const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  var liEls = document.querySelectorAll("li");
  for (var i = 0; i < liEls.length; i++) {
    liEls[i].parentNode.removeChild(liEls[i]);
  }
  console.log("los elementos li fueron eliminados");

  const listaLi = document.querySelector(".lista");

  cosasQueAprendimos.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.textContent = element.tema;
    newLi.className = element.class;
    listaLi.appendChild(newLi);
  });

  console.log(newLi);
}

main();

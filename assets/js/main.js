var imagenes= document.getElementsByClassName("image-work");

for(var i=0; i<imagenes.length; i++){

  imagenes[i].addEventListener("click",function(evento){
    evento.preventDefault();
    crearModal(i+1);
    document.getElementById("modal").style.display="block";
  });

}

function crearModal(numero){
  var divContenedor=document.getElementById("modal");
  for(var i=0; i<imagenes.length; i++){
    var divModal=document.createElement("div");
    var imgModal=document.createElement("img");
    var equisModal=document.createElement("a");
    equisModal.classList.add("equis");
    imgModal.classList.add("img-modal");
    divModal.classList.add("modal-background");

    equisModal.appendChild(document.createTextNode("x"));
    imgModal.setAttribute("src","assets/img/img-"+numero+".jpg");
    divModal.appendChild(equisModal);
    divModal.appendChild(imgModal);
    divContenedor.appendChild(divModal);

    equisModal.addEventListener("click",function(evento){
      evento.preventDefault();
      document.getElementById("modal").style.display="none";

    });
  }
}

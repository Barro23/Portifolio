/*!
 * Script para inserir os projetos no grid
 */

import projetos from '../json/projetos.json' assert { type: 'json'};
import tecnologias from '../json/tecnologias.json' assert { type: 'json'};

const grid_projetos = document.getElementById("grid-projetos");
const grid_tecnologias = document.getElementById("grid-tecnologias");

function getProjetos(){
    for(var i = 0; i < projetos.length; i++){

        grid_projetos.innerHTML += 
            '<a class="text-decoration-none text-dark" href="'+ projetos[i].repositorio +'" target="_blank">' +
            '   <div class="col h-100">' +
            '       <div class="card h-100 shadow-sm">' +
            '           <img class="bd-placeholder-img card-img-top object-fit-contain" width="100%" height="225" src="'+ projetos[i].imagem +'" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">' +
            '           <div class="card-body">' +
            '               <h5 class="card-title">'+ projetos[i].nome +'</h5>' +
            '               <p class="card-text">'+ projetos[i].descricao +'</p>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '</a>';
    }
}

function getTecnologias(){
    for(var i = 0; i < tecnologias.length; i++){

        grid_tecnologias.innerHTML += 
            '<div class="text-center border border-secondary rounded-3 p-5 m-5" style="width: fit-content;">' +
            '   <h4 class="fw-light">'+ tecnologias[i].nome +'</h4>' +
            '   <a class="text-decoration-none" href="'+ tecnologias[i].link +'" target="_blank">' +
            '       <img class="img-fluid" src="'+ tecnologias[i].image +'" width="128">' +
            '   </a>' +
            '</div>';
    }
}

getProjetos()
getTecnologias()

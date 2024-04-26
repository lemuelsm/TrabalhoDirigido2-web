
document.addEventListener("DOMContentLoaded", () => {

    const buttonCreate = document.querySelector("#buttonCreate");
    const buttonDelete = document.getElementsByClassName("btn-delete");


    buttonCreate.addEventListener('click', function(e){
        e.preventDefault();
        novaTarefa();
    });

    function novaTarefa(){
      var div = document.createElement("div");
      div.className = "container";
      var divtxt = document.createElement("div");
      divtxt.className = "text";

      divtxt.contentEditable = false;


      var button = document.createElement("button");
      button.className = "btn-delete";
      var txtDelete = document.createTextNode("Apagar");
      button.appendChild(txtDelete);
      var buttonEdit = document.createElement("button");
      buttonEdit.className = "btn-edit";
      var txtEdit = document.createTextNode("Editar");
      buttonEdit.appendChild(txtEdit);

      buttonEdit.addEventListener("click", () => {
            editar(buttonEdit);
      });
      
  
      var inputValue = document.getElementById("campoCriaTarefa").value;
      console.log(inputValue);
      var text = document.createTextNode(inputValue);
      divtxt.appendChild(text);
      div.appendChild(divtxt);
      div.appendChild(buttonEdit);
      div.appendChild(button);

     
      button.addEventListener("click", () => {
          button.parentNode.remove();
      })
  
    
  
  
      if(inputValue === ''){
          alert("Digite algo para adicionar");
      }else{
          var lista = document.getElementById("lista");
          lista.appendChild(div);
      }
      document.getElementById("campoCriaTarefa").value = "";

      
    }


    //Apagar
    const buttonsDelete = document.getElementsByClassName("btn-delete");

    for (let botao of buttonsDelete) {
        botao.addEventListener("click", () => {
            botao.parentNode.remove();
        })
    }

    console.log(buttonsDelete);




    function editar(botao) {


          botao.addEventListener("click", () => {
              const input = botao.parentNode.getElementsByTagName("div")[0];

              
              input.contentEditable = true;
              input.focus();
             
          });
    }






    const buttonsEdit = document.getElementsByClassName("btn-edit");

    for(let botao of buttonsEdit) {
        botao.addEventListener("click", () => {
            const input = botao.parentNode.getElementsByTagName("div")[0];
            
            input.contentEditable = true;
            input.focus();

        });
    }


    const click = document.addEventListener('click', function(e) {
        const elementoAtual = e.target;
        const isBtnEditClick = e.target.classList.contains("btn-edit");
        console.log(isBtnEditClick);
        console.log(e.target);

        if(isBtnEditClick) {

            const input = e.target.parentNode.getElementsByTagName("div")[0];
            input.contentEditable = true;
            input.focus();

        } else if(e.target.classList.contains("text")){
           
            editar(e.target);
            
        } else {
            
            const divsTxt = document.getElementsByClassName("text");

            for (let divs of divsTxt) {
                divs.contentEditable = false;
                console.log(divs.contentEditable);
            }
            
        }
    });


});

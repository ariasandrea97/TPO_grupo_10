//Funcion Formulario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}



function validacion() 
        {           
            //valido el nombre
            if (document.f1.nombre.value.length == 0) {
                alert("Por favor complete su nombre")
                document.fvalida.nombre.focus()
                return 0;
            }
           
            //valido el telefono
            valor = document.getElementById("telefono").value;          
            if( isNaN(valor) ) 
            {   alert("El telefono debe ser un numero!")
                elemento.focus();
                return 0;
            }
            else    
                {
                    if( valor < 1000000000 || valor > 9999999999 ) 
                    {   alert("Ingrese un numero de telefono válido")
                        elemento.focus();
                        return 0;
                    }
                }
             
            //valido el Email
            valor = document.getElementById("email").value;
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(valor)))
            {   alert("Por favor ingrese una direccion de email correcta")
                elemento.focus();
                return 0;
            }
 
            //el formulario se envia
            alert("Muchas gracias por enviar el formulario");
           /* document.f1.submit(); */        
        }

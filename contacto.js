

        
function validacion() 
{           
    //valido el nombre
    if (document.f1.nombre.value.length == 0) {
        alert("Por favor complete su nombre")
        document.f1.nombre.focus()

        return 0;
    }
   
    //valido el telefono
    valor=document.f1.telefono.value
    if( isNaN(valor) ) 
    {   alert("El telefono debe ser un numero!")
        document.f1.telefono.focus()

        return 0;
    }
    else    
        {
            if( valor < 1000000000 || valor > 9999999999 ) 
            {   alert("Ingrese un numero de telefono válido");
                document.f1.telefono.focus()

                return 0;
            }
        }
     
    //valido el Email
    valor=document.f1.email.value
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(valor)))
    {   alert("Por favor ingrese una direccion de email correcta");
        document.f1.email.focus()

        return 0;
    }

    //valido opciones
    indice = document.getElementById("opciones").selectedIndex;
    if( indice == null || indice == 0 ) 
    {    alert("Tenes que seleccionar un motivo!");
        document.f1.opciones.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar sus datos. En breve nos pondremos en contacto. ");
    document.f1.submit();
       
}







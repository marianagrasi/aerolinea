validarFormulario = () => {

    let departing = document.getElementById('fechaSalida').value
    let returning = document.getElementById('fechaRegreso').value
    let fechaActual = new Date().toISOString().split('T')[0];;

    if (departing === null || departing === '' || departing.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingresa una fecha de salida</span>';
        document.getElementById('errorDeparting').innerHTML = texto;
      }else if(departing < fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha de salida no puede ser anterior a la fecha actual.</span>';
        document.getElementById('errorDeparting').innerHTML = texto;
      }else if(departing > returning){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">la fecha de salida no puede ser posterior a la fecha de regreso.</span>';
        document.getElementById('errorDeparting').innerHTML = texto;
        }else{
        document.getElementById('errorDeparting').innerHTML = '';
      }

      if (returning === null || returning === '' || returning.length === 0){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Introduce una fecha de regreso</span>';
        document.getElementById('errorReturning').innerHTML = texto;
    }else if(returning < fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha de regreso no puede ser anterior a la fecha actual.</span>';
        document.getElementById('errorReturning').innerHTML = texto;
    }else{
        document.getElementById('errorReturning').innerHTML = '';   
      }
    }
    


const boton = document.querySelector('#mostrarVuelos')

boton.addEventListener('click',validarFormulario)

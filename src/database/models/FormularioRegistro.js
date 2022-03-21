const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario:  /^[ a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre:  /^[ a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contraseña:  /^. {4,12}$/, // 4 a 12 digitos.
	correo:  /^[ a-zA-Z0-9_.+-]+@ [a-zA-Z0-9-]+\.  [a-zA-Z0-9-. ]+$/,
	telefono:  /^\d{7,14}$/  // 7 a 14 números.
    }

     const campos = {
         usuario: false,
         nombre: false,
         password: false,
         password2: false,
         correo: false,
         telefono: false
     }
    
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
            break;

             case "nombre":
                 validarCampo(expresiones. nombre, e. target, 'nombre');
             break;

             case "password":
                 validarCampo(expresiones. password, e. target, 'password');
                 validarPassword2();
             break;

             case "password2":
                 validarPassword2();
             break;

             case "correo":
                 validarCampo(expresiones. correo, e. target, 'correo');
             break;

             case "telefono":
                 validarCampo(expresiones. telefono, e. target, 'telefono');
             break;
         }
     }
    
     const validarCampo = (expresion, input, campo) => {
         if(expresion.test(input.value)){
             document.getElementById(`grupo_1_${campo}`).classList.remove('formulario_1_grupo-incorrecto');
             document.getElementById(`grupo_1_${campo}`).classList.añadir('formulario_1_grupo-correcto');
             document.querySelector(`#grupo_1_${campo} i`).classList.add('fa-check-circle');
             document. querySelector(`#grupo_1_${campo} i`).classList.remove('fa-times-circle');
             document. querySelector(`#grupo_1_${campo} .formulario_1_input-error`).classList.remove('formulario_1_input-error-activo');
             campos[campo] = true;
         } else {
             document. getElementById(`grupo_1_${campo}`).classList.add('formulario_1_grupo-incorrecto');
             document. getElementById(`grupo_1_${campo}`).classList.remove('formulario_1_grupo-correcto');
             document. querySelector(`#grupo_1_${campo} i`).classList.add('fa-times-circle');
             document. querySelector(`#grupo_1_${campo} i`).classList.remove('fa-check-circle');
             document. querySelector(`#grupo_1_${campo} .formulario_1_input-error`).classList.add('formulario_1_input-error-activo');
             campos[campo] = false;
         }
     }
    
    const validarPassword2 = () => {
        const inputPassword1 = document. getElementById('password');
        const inputPassword2 = document. getElementById('password2');
    
        if(inputPassword1.value !== inputPassword2.value){
            document. getElementById(`grupo_1_password2`).classList.add('formulario_1_grupo-incorrecto');
            document. getElementById(`grupo_1_password2`).classList.remove('formulario_1_grupo-correcto');
            document. querySelector(`#grupo_1_password2 i`).classList.add('fa-times-circle');
            document. querySelector(`#grupo_1_password2 i`).classList.remove('fa-check-circle');
            document. querySelector(`#grupo_1_password2 .formulario_1_input-error`). classList. add('formulario_1_input-error-activo');
            campos['password'] = false;
        } else {
            document. getElementById(`grupo_1_password2`).classList.remove('formulario_1_grupo-incorrecto');
            document. getElementById(`grupo_1_password2`).classList.añadir('formulario_1_grupo-correcto');
            document. querySelector(`#grupo_1_password2 i`).classList.remove('fa-times-circle');
            document. querySelector(`#grupo_1_password2 i`).classList.add('fa-check-circle');
            document. querySelector(`#grupo_1_password2 .formulario_1_input-error`).classList.remove('formulario_1_input-error-activo');
            campos['password'] = true;
        }
    }
    
    inputs. forEach((input) => {
        input. addEventListener('keyup', validarFormulario);//() => {console.log('tecla levantada')}
        input. addEventListener('blur', validarFormulario);//() => {conseole.log('se ejecuto')}
    });
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const terminos = document.getElementById('terminos'); //para que tambien tenga en cuenta los terminos, para verificar que se encuentre marcado
        if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
            formulario.reset(); //reiniciar todos los campos del formulario
    
            document.getElementById('formulario_1_mensaje-exito').classList.add('formulario_1_mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario_1_mensaje-exito').classList.remove('formulario_1_mensaje-exito-activo');
            }, 5000);//para que el mensaje se vaya dentro de 5seg.
    
            document.querySelectorAll('.formulario_1_grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario_1_grupo-correcto');
            });
        } else {
            document.getElementById('formulario_1_mensaje').classList.add('formulario_1_mensaje-activo');
        }
    });
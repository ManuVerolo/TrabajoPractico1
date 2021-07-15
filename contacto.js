window.onload = function(){
    const $form = document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(e){
        e.preventDefault()
        const form = new FormData(this)
        nombre = form.get('name')
        email = form.get('email')
        mensaje = form.get('message')

        enviarConsulta(nombre, email,mensaje);

       limpiarForumulario();
    }

    function enviarConsulta(nombre, email, mensaje){
        var datos ={
            nombre,
            email,
            mensaje
        }

        var api = 'https://jsonplaceholder.typicode.com/posts'

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(datos)
        })

        .then((response) => response.json())
        .then((json) => console.log('Enviando desde el formulario de contacto: Nombre: ' + nombre + ', Email: ' + email + ', Mensaje: ' + mensaje))
        .catch(err => console.log('No se pudo enviar su mensaje: '+ err));
    }

    function limpiarForumulario(){
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('message').value = ""
    }
}
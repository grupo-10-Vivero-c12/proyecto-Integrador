let $formDelete = document.querySelectorAll('.formDelete');

$formDelete.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Prevenido");

        Swal.fire({
            title: '¿Está segur@?',
            text: "¡No podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: 'Borrado!',
                        text: 'El registro ha sido eliminado.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    }
                );
                form.submit();
            }
        })


    })
})

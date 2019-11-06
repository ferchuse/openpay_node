'use strict';

let server = 'http://localhost:5000/api/v1';
let client = {
    'name': '',
    'rfc': '',
    'company': '',
    'email': ''
}

$(document).ready(() => {
    $("#form_cliente").submit(saveClient);

    function saveClient(e) {
        e.preventDefault();
        client = {
            "name": $("#name").val(),
            "rfc": $("#rfc").val(),
            "company": $("#company").val(),
            "email": $("#email").val()
        }
        createClient();
    }

    const createClient = async () => {
        const { data } = await axios.post(server + '/customer', client)
        if (data.code === 200) {
            $('#notice')[0].classList.add('bg-success', 'p-2', 'text-white', 'rounded', 'col-md-4');
            $('#notice')[0].innerHTML = 'Se agrego correctamente';
        }
        if (data.code === 500) {
            $('#notice')[0].classList.add('bg-danger', 'p-2', 'text-white', 'rounded', 'col-md-4');
            $('#notice')[0].innerHTML = 'Hubo un error al procesar la información';
        }
        if (data.code === 404) {
            $('#notice')[0].classList.add('bg-danger', 'p-2', 'text-white', 'rounded', 'col-md-4');
            $('#notice')[0].innerHTML = 'No se pudo almecenar';
        }
    }

});

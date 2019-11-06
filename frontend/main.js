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
        sendData();
    }

    const sendData = async () => {
        const { data } = await axios.post(server, client)
        console.log(data);
    }

});

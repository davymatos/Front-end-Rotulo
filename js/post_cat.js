function post(url, body) {
    console.log("Body = ", body);
    let request = new XMLHttpRequest()
    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrar_cat() {
    event.preventDefault();
    let url = 'http://127.0.0.1:8000/categorias/'
    let nome = document.getElementById("nome").value

    console.log(nome)

    body = {
        "nome": nome
    }

    post(url, body)
}
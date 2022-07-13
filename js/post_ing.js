function post(url, body) {
    let request = new XMLHttpRequest()
    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(body)

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrar_ing() {
    event.preventDefault();
    let url = 'http://127.0.0.1:8000/ingredientes/'
    let nome_en = document.getElementById("nome_en").value
    let nome_alt = document.getElementById("nome_alt").value
    let nome_br = document.getElementById("nome_br").value
    let origem = document.getElementById("origem").value
    let funcao_principal = document.getElementById("funcao_principal").value
    let categoria = document.getElementById("categoria").value

    body = {
        "nome_en": nome_en,
        "nome_alt": nome_alt,
        "nome_br": nome_br,
        "origem": origem,
        "funcao_principal": funcao_principal,
        "categoria": categoria
    }

    post(url, body)
}
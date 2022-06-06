function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function listaIngredientes(ingredientes) {
    linha_ingredientes = document.createElement("tr");
    id = document.createElement("td");
    nome_en = document.createElement("td");
    nome_alt = document.createElement("td");
    nome_br = document.createElement("td");
    origem = document.createElement("td");
    funcao = document.createElement("td");
    referencia = document.createElement("td");
    categoria = document.createElement("td");

    id.innerHTML = ingredientes.ingrediente_id
    nome_en.innerHTML = ingredientes.nome_en
    nome_alt.innerHTML = ingredientes.nome_alt
    nome_br.innerHTML = ingredientes.nome_br
    origem.innerHTML = ingredientes.origem
    funcao.innerHTML = ingredientes.funcao_principal
    referencia.innerHTML = ingredientes.referencia
    categoria.innerHTML = ingredientes.categoria

    linha_ingredientes.appendChild(id);
    linha_ingredientes.appendChild(nome_en);
    linha_ingredientes.appendChild(nome_alt);
    linha_ingredientes.appendChild(nome_br);
    linha_ingredientes.appendChild(origem);
    linha_ingredientes.appendChild(funcao);
    linha_ingredientes.appendChild(referencia);
    linha_ingredientes.appendChild(categoria);

    return linha_ingredientes;
}

function visualBuscaIng(n_ingredientes) {
    nome_br = document.getElementById("nome_br");
    nome_en = document.getElementById("nome_en");
    nome_alt = document.getElementById("nome_alt");
    origem = document.getElementById("origem");
    funcao_principal = document.getElementById("funcao_principal");
    categoria = document.getElementById("categoria");

    nome_br.innerHTML = n_ingredientes.nome_br
    nome_en.innerHTML = n_ingredientes.nome_en
    nome_alt.innerHTML = n_ingredientes.nome_alt
    origem.innerHTML = n_ingredientes.origem
    funcao_principal.innerHTML = n_ingredientes.funcao_principal
    categoria.innerHTML = n_ingredientes.categoria
}

// function teste() {
//     let data_ingrediente = get("http://127.0.0.1:8000/ingredientes/");
//     let ingredientes = JSON.parse(data_ingrediente);

//     let result1 = ingredientes.filter(function(ingredientes) {
//         if (ingredientes.categoria == 1) {
//             ingredientes.categoria = "Produtos Saneantes";
//         } else if (ingredientes.categoria == 2) {
//             ingredientes.categoria = "Produtos Corporais";
//         } else if (ingredientes.categoria == 3) {
//             ingredientes.categoria = "Produtos Alimenticios";
//         }
//         return ingredientes.nome_br == query.value;
//     });

//     result1.forEach(element => {
//         let result_ing = visualBuscaIng(element);
//         return result_ing;
//     });
// }

// function passaValor(valor) {
//     window.location = "visualizar.html?ingrediente=" + valor;
//     teste();
// }

// function main() {
//     let query = document.getElementById("query");
//     document.getElementById("filter").onclick = function() {
//         let foi = query.value;
//         passaValor(foi);
//     };
// }

function main() {
    let data_ingrediente = get("http://127.0.0.1:8000/ingredientes/");
    let ingredientes = JSON.parse(data_ingrediente);

    let query = document.getElementById("query");

    document.getElementById("filter").onclick = function() {
        let result1 = ingredientes.filter(function(ingredientes) {
            if (ingredientes.categoria == 1) {
                ingredientes.categoria = "Produtos Saneantes";
            } else if (ingredientes.categoria == 2) {
                ingredientes.categoria = "Produtos Corporais";
            } else if (ingredientes.categoria == 3) {
                ingredientes.categoria = "Produtos Alimenticios";
            }
            return ingredientes.nome_br == query.value;
        });

        result1.forEach(element => {
            let result_ing = visualBuscaIng(element);
            return result_ing;
        });
    };
}

main()
function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function listaCategorias(categoria) {
    linha_categoria = document.createElement("tr");
    id = document.createElement("td");
    nome = document.createElement("td");

    id.innerHTML = categoria.categoria_id
    nome.innerHTML = categoria.nome

    linha_categoria.appendChild(id);
    linha_categoria.appendChild(nome);

    return linha_categoria;
}

function visualBusca(n_categoria) {
    result_cat = document.getElementById("div_resultado");
    dado = document.getElementById("visualiza_categoria");

    dado.innerHTML = n_categoria.nome

    result_cat.appendChild(dado);
    return result_cat;
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
    result_ing = document.getElementById("resultadoIng");
    nome_en = document.getElementById("nome_en");
    nome_alt = document.getElementById("nome_alt");
    nome_br = document.getElementById("nome_br");
    origem = document.getElementById("origem");
    funcao_principal = document.getElementById("funcao_principal");
    categoria = document.getElementById("categoria");

    nome_en.innerHTML = n_ingredientes.nome_en
    nome_alt.innerHTML = n_ingredientes.nome_alt
    nome_br.innerHTML = n_ingredientes.nome_br
    origem.innerHTML = n_ingredientes.origem
    funcao_principal.innerHTML = n_ingredientes.funcao_principal
    categoria.innerHTML = n_ingredientes.categoria

    result_ing.appendChild(nome_en);
    result_ing.appendChild(nome_alt);
    result_ing.appendChild(nome_br);
    result_ing.appendChild(origem);
    result_ing.appendChild(funcao_principal);
    result_ing.appendChild(categoria);

    return result_ing;
}

function main() {
    let dados_categoria = get("http://127.0.0.1:8000/categorias/");
    let categorias = JSON.parse(dados_categoria);
    let tabela_cat = document.getElementById("tabela_cat");
    categorias.forEach(element => {
        let linha_categoria = listaCategorias(element);
        tabela_cat.appendChild(linha_categoria);
    });

    let query = document.getElementById("query");

    document.getElementById("filter").onclick = function() {
        let result = categorias.filter(function(categoria) {
            return categoria.nome == query.value;
        });

        let div_cat = document.getElementById("resultado");
        result.forEach(element => {
            let result_cat = visualBusca(element);
            div_cat.appendChild(result_cat);
        });
    };

    let data_ingrediente = get("http://127.0.0.1:8000/ingredientes/");
    let ingredientes = JSON.parse(data_ingrediente);
    let tabela_ing = document.getElementById("tabela_ing");
    ingredientes.forEach(element => {
        let linha_ingredientes = listaIngredientes(element);
        tabela_ing.appendChild(linha_ingredientes);
    });

    let query1 = document.getElementById("query1");

    document.getElementById("filter1").onclick = function() {
        let result1 = ingredientes.filter(function(ingredientes) {
            if (ingredientes.categoria == 1) {
                ingredientes.categoria = "Produtos Saneantes";
            } else if (ingredientes.categoria == 2) {
                ingredientes.categoria = "Produtos Corporais";
            } else if (ingredientes.categoria == 3) {
                ingredientes.categoria = "Produtos Alimenticios";
            }
            return ingredientes.nome_br == query1.value;
        });

        let div_ing = document.getElementById("resultadoIng");
        result1.forEach(element => {
            let result_ing = visualBuscaIng(element);
            div_ing.appendChild(result_ing);
        });
    };
}

main()
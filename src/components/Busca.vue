<template>
  <section>
        <div class="busca">
            <img src="../assets/background.png" alt="Inicio" id="imgInicio"> 
            <div class="divPesquisa">
                <input type="text" class="pesquisarElemento" placeholder="Digite o produto">
                <button class="btnPesquisar" onclick="window.location.href='resultados.html'" >Pesquisar</button>
            </div>      
        </div>
    </section>
</template>

<script>
export default {
    name: 'Busca'
}
</script>

<style scoped>
    .divPesquisa{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin-top: 0px;   
}

.pesquisarElemento {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  background-image: url('https://cdn.discordapp.com/attachments/951820988461514892/974087379348512849/procurar1.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}


.btnPesquisar {
  background-color: #94A8A8;
  border: none;
  color: #000000;
  padding: 16px 32px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  font-size: 21px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 15px;
  width: 250px;
  align-self: center;
  margin-top: 20px;
}

.btnPesquisar:hover {
  background-color: #4b7474;
  color: white;
}

#imgInicio{
  height: 300px;
  display: flexbox;
  margin-left: 400px;
  margin-top: -60px;
}

@media screen and (max-width: 680px) {   

  .pesquisarElemento {
      width: 300px;
  }


  .btnPesquisar {
      font-size: 15px;
      width: 150px;
      margin-left: 5px;
  }

  .btnPesquisar:hover {
      background-color: #4b7474;
      color: white;
  }

  #imgInicio{
      height: 200px;
      display: flex;
      margin-top: 150px;
      margin-bottom: 10px;
      margin-left: 35px;
  }
}
</style>
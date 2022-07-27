<template>
  <router-view/>
  <Navbar />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body{
    background-color: #d5edd3;
}

img{
    max-width:100%;
    height:auto;
}

p{
    font-size:10vw;
}
#navBar{
  float: right;
  margin-top: 40px;
}

.itemMenu{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
  color: #000000;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  padding: 15px;
  text-align: center;
}

#logotipo{
  height: 150px;
  margin-left: 60px;
  margin-top: 5px;
}

@media screen and (max-width: 680px) {
  .itemMenu{
      font-size: 15px;
      margin-top: 30px;
  }

  #logotipo{
      height: 75px;
      margin-left: 10px;
      margin-top: 15px;
  }
}
#logotipo{
    height: 150px;
    margin-left: 60px;
    margin-top: 5px;
}
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
  margin-top: 0px;
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
.footer {
    text-align: center;
    position: absolute;
    padding: 5px;
    top: 120%;
    left: 550px;
    display: block;
    position: absolute;
    align-items: center;
    align-content: center;
}

.textFooter{
    font-size: 10px;
    text-align: center;
}

@media screen and (max-width: 680px) {
    .footer {
        top: 135%;
        display: flex;
        position: absolute;
        margin-left: 30px;
    }

}
</style>

<template>
  <header>
        <img src="../assets/miniLogo.png" alt="Logotipo" id="logotipo">
        <nav id="navBar">
            <div topnav>
                <a href="index.html" class="itemMenu">Início &nbsp;&nbsp;|</a>
                <a href="projeto.html" class="itemMenu">O Projeto &nbsp;&nbsp;|</a>
                <a class="itemMenu" href="/lista">Contato</a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

#logotipo{
    height: 150px;
    margin-left: 60px;
    margin-top: 5px;
}

#navBar{
  float: right;
  margin-right: 20px;
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
</style>
<template>
    <footer class="footer">
        <p class="textFooter">&copy; Copytight, 2022 | IFBA - Instituto Federal de Tecnologia da Bahia</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
    text-align: center;
    position: absolute;
    padding: 5px;
    top: 90%;
    left: 520px;
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
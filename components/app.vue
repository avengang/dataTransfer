<template>
    <div id="appview">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name:"appview",
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style>
    #app {

    }

</style>
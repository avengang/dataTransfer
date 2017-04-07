<template>
    <div class="sender-home">
        detail
    </div>
</template>

<script>

    export default{

        mounted(){

        },
        data(){
            return {
                currentView:'MainList',

            }
        },
        methods:{
            change (view) {
                this.currentView = view;
            }
        },
        components:{

        }
    }
</script>

<style>

</style>

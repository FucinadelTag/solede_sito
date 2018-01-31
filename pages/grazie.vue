<template lang="html">
<div class="has-text-centered grazie">
    <div class="title is-1">Grazie Per Averci contattati</div>
    <div class="title is-3">Ti risoponderemo al più presto.</div>

    <div class="title is-4">
        <a href="/">Torna alla home</a>
    </div>
</div>
</template>

<script>
export default {
    middleware: 'grazie_redirect',
    mounted:function(){
        this.method1() //method1 will execute at pageload
    },
    methods:{
        method1:function(){
            let redrect_url = this.$route.query.url_redirect;
            //console.log(this.$route);
            //this.$route.go(redrect_url);
        }
    },
}
</script>

<style lang="scss">
.grazie {
    margin: 0rem 0rem 10rem 0rem;
}
</style>

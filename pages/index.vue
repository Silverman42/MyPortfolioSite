<template>
<div>
    <section class="section">
        <nuxt-link to="/" class="title is-size-5 has-text-white">Home</nuxt-link> 
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/projects">Projects</nuxt-link>
        <nuxt-link to="/events">Events</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <div class="columns is-centered">
            <div class="column is-10">
                <h1 class="title is-size-7 is-uppercase has-space">Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, earum impedit. Magnam totam non dignissimos nobis doloribus quam maiores! Molestiae ad ducimus perferendis totam adipisci quasi in eius repellat minus.</p>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import { mapState } from "vuex";
export default {
    layout: 'custom',
    computed:{
        fetch(){
            console.log('this.test');
            return 'happy';
        }
    }
    ,mounted(){
 
    }
}
</script>
<style lang="sass">

</style>


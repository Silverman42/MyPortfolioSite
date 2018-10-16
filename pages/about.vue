<template>
<div style="padding-bottom: 50px">
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10 has-text-white">
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white">About</h1>
                    </div>
                    <div class="column is-5-mobile is-2-desktop">
                        <figure class="image is-5by5">
                            <img class="is-rounded" src="img/profile.jpg" alt="">
                        </figure>
                    </div>
                    <div class="column is-7-mobile is-10-desktop has-text-white is-flex">
                        <div class="is-self-align--center">
                            <h1 class="title is-size-5 has-text-white">Nkeze Sylvester Uche</h1>
                            <p class="is-size-6">Fullstack Web Developer / Graphic Artist</p>
                        </div>
                    </div>
                </div>
                <!--Content-->
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <p class="has-margin mv2">I love music, colors and all things art. These feats incite my attention for detail and beauty which is quite evident in my workflow. Programming is just the perfect tool which helps me express the aforementioned feats without limits. In a much cooler sense, I program artistically :) </p>
                        <p class="has-margin mv2">In my spare time, you could find me playing games (PC game lover by the way), watching game of thrones or reading my favorite posts on Dev.to.</p>
                        <p class="has-margin mv2">My favorite stack at the moment is Vue.js / Bulma at the frontend and Laravel at Backend. Currently I am brushing up my Node.js skills and I am really loving it. I also do graphical designs with Corel Draw.</p>
                        <p class="has-margin mv2">I am a graduate of the University of Benin with a BSc in Computer Science and over 3 years of experience in web development. </p>
                    </div>
                </div>

                <!--Operation Stack-->
                <div class="columns is-multiline is-centered">

                    <!--Dev Tools-->
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Development Tools</h2>
                        <span v-for="({skill},index) in devTool" :key="index" class="object-tag">{{skill}}</span> 
                    </div>

                    <!--Library-->
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Libraries and Frameworks</h2>
                        <span v-for="({skill},index) in library" :key="index" class="object-tag">{{skill}}</span>
                    </div>

                    <!--Graphic Tools-->
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Graphic design tool</h2>
                        <span v-for="({skill},index) in graphics" :key="index" class="object-tag">{{skill}}</span>
                    </div>

                    <!--Version Control Tools-->
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Version Control and Cloud Storage Tools</h2>
                        <span v-for="({skill},index) in versionControl" :key="index" class="object-tag">{{skill}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import about from "../assets/JSON/about.json";
export default {
    layout: 'custom',
    head:{
			title: 'About me'
		},
    data(){
        return{
            about
        }
    },
    computed:{
        devTool(){
            let skill =  this.about.filter((array)=>array.category == "devTool");
            return skill
        },
        library(){
            let lib =  this.about.filter((array)=>array.category == "library");
            return lib
        },
        versionControl(){
            let VC =  this.about.filter((array)=>array.category == "VC");
            return VC
        },
        graphics(){
            let graphics = this.about.filter((array)=>array.category == "graphicTool");
            return graphics
        }
    }
}
</script>
<style lang="sass">

</style>

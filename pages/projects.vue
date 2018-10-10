<template>
<div style="padding-bottom: 50px">
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10 has-text-white">
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white">Projects</h1>
                    </div>
                </div>
                <div class="columns is-multiline is-variable is-centered is-0">
                    <div class="column is-4" v-for="({name,description,link,git,stacks},index) in projects" :key="index">
                        <div class="sub-categories has-height is-flex has-wrap has-margin mv1 mh1 has-padding pv2 ph2">
                           
                            <div class="is-self-align--top is-12">
                                 <!--Project Name-->
                                <h2 class="title is-size-5 has-text-white is-12">{{name}}</h2>

                                 <!--Project Description-->
                                <p class="has-margin mv1">{{description}}</p>

                                 <!--Project Gitrepo link-->
                                <a v-if="git" :href="git" class="anchor_grey has-space is-uppercase is-size-7"><i class="fa fas fa-code"></i> view code</a> 
                                
                                 <!--Project Live view-->
                                &nbsp; <a v-if="link" :href="link" class="anchor_grey has-space is-uppercase is-size-7"><i class="fa fas fa-globe"></i> open website</a> 
                                
                                 <!--Graphic Project View Link-->
                                &nbsp; <a v-if="glink" :href="glink" class="anchor_grey has-space is-uppercase is-size-7"><i class="fa fas fa-fill-drip"></i> view graphics</a>
                            </div>
                            <!--Stack list-->
                            <div v-if="stacks" class="is-self-align--bottom is-12">
                                <span v-for="(stack,stackIndex) in stacks" :key="stackIndex" class="object-tag">{{stack}}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import projects from "../assets/JSON/projects.json";
export default {
    layout: 'custom',
    data(){
        return{
            projects
        }
    }
}
</script>
<style lang="sass">

</style>

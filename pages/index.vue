<template>
<div>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10 has-text-black">
                <div class="columns is-centered is-multiline tiles-contain">
                    <div class="column is-10 has-text-centered-mobile">
                        <p class="is-size-6">Hello, I am</p>
                        <h1 class="title is-size-4 is-size-5-mobile">Nkeze Sylvester Uche</h1>
                    </div>
                    <nuxt-link to="/about" class="column is-2 custom-tiles scale is-flex is-justified--center" :style="{background: aboutBg}">
                        <div class="is-self-align--center">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="img/myAvatar.png" alt="">
                            </figure>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/about" class="column is-8 custom-tiles scale has-wrap is-flex" :style="{background: aboutBg}">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white has-fullwidth"><i class="fa fas fa-info-circle"></i>&nbsp;ABOUT ME</h1>
                        <div class="is-10 has-text-white has-fullwidth is-self-align--center is-aligned-center">
                            <div class="truncate-text is-size-6 has-margin mv1">
                                <div class="hide" :style="{'box-shadow':'inset 0px -7px 11px 0px '+aboutBg }">

                                </div>
                                <p class="is-size-6"><b>Fullstack Web Developer / Graphic Artist</b></p>
                                <p>I love music, colors and all things art. These feats incite my attention for detail and beauty which is quite evident in my workflow. Programming is just the perfect tool which helps me express the aforementioned feats without limits. In a much cooler sense, I program artistically :)</p> 
                            </div>
                            <p class="is-size-7 has-space is-uppercase">see more</p>
                        </div>
                        
                        <p class="is-size-5 has-text-white has-text-right has-fullwidth is-self-align--bottom">
                            {{latest.about.length}}
                        </p>
                    </nuxt-link>

                    <!--Projects-->
                    <nuxt-link to="/projects" class="column is-10 custom-tiles scale has-wrap is-flex" :style="{background: projectBg}">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white has-fullwidth"><i class="fa fas fa-project-diagram"></i>&nbsp;Projects</h1>
                        <div class="is-10 has-text-white has-fullwidth is-self-align--center is-aligned-center">
                            <div class="truncate-text is-size-6 has-margin mv1">
                                <div class="hide" :style="{'box-shadow':'inset 0px -7px 11px 0px '+projectBg }">

                                </div>
                                <p class="is-size-6"><b>{{latest.projects.data.name}}</b></p>
                                <p>{{latest.projects.data.description}}</p>
                            </div>
                            <p class="is-size-7 has-space is-uppercase">see more</p>
                        </div>
                        
                        <p class="is-size-5 has-text-white has-text-right has-fullwidth is-self-align--bottom">
                            {{latest.projects.length}}
                        </p>
                    </nuxt-link>
                    
                    <!--Events-->
                    <nuxt-link to="/events" class="column is-5 custom-tiles scale has-wrap is-flex" :style="{background: eventBg}">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white has-fullwidth"><i class="fa fas fa-calendar-alt"></i>&nbsp;Events</h1>
                        <div class="is-10 has-text-white has-fullwidth is-self-align--center is-aligned-center">
                            <div class="truncate-text is-size-6 has-margin mv1">
                                <div class="hide" :style="{'box-shadow':'inset 0px -7px 11px 0px '+eventBg }">

                                </div>
                                <p class="is-size-6"><b>{{latest.events.data.name}}</b></p>
                                <p>{{latest.events.data.description}}</p>
                            </div>
                            <p class="is-size-7 has-space is-uppercase">see more</p>
                        </div>
                        
                        <p class="is-size-5 has-text-white has-text-right has-fullwidth is-self-align--bottom">
                            {{latest.events.length}}
                        </p>
                    </nuxt-link>
                    
                    <nuxt-link to="/contact" class="column is-5 custom-tiles scale has-wrap is-flex" :style="{background: contactBg}">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white has-fullwidth"><i class="fa fas fa-comment-alt"></i>&nbsp;Contact</h1>
                        <div class="is-10 has-text-white has-fullwidth is-self-align--center is-aligned-center">
                            <div class="truncate-text is-size-6 has-margin mv1">
                                <div class="hide" :style="{'box-shadow':'inset 0px -7px 11px 0px '+contactBg }">

                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus dolorem, quo fugiat obcaecati placeat omnis nesciunt exercitationem aspernatur dolores vitae eveniet sit magnam repellendus ipsa commodi, natus iusto eius.</p> 
                            </div>
                            <p class="is-size-7 has-space is-uppercase">see more</p>
                        </div>
                        
                        <p class="is-size-5 has-text-white has-text-right has-fullwidth is-self-align--bottom">
                            13
                        </p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import about from "../assets/JSON/about.json";
import projects from "../assets/JSON/projects.json";
import events from "../assets/JSON/events.json";
export default {
    layout: 'custom',
    transition:'zoom',
    data(){
        return{
            about,
            projects,
            events
        }
    },
    methods:{
        mapBgColor(color){
            return `rgb(${color[0]},${color[1]},${color[2]})`;
        }
    },
    computed:{
        aboutBg(){
            const color = this.$store.state.about;
            return this.mapBgColor(color);
        },
        projectBg(){
            const color = this.$store.state.projects;
            return this.mapBgColor(color);
        },
        contactBg(){
            const color = this.$store.state.contact;
            return this.mapBgColor(color);
        },
        eventBg(){
            const color = this.$store.state.events;
            return this.mapBgColor(color);
        },
        latest(){
            let events = this.events
            let projects = this.projects
            let about = this.about
            return{
                events:{
                    data: events[0],
                    length: events.length
                },
                projects:{
                    data: projects[0],
                    length: projects.length
                },
                about:{
                    length: about.length
                }
            }
        }

    }
};
</script>
<style lang="scss">
.tiles-contain{
    perspective: 1000px;
}
.custom-tiles {
    border-radius: 5px;
    margin: 4px;
    height: 170px;
    overflow-y: hidden;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    &.scale, &.rotate{
        transition: transform 0.4s ease-out, background 0.4s ease-out;
        -webkit-transition: transform 0.4s ease-out, background 0.4s ease-out;
    }

    &.scale:hover, &.scale:focus{
        transform: scale(0.9,0.9);
        -webkit-transform: scale(0.9,0.9);
    }

}

.truncate-text{
    position: relative;
    max-height: 50px;
    overflow: hidden;

    .hide{
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index:2;
    }
}


</style>


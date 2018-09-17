<template>
<div>
  <a @click="createColor" class="magic-wand has-text-white has-text-centered">
    <i class="fa fas fa-magic"></i>  
  </a> 
  <div class="main" :style="{background: `url(img/bg.png) ${changeBg}`}">
      <nuxt/>
  </div>
  <!--Menu Switch-->
  <nav class="page-switch" :class="{hide: hidePageSwitch}">
    <div class="columns is-centered is-multiline has-fullwidth">
      <div class="column is-5 is-10-mobile has-margin mv3 is-flex nav-tray has-text-black">
          <nuxt-link class="nav-key" to="/"><span><i class="fa fas fa-home"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="getAboutBg"  to="/about"><span><i class="fa fas fa-info-circle"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="getProjectBg"  to="/projects"><span><i class="fa fas fa-project-diagram"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="getEventBg"  to="/events"><span><i class="fa fas fa-calendar-alt"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="getContactBg"  to="/contact"><span><i class="fas fa-comment-alt"></i></span></nuxt-link>
      </div> 
    </div>
  </nav>
</div>
</template>
<script>

import { mapState, mapMutations } from "vuex";
export default {
  head:{
      
    },
  watch:{/*
    //Watch for Change in route
    $route(to,from){
      this.changeBg();
    }*/
  },
  methods:{
    ...mapMutations([
      //Mutation for creating Background color
      'createColor'
    ]),
    //Change Key background if active
    changeKeyBg(){
        const currentBg = this.changeBg;
        return {'background-color' : currentBg,"border-color": currentBg, color: "white"}
    }
  },
  computed:{
    //Change the background if the current route path is active
    changeBg(){
        let path =  this.$route.path;
        switch (path) {
          case '/':
            return "rgb(250,250,250)"

          case '/about':
            return `rgb(${this.about[0]},${this.about[1]},${this.about[2]})`

          case '/projects':
            return `rgb(${this.projects[0]},${this.projects[1]},${this.projects[2]})`

          case '/events':
            return `rgb(${this.events[0]},${this.events[1]},${this.events[2]})`;

          case '/contact':
            return `rgb(${this.contact[0]},${this.contact[1]},${this.contact[2]})`
        }    
    },
    //Hide page switch if index route is active
    hidePageSwitch(){
      return this.$route.path == '/' ? true : false;
    },

    //Change colors for nav keys according to route change
    getAboutBg(){
      return this.$route.path == '/about' ? this.changeKeyBg() : ""; 
    },
    getProjectBg(){
      return this.$route.path == '/projects' ? this.changeKeyBg() : ""; 
    },
    getEventBg(){
      return this.$route.path == '/events' ? this.changeKeyBg() : ""; 
    },
    getContactBg(){
      return this.$route.path == '/contact' ? this.changeKeyBg() : ""; 
    },
    ...mapState([
      'projects','about','contact','events'
    ])
  }
};
</script>
<style lang="scss">
.main{
  position:relative;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  transition: background-color 0.4s ease-out;
  -webkit-transition: background-color 0.4s ease-out;
  box-sizing: border-box;
  overflow-x: hidden; 
}
.page-switch{
  display: block;
  position:fixed;
  height: auto;
  width: 100vw;
  bottom: 0px;
  left:0px;
  right: 0px;
  background: transparent;
  z-index:100;
  transition: bottom 0.4s ease-out;
  -webkit-transition: bottom 0.4s ease-out;
  &.hide{
    bottom: -20vh;
  }
}
.nav-tray{
  margin:auto;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.8);
  justify-content: space-around;
}
.nav-key{
  display: block;
  position: relative;
  height: 35px;
  width: 35px;
  border-width: 1px;
  border-color: white;
  border-radius: 50%;
  background: white;
  text-align: center;
  color:rgb(34, 34, 34);
  outline: none;
  transition: transform 0.3s ease-out, background 0.4s ease-out;
  -webkit-transition: transform 0.3s ease-out, background 0.4s ease-out;
  span{
    display: inline-block;
    margin: 6.5px;
  }
  &:hover,&:focus{
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
}

.magic-wand{
  display: block;
  position: fixed;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  margin: 10px;
  padding: 6.3px;
  transition: transform 0.3s ease-out;
  -webkit-transition: transform 0.3s ease-out;

  &:hover,&:focus{
      transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
}
</style>
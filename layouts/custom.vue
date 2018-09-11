<template>
<div style="overflow-x:hidden" class="main" :style="{background: currentBg}">
  <div class="body">
      <nuxt/>
  </div>
  <!--Menu Switch-->
  <nav class="page-switch" :class="{hide: hidePageSwitch}">
    <div class="columns is-centered is-multiline has-fullwidth">
      <div class="column is-5 is-10-mobile has-margin mv3 is-flex nav-tray has-text-black">
          <nuxt-link class="nav-key" :style="changeKeyBg('/')" to="/"><span><i class="fa fas fa-home"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="changeKeyBg('/about')" to="/about"><span><i class="fa fas fa-info-circle"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="changeKeyBg('/projects')" to="/projects"><span><i class="fa fas fa-project-diagram"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="changeKeyBg('/events')" to="/events"><span><i class="fa fas fa-calendar-alt"></i></span></nuxt-link>
          <nuxt-link class="nav-key" :style="changeKeyBg('/contact')" to="/contact"><span><i class="fas fa-comment-alt"></i></span></nuxt-link>
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
  data() {
      return {
        currentBg: ''
      }
    },
  watch:{
    //Watch for Change in route
    $route(to,from){
      this.changeBg();
    }
  },
  methods:{
    //Change the background if the current route path is active
    changeBg(){
        let path =  this.$route.path;
        switch (path) {
          case '/':
            this.currentBg = "rgb(250,250,250)";
            break;
          case '/about':
            this.currentBg =`rgb(${this.about[0]},${this.about[1]},${this.about[2]})`;
            break;
          case '/projects':
            this.currentBg = `rgb(${this.projects[0]},${this.projects[1]},${this.projects[2]})`;
            break;
          case '/events':
            this.currentBg = `rgb(${this.events[0]},${this.events[1]},${this.events[2]})`;
            break;
          case '/contact':
            this.currentBg = `rgb(${this.contact[0]},${this.contact[1]},${this.contact[2]})`;
            break;
        }
    },
    //Change Key background if active
    changeKeyBg(path){
        const currentBg = this.currentBg;
        if(this.checkRoute == path ){
          return {'background-color' : currentBg,"border-color": currentBg, color: "white"};
        }
        return "";
    },
    ...mapMutations([
      //Mutation for creating Background color
      'createColor'
    ])
  },
  computed:{
    //check current route
    checkRoute(){
      let route = this.$route.path;
      return route;
    },
    //Hide page switch if index route is active
    hidePageSwitch(){
      return this.$route.path == '/' ? true : false;
    },
    ...mapState([
      'projects','about','contact','events'
    ])
  },
  mounted(){
      this.changeBg();
  },
  created(){
      this.createColor();
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
  color:black;
  outline: none;
  transition: filter 0.4s ease-out, background 0.4s ease-out;
  -webkit-transition: filter 0.4s ease-out, background 0.4s ease-out;
  span{
    display: inline-block;
    margin: 6px;
  }
  &:hover,&:focus{
    filter: brightness(70%);
    -webkit-filter: brightness(70%);
  }
}
</style>
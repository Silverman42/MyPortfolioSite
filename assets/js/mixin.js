import { mapState, mapMutations } from "vuex";
export default {
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
  created(){
    this.$nextTick().then(()=>{
      this.changeBg();     
    })
  }
}
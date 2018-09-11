import Vuex from 'vuex';
//Shuffle color array
const shuffle = ( arr=[] )=>{
    return arr.map((a)=>({rand: Math.random(), value: a}))
    .sort((a,b)=>(a.rand - b.rand))
    .map((a)=>(a.value))
}
//Generate random colors for rgb
const generate = ()=>{
    let colors=[];
    colors[0] = Math.floor(Math.random() * 90) + 110;
    colors[1] = Math.floor(Math.random() * 80) + 30;
    colors[2] = Math.floor(Math.random() * 90) + 50;
    return shuffle(colors);
}
const backgrounds = ()=>{
    return new Vuex.Store({
        state:{
            projects : "",
            about: "",
            contact: "",
            events:"" 
        },
        mutations:{
            createColor(state,payload){
                state.projects = generate();
                state.about = generate();
                state.contact = generate();
                state.events = generate();
            }
        }
    })
}
export default backgrounds;
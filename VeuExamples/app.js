Vue.createApp({
 data:function(){
     return{
         goals: [],
         inputedValue:''
     }
 },
 
 methods:{
    addGoal(){
        this.goals.push(this.inputedValue);
        this.inputedValue='';
    }
 }
}).mount('#app');
const myGoalApp = Vue.createApp({
  data() {
    return {
      mainGoal: "Vue JS Master Curse completion",
      //subGoal: "<a href='https://google.com' target='_blank'>Leran basics of Vue Js</a>",
      vlink: "https://vuejs.org/"
    };
  },
  methods: {
      onRandom(){
             let radomValue = Math.random();
             if(radomValue > 0.5){
                 return this.mainGoal;
             }
             else{
                 return this.subGoal;
             }
      }
  }
});

myGoalApp.mount("#user-goal");

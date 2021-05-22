const app = Vue.createApp({
  data() {
    return {
      eneteredGoal: "",
      goals: [],
    };
  },
  methods: {
    onAddingGoal() {
      this.goals.push(this.eneteredGoal);
      this.eneteredGoal = "";
    },
    onDeleteGoal(id){
        this.goals.splice(id, 1);
    }
  },
});

app.mount("#user-goals");

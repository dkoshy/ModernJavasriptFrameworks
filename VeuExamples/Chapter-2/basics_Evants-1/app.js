const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'--- Please Eneter Name ---',
      confirmedName:''
    };
  },
  computed:{
    fullname(){
      if(this.name === '--- Please Eneter Name ---' || !this.name){
          return '';
      }
      return this.name;
    }
  },
  methods:{
    onIncrement(){
      this.counter++;
    },
    onDecrement(decremeneter){
      this.counter = this.counter - decremeneter;
    },
    onDataEnter(e){
          this.name = e.target.value;
    },
    onFormSubmitted(e){
     // e.preventDefault();
     
      let enteredValue = e.target.querySelector('input').value;
      alert(`${enteredValue} is  Submitted!`);
    },
    onEnter(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');

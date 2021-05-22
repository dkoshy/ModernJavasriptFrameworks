const app = Vue.createApp({
  data() {
    return {
        firstName: "",
        lastName: "",
        counter:0,
        fullName:''
    };
  },
  watch:{
    firstName(value){
        if(value){
            this.fullName = value + ' ' +  this.lastName;
        }
        else{
            this.fullName = ' '+  this.lastName; 
        }
    },
    lastName(value){
        if(value){
            this.fullName = this.firstName + ' ' + value;
        }
        else{
            this.fullName = this.firstName;
        }
    }
  },
  computed:{
    customerName(){
        console.log("method executed - DisplayFullName");
        if(!this.firstName && !this.lastName ){
            return '';
        }

        return this.firstName + ' ' +  this.lastName;
    }
  },
  methods: {
    DisplayFullName(){
        console.log("method executed - DisplayFullName");
        if(!this.firstName && !this.lastName ){
            return '';
        }

        return this.firstName + ' ' +  this.lastName;
    },
    onResetName(){
        this.firstName = '';
        this.lastName = '';
    },
    onIncrement(){
        this.counter += 5;
    }
  },
});

app.mount("#events");

<template>
<v-container>
  <v-form @submit.prevent="signup">



    <v-text-field
      v-model="form.name"
      label="Name"
      type="text"
      required
    ></v-text-field>
    
    <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>


    <v-text-field
      v-model="form.email"
      label="E-mail"
      type="email"
      required
    ></v-text-field>
    <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

    <v-text-field
        label="Password"
        v-model="form.password"
        type="password"
        required
    ></v-text-field>
    <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>
    <v-text-field
        label="Password"
        v-model="form.password_confirmation"
        type="password"
        required
    ></v-text-field>


    <v-btn
        color="green"
        type="submit"
    >Sign up</v-btn>

    <router-link to="/login">
        <v-btn color="blue">Login</v-btn>
    </router-link>

  </v-form>
</v-container>
</template>


<script>
export default {
    data(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name: 'forum'})
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup', this.form)
            .then(res => {
                    User.responseAfterLogin(res)
                    this.$router.push({name:'forum'})
                })
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>

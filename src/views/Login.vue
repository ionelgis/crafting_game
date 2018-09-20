<template>
  <div class="login">
    <h2>Login</h2>
      <form @submit.prevent="handleLogIn">
      <label for="userEmail">Your email</label><br>
      <input v-model="userEmail" id="userEmail" type="text">
      <br><br>
      <label for="userPasword">Your Password</label><br>
      <input v-model="userPassword" id="userPassword" type="password">
      <br><br>
      <button type="submit">Log In</button>
    </form>
    
</div>
    
    
  
</template>

<script>
import { auth } from "../helpers/firebase.service.js";
export default {
  data() {
    return {
      userEmail: "",
      userPassword: ""
    };
  },
  methods: {
    handleLogIn: function() {
      auth.signInWithEmailAndPassword(this.userEmail, this.userPassword).then(
        () => {
          this.$router.replace("/");
        },
        error => {
          console.log("error loggin in", error);
        }
      );
    }
  },
  components: {}
};
</script>

<template>
  <div class="login">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
        <label for="userEmail">Your email</label><br>
        <input v-model="userEmail" id="userEmail" type="text">
        <br><br>
        <label for="userPasword">Your Password</label><br>
        <input v-model="userPassword" id="userPassword" type="password">
        <br> <br>
        <button type="submit">Submit</button>
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
    handleSignUp: function() {
      auth
        .createUserWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(
          user => {
            console.log("your account has been created", user);
          },
          error => {
            console.log("error in creating account", error);
          }
        );
    }
  },
  components: {}
};
</script>

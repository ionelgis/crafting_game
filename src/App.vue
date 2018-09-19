<template>
  <div id="app">
    <div v-if="user">
      {{ user.email }}
      <button v-if="user" @click="handleSignOut">Sign Out</button>
    </div>
    <navigation :isUserAuth="user ? true: false"/>
    <router-view/>
  </div>
</template>

<script>
import { auth } from "./helpers/firebase.service.js";
import Navigation from "@/components/Navigation.vue";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    Navigation
  },
  methods: {
    handleSignOut: function() {
      auth.signOut().then(() => {
        this.$store.commit("setLogedInUser", null);
        this.$router.replace("signin");
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

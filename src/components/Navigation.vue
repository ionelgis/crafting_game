<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span v-if="isUserAuth">
        |
        <router-link to="/about">About</router-link>
      </span>
      <span v-if="isUserAuth">
        |
        <router-link to="/forest">Forest</router-link>
      </span>
        | 
      <span >
        <router-link  to="/login">Login</router-link> |
      </span>
        <router-link  to="/signup">Sign Up</router-link>   
    </div>
</template>

<script>
export default {
  props: {
    isUserAuth: {
      type: Boolean,
      required: true
    }
  }
};
</script>

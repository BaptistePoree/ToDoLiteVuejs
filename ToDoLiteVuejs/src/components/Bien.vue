
<template>
  <form @submit.prevent="submit()">
    <input type="email" v-model="email" placeholder="your Email " />
    <input type="password" v-model="password" placeholder="your Password" />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

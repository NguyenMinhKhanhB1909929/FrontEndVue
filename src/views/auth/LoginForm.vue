<template lang="">
  <h1 class="text-center">LOGIN</h1>
  <form @submit.prevent="handleLogin()">
    <div class="form-group">
      <label for="exampleInputEmail1">User Name:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter user name"
        v-model="user.username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password:</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="user.password"
      />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Remember</label>
    </div>

    <div class="text-center">
      <button type="submit" class="btn btn-primary m-2 btn-lg">Login</button>
      <button type="submit" class="btn btn-danger m-2 btn-lg">
        <router-link to="/auth/register" class="text-white"
          >No Account?</router-link
        >
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.$request
        .post("http://localhost:5000/api/auth/login", this.user)
        .then((res) => {
          if (res.data.success) {
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push("/");
          }
        });
    },
  },
};
</script>
<style lang=""></style>

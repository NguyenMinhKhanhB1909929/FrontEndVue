<template lang="">
  <h1 class="text-center">Register</h1>
  <form @submit.prevent="handleRegister()">
    <div class="form-group">
      <label for="exampleInputName1">Full Name:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName1"
        aria-describedby="emailHelp"
        placeholder="Enter full name"
        v-model="user.fullname"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputUserName1">User Name:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputUserName1"
        aria-describedby="emailHelp"
        placeholder="Enter User name"
        v-model="user.username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password:</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        aria-describedby="emailHelp"
        placeholder="Enter password"
        v-model="user.password"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword2">RePassword</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        placeholder="Re Password"
      />
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary m-2 btn-lg">Register</button>
      <button type="submit" class="btn btn-danger m-2 btn-lg">
        <router-link to="/auth/login" class="text-white"
          >Have Account</router-link
        >
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        fullname: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleRegister() {
      this.$request
        .post("http://localhost:5000/api/auth/register", this.user)
        .then((res) => {
          if (res.data.success) {
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Register Successfully",
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

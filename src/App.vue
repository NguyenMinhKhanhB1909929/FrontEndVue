<template>
  <component :is="layout" />
  <router-view></router-view>
</template>
<script>
import DashboardLayoutVue from "./layout/DashboardLayout.vue";
import LoginLayoutVue from "./layout/LoginLayout.vue";

export default {
  name: "App",
  components: {
    DashboardLayoutVue,
    LoginLayoutVue,
  },
  data() {
    return {
      layout: null,
    };
  },
  methods: {},
  watch: {
    $route(to) {
      if (to.meta.layout === "Auth") {
        this.layout = "Auth";
        console.log(this.layout);
      } else {
        console.log(to.meta.layout);

        this.layout = "Default";
      }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: contain;
}
.bg-img {
  background-image: url(https://genetic.vn/wp-content/uploads/2021/11/khoa-hoc-lap-trinh-front-end.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bg-green {
  background-color: #34f3d4;
}
</style>

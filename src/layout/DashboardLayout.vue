<template lang="">
  <NavbarMenu :isLogin="isLogin" @clicked-logout="handleLogout()"></NavbarMenu>
  <div class="container">
    <router-view />
  </div>
  <FooterMenu></FooterMenu>
</template>

<script>
import NavbarMenu from "../components/layout/NavbarMenu.vue";
import FooterMenu from "../components/layout/FooterMenu.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      isLogin: true,
    };
  },
  components: {
    NavbarMenu,
    FooterMenu,
  },
  methods: {
    handleLogout() {
      this.isLogin = false;
    },
  },
};
</script>

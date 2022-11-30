<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Kdemy</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-5">
          <li class="nav-item" v-bind:class="{ active: isActive }">
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/myCourse">My Course</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Manage
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/add"
                >Add Course</router-link
              >
              <router-link class="dropdown-item" to="/course"
                >Course Manager</router-link
              >
              <router-link class="dropdown-item" to="/member"
                >Member Manager</router-link
              >
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 flex-fill">
          <input
            class="form-control mr-sm-2 flex-fill"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-5">
          <li v-if="isLogin == false" class="nav-item active">
            <router-link class="nav-link" to="/auth/login"
              >Sign in <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item" v-if="isLogin == false">
            <router-link class="nav-link" to="/auth/register"
              >Sign up</router-link
            >
          </li>
          <li
            class="nav-item dropdown bg-primary rounded"
            v-if="isLogin == true"
          >
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Khanh B1909929
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">My Course</a>
              <a class="dropdown-item" href="#">User Manager</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" @click="handleLogout()"
                >Log out</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMenu",
  props: ["isLogin"],
  data() {
    return {};
  },
  methods: {
    handleLogout() {
      this.$emit("clicked-logout");
    },
  },
};
</script>

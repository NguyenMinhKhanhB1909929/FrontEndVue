<template lang="">
  <div class="container">
    <div>
      <h1 class="text-center">Member Manager</h1>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">FullName</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(member, index) in members">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ member.username }}</td>
          <td>{{ member.username }}</td>
          <td>{{ member.username }}</td>
          <td>{{ member.rule }}</td>
          <td>
            <button v-if="isLock" class="btn btn-sm btn-success m-1">
              UNLOCK
            </button>
            <button v-else class="btn btn-sm btn-danger m-1">LOCK</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "CourseManagerView",
  data() {
    return {
      members: [],
      isLock: false,
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$request("http://localhost:5000/api/auth/all").then((res) => {
        this.members = res.data.user;
      });
    },
  },
};
</script>
<style lang=""></style>

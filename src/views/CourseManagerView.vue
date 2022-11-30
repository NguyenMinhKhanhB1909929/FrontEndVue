<template lang="">
  <div class="container">
    <div>
      <h1 class="text-center">Course Manager</h1>

      <button class="my-2 float-right btn btn-primary">
        <router-link class="text-light" to="/add"> Create Course </router-link>
      </button>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Cost</th>
          <th scope="col">Member</th>
          <th scope="col">rate</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(course, index) in courses" class="text-center">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ course.title }}</td>
          <td>{{ course.cost }}</td>
          <td>{{ course.member }}</td>
          <td>{{ course.rate }}</td>
          <td>
            <button class="btn btn-sm btn-primary m-1">Add</button>
            <button class="btn btn-sm btn-warning m-1">Edit</button>
            <button
              class="btn btn-sm btn-danger m-1"
              @click="onDelete(course._id)"
            >
              Delete
            </button>
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
      courses: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$request("http://localhost:5000/api/course").then((res) => {
        this.courses = res.data.course;
      });
    },
    onDelete(courseId) {
      this.$swal
        .fire({
          title: "Do you want to deleted?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$request
              .delete(`http://localhost:5000/api/course/${courseId}`)
              .then((res) => {
                if (res.data.success) {
                  this.$swal.fire("Deleted", "", "success");
                  this.getAll();
                }
              });
          }
        });
    },
  },
};
</script>
<style lang=""></style>

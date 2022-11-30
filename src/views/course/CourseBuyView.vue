<template lang="">
  <h1>Best-selling course</h1>
  <div class="row">
    <div :key="index" class="col-3 mb-5" v-for="(course, index) in courses">
      <CourseBuyVue :course="course"></CourseBuyVue>
    </div>
  </div>
</template>
<script>
import CourseBuyVue from "@/components/course/CourseBuy.vue";

export default {
  name: "CourseBuy",
  components: {
    CourseBuyVue,
  },
  data() {
    return {
      courses: [],
    };
  },
  created() {
    this.getAllCourseBuy();
  },
  methods: {
    getAllCourseBuy() {
      this.$request.get("http://localhost:5000/api/course/buy").then((res) => {
        this.courses = res.data.course;
        console.log(this.courses);
      });
    },
  },
};
</script>
<style lang=""></style>

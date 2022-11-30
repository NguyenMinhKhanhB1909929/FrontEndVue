<template lang="">
  <h1>Course Free</h1>
  <div class="row">
    <div :key="index" class="col-3 mb-5" v-for="(course, index) in courses">
      <CourseFreeVue :course="course"></CourseFreeVue>
    </div>
  </div>
</template>
<script>
import CourseFreeVue from "@/components/course/CourseFree.vue";

export default {
  name: "CourseFreeView",
  components: {
    CourseFreeVue,
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
      this.$request.get("http://localhost:5000/api/course/free").then((res) => {
        this.courses = res.data.course;
        console.log(this.courses);
      });
    },
  },
};
</script>

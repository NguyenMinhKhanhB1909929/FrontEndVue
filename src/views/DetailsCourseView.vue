<template lang="">
  <div class="row mt-5">
    <div class="col-8">
      <DetailCourseLeftVue :course="course[0]"></DetailCourseLeftVue>
      <DetailCourseContentVue :course="course[0]"></DetailCourseContentVue>
    </div>
    <div class="col-4">
      <DetailCourseRightVue :course="course[0]"></DetailCourseRightVue>
    </div>
  </div>
</template>
<script>
import DetailCourseContentVue from "@/components/course/DetailCourseContent.vue";
import DetailCourseLeftVue from "@/components/course/DetailCourseLeft.vue";
import DetailCourseRightVue from "@/components/course/DetailCourseRight.vue";
export default {
  name: "DetailCourse",
  components: {
    DetailCourseContentVue,
    DetailCourseLeftVue,
    DetailCourseRightVue,
  },
  data() {
    return {
      course: [],
    };
  },
  created() {
    let courseId = this.$route.params.id;
    this.getCourseById(courseId);
  },
  methods: {
    getCourseById(courseId) {
      this.$request
        .get(`http://localhost:5000/api/course/${courseId}`)
        .then((res) => {
          if (res.data.success) {
            this.course = res.data.course;
            console.log(this.course);
          }
        });
    },
  },
};
</script>
<style lang=""></style>

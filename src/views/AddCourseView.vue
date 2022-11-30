<template lang="">
  <div class="container">
    <h1 class="text-center">Create Course</h1>
    <form @submit.prevent="handleSubmit()">
      <div class="form-group">
        <label for="formGroupExampleInput">Title:</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input"
          v-model="course.title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Image:</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          @change="previewFiles"
          multiple
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Cost:</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input"
          v-model="course.cost"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description:</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="course.desc"
        ></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-lg m-2">Create</button>
        <button
          type="reset"
          class="btn btn-danger btn-lg m-2"
          @click="handleCancel()"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddCourseView",

  data() {
    return {
      course: {
        title: "",
        img: null,
        cost: "",
        desc: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      const formData = new FormData();
      formData.append("file", this.course.img);
      formData.append("title", this.course.title);
      formData.append("cost", this.course.cost);
      formData.append("desc", this.course.desc);
      this.$request
        .post("http://localhost:5000/api/course/uploadsImg", formData)
        .then((res) => {
          if (res.data.success) {
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add new course success",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "courseManage" });
          }
        });
    },
    handleCancel() {
      this.course.title = "";
      this.course.img = null;
      this.course.cost = "";
      this.course.desc = "";
    },
    previewFiles(event) {
      this.course.img = event.target.files[0];
    },
  },
};
</script>
<style lang=""></style>

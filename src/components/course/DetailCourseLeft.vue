<template lang="">
  <div class="mb-4">
    <h1>{{ course.title }}</h1>
    <h5>{{ course.desc }}</h5>
    <div class="my-5">
      <h3>Học được những gì</h3>
      <div class="row">
        <div class="col-6">
          <i class="fa-solid fa-check"></i>Các kiến thức cơ bản, nền móng của
          ngành IT
        </div>
        <div class="col-6">
          <i class="fa-solid fa-check"></i>Các mô hình, kiến trúc cơ bản khi
          triển khai ứng dụng
        </div>
        <div class="col-6">
          <i class="fa-solid fa-check"></i>Hiểu hơn về cách internet và máy vi
          tính hoạt động
        </div>
        <div class="col-6">
          <i class="fa-solid fa-check"></i>Các khái niệm, thuật ngữ cốt lõi khi
          triển khai ứng dụng
        </div>
      </div>
    </div>
    <h5 class="d-flex justify-content-between">
      <span
        ><i class="fa-solid fa-star text-warning"></i
        ><i class="fa-solid fa-star text-warning"></i
        ><i class="fa-solid fa-star text-warning"></i
        ><i class="fa-solid fa-star text-warning"></i
        ><i class="fa-solid fa-star"></i
      ></span>
      <span class="">Member: {{ course.member }}</span>
      <span class="">create by: Admin</span>
    </h5>
  </div>
</template>
<script>
export default {
  name: "DetailLeft",
  props: {
    course: {},
  },
};
</script>
<style lang=""></style>

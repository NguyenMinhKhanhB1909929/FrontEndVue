<template lang="">
  <div>
    <img class="img-fluid img-rounded" :src="getImg()" />
    <div className="text-center container-fluid">
      <h4>{{ course.cost }} USD</h4>
      <router-link to="/learn">
        <button
          v-if="course.cost == 0"
          class="btn btn-lg bg-primary text-light"
        >
          Free
        </button>
        <button v-else class="btn btn-lg bg-primary text-light">Buy Now</button>
      </router-link>
      <div class="text-left ml-5 mt-4">
        <h5><i class="fa-solid fa-clipboard"></i> Trình độ cơ bản</h5>
        <h5><i class="fa-solid fa-clipboard"></i> Tổng số video: 0</h5>
        <h5><i class="fa-solid fa-clipboard"></i>Học mọi lúc, mọi nơi</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailRight",
  props: {
    course: {},
  },
  methods: {
    getImg() {
      return this.course.imgUrl;
    },
  },
};
</script>
<style lang=""></style>

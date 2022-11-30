<template lang="">
  <router-link :to="{ name: 'DetailCourse', params: { id: course._id } }">
    <div class="card" style="width: 100%; min-height: 500px">
      <div>
        <img class="card-img-top" :src="getImage()" alt="Card image cap" />
        <div
          class="card-body bg-info text-white notHover"
          style="height: 280px"
        >
          <h5 class="card-title">{{ course.title }}</h5>
          <p class="card-text">
            {{ course.desc }}
          </p>
          <p class="card-text">
            <i class="fa-solid fa-dollar-sign"> {{ course.cost }}</i>
          </p>
          <p class="card-text d-flex justify-content-around align-items-center">
            <i class="fas fa-eye">1000</i>
            <i class="far fa-user">{{ course.member }}</i>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "SingleCourseBuy",
  props: {
    course: {},
  },
  methods: {
    getImage() {
      return this.course.imgUrl;
    },
    getId() {
      return this.course._id;
    },
  },
};
</script>
<style lang=""></style>

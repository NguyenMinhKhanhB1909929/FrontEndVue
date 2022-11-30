<template>
  <CarouselVue></CarouselVue>
  <CourseBuyView></CourseBuyView>
  <CourseFreeView></CourseFreeView>
</template>

<script>
import CourseBuyView from "./course/CourseBuyView.vue";
import CourseFreeView from "./course/CourseFreeView.vue";
import CarouselVue from "@/components/layout/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    CourseBuyView,
    CourseFreeView,
    CarouselVue,
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

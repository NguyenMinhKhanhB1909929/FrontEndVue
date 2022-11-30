<template lang="">
  <h4>Content Course</h4>
  <h6 class="m-3">
    <span class="mr-5">3 Lesson</span>
    <span>time</span>
  </h6>
  <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button
            class="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Lesson 1
          </button>
        </h5>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="card-body">VIDEO 1</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Lesson 2
          </button>
        </h5>
      </div>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div class="card-body">VIDEO 2</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Lesson 3
          </button>
        </h5>
      </div>
      <div
        id="collapseThree"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div class="card-body">VIDEO 3</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailContent",
  props: {
    course: {},
  },
};
</script>
<style lang=""></style>

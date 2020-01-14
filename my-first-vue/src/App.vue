<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CourseList :courses="courses"></CourseList>
  </div>
</template>

<script>
import CourseList from "@/components/CourseList.vue";
import { getCourses } from "@/api/course";
export default {
  name: "app",
  components: {
    CourseList
  },
  data() {
    return {
      title: "购物车",
      courses: [],
      course: ""
    };
  },
  async created() {
    this.courses = await getCourses();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

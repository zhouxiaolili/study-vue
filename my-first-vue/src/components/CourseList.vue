<template>
  <div>
    <!-- 条件渲染 -->
    <p v-if="courses.length == 0">没有任何课程信息</p>
    <!-- 列表渲染 -->
    <ul>
      <!-- class绑定 -->
      <li
        v-for="c in courses"
        :key="c.name"
        :class="{active: (selectedCourse === c)}"
        @click="selectedCourse = c"
      >{{c.name}} - ￥{{c.price}}</li>
      <!-- style绑定 -->
      <!-- <li v-for="c in courses" :style="{backgroundColor: (selectedCourse === c)?'#ddd':'transparent'}"                    @click="selectedCourse = c">{{c}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: ""
    };
  },
  props: {
    courses: {
      type: Array,
      default: function() {
        return [];
      }
    },
    filters: {
      // 局部过滤器
      currency(value, symbol = "￥") {
        return symbol + value;
      }
    }
  }
};
</script>

<style   scoped>
.active {
  background-color: #ddd;
  cursor: pointer;
}
</style>
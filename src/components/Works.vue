<template>
  <section class="works">
    <TaskList/>
    <Line/>
  </section>
</template>
<style lang="scss" scope>
@import '../styles/common/common.scss';
// .works {
// }
</style>
<script>
import TaskList from './WorkTaskList.vue'
import Line from './WorkLine.vue'
export default {
  components: {
    TaskList,
    Line
  }
}
</script>
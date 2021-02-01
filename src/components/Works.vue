<template>
  <section class="works">
    <WorksTaskList/>
    <!-- <WorksLine/> -->
  </section>
</template>
<script>
import WorksTaskList from './WorkTaskList.vue';
// import WorksLine from './WorkLine.vue';
export default {
  components: {
    WorksTaskList,
    // WorksLine
  }
}
</script>
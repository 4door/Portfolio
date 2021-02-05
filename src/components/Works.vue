<template>
  <section class="works">
    <WorksTop/>
    <WorksTaskList/>
    <WorksLine/>
  </section>
</template>
<script>
import WorksTop from './WorksTop.vue';
import WorksTaskList from './WorkTaskList.vue';
import WorksLine from './WorkLine.vue';
export default {
  components: {
    WorksTop,
    WorksTaskList,
    WorksLine
  }
}
</script>
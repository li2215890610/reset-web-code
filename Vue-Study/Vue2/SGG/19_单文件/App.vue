<template>
  <div>
    <Schol/>
    <Student/>
  </div>
</template>
<script>
  import Schol from "./Schol";
  import Student from "./Student";

export default {
  name: 'App',
  components: {
    Schol,
    Student,
  },
  props: {},
  data() {
    return {
      
    };
  },
  watch: {},
  computed: {},
  methods: {
  
  },
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
  
</style>
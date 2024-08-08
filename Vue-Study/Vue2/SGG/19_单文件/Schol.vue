<template>
  <div>
    学校名称:{{ name }} <br>
    学生地址:{{ address }} <br>
  </div>
</template>
<script>
export default {
  name: 'Schol',
  components: {},
  props: {},
  data() {
    return {
      name: '中原工学院',
      address: '河南郑州'
    };
  },
  watch: {},
  computed: {},
  methods: {

  },
  created() { },
  mounted() { },
  beforeDestroy() { }
};
</script>
<style lang="less" scoped></style>
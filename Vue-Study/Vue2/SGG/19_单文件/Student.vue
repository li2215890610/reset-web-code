<template>
    <div>
        学生姓名:{{name}} <br>
        学生姓名:{{age}} <br>

    </div>
</template>
<script>
export default {
  name: 'Student',
  components: {},
  props: {},
  data() {
    return {
        name:'张三',
        age:80    
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
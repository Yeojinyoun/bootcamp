<template>
  <div>
    <div :stlye="style1">스타일 바인딩 : 글씨는 red, 폰트크기는: 30px</div>
    <div :stlye="style2">스타일 바인딩 : 글씨는 red, 폰트크기는: 30px</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: 'color:red; font-size:30px',
      style2: {
        color: 'red',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

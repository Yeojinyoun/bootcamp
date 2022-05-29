<template>
  <div>
    <page-title title="고객조회" :title2="title2" />
  </div>
</template>
<script>
// import PageTitle from '@/components/fragments/PageTitle.vue'
export default {
  // components: { 'page-title': PageTitle },
  //   components: { PageTitle },
  // ↑ key명이 원래 'PageTitle':PageTitle 이라고 명시가 되어있는 거임. key랑 value랑 같으면 key를 생략할 수 있기때문에 template안에 있는 PageTitle는 그냥 값이아니라 key이다.
  data() {
    return {
      title2: '고객리스트를 조회하는 화면'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

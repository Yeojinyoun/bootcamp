<template>
  <div>
    <provide-inject />
    <h1>{{ $translate('en.hi') }}</h1>
    <h1>{{ $translate('ko.hi') }}</h1>
  </div>
</template>
<script>
import ProvideInject from '@/components/fragments/ProvideInject.vue'
export default {
  components: { 'provide-inject': ProvideInject },
  data() {
    return {
      sampleData: ''
    }
  },
  provied() {
    return {
      size: 5
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

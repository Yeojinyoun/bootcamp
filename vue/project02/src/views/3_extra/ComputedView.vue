<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <h1>Welcome, {{ fullName }}</h1>
    <div>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
    </div>
    <div>
      <h3>{{ title }} {{ firstName }} {{ lastName }}</h3>
    </div>
    <div>
      <input type="number" name="" id="" v-model="num1" />
      <input type="number" name="" id="" v-model="num2" />
      <span>{{ sum }}</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {}, // 데이터에 없는 새로운 키를 만들수있는 기능과 거기서 참조하고있는 다른 데이터키의 변경사항을 실시간으로 감지&반영
  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go',
      middleName: '',
      title: 'Mr.',
      num1: 0,
      num2: 0
    }
  },
  computed: {
    // 데이터에 없는 새로운 키를 만들수 있는 기능과, 여기서 참조하는 다른데이터 키의 변경사항을 실시간으로 감지한다.
    fullName() {
      return this.title + ' ' + this.firstName + ' ' + this.lastName
    },
    sum() {
      return this.num1 * this.num2
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doCalculate() {
      console.log(this.sum)
    }
  }
}
</script>

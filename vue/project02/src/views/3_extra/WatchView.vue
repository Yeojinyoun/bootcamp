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
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selected: '',
      fullName: '',
      firstName: 'Seungwon',
      lastName: 'Go',
      middleName: '',
      title: 'Mr.',
      num1: 0,
      num2: 0,
      changeHistory: []
    }
  },
  watch: {
    // watch: 실제로 변경이 일어나는 데이터 키를 직접 감지하고 싶을때 사용
    // computed: 새로운 데이타를 만든다.(기존에 있던 데이터들의 변경을 감지해서)
    firstName(newValue, oldValue) {
      console.log(`${oldValue} -> ${newValue}`)
    },
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
      // history를 남기는 이유, 서비스를 이용하면서 사용자가 보는 빅데이터를 볼때,, 사용할 수 있음
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

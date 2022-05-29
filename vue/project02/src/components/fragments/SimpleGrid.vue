<template>
  <div>
    <div class="text-end" v-if="enableExcelDownload">
      <button class="btn btn-primary" @click="doExcel">엑셀다운로드</button>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
          <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td v-if="selectType === 'radio'">
            <input
              type="radio"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doSelect"
            />
          </td>
          <td v-else-if="selectType === 'checkbox'">
            <input
              type="checkbox"
              name=""
              id=""
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doSelect"
            />
          </td>
          <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    changeEventName: {
      type: String,
      default: 'change-item'
    },
    enableExcelDownload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      sampleData: 'A'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.changeEventName, this.checkedItem)
        // $emit(부모컨포넌트이벤트명, 전달하고싶은data ) 부모컨포넌트의 이벤트를 실행시켜주는 글로벌함수
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.changeEventName, this.checkedItems)
      }
    },
    doPrint() {
      console.log('doPrint 함수 호출')
      console.log(this.sampleData)
    },
    doExcel() {}
  }
}
</script>

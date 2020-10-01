<template>
  <div>
    <h1>
      <span>STEP1</span> お客様の情報を入力してください
    </h1>
    <p>性別</p>
    <input type="radio" value="男性" id="man" v-model="genderSelect"/>
    <label for="man">男性</label>
    <input type="radio" value="女性" id="women" v-model="genderSelect" />
    <label for="women">女性</label>
    <p>生年月日</p>

    <select class="select" v-model="selectedYear">
      <option v-for="(year, index) in list" :key="index" :value="year">{{ year }}年</option>
    </select>
    <span>年</span>
    <select class="select" v-model="selectedMonth">
      <option v-for="(month, index) in monthNumber" :key="index" :value="month">{{month}}</option>
    </select>
    <span>月</span>
    <select class="select" v-model="selectedDay">
      <option v-for="(day, index) in dayNumber" :key="index" :value="day">{{day}}</option>
    </select>
    <span>日</span><br>
    <button class="button is-primary" @click="toDetail">次へすすむ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      monthNumber:12,
      dayNumber:31,
    };
  },
  computed: {
    genderSelect: {
      get(){
      return this.$store.getters.genderSelect;
    },
      set(value){
        this.$store.commit({type:'updateState',genderSelect:value})
      }
    },
    selectedYear: {
      get(){
      return this.$store.getters.selectedYear;
    },
      set(value){
        this.$store.commit({type:'updateState',selectedYear:value})
      }
    },
    selectedMonth: {
      get(){
      return this.$store.getters.selectedMonth;
    },
      set(value){
        this.$store.commit({type:'updateState',selectedMonth:value})
      }
    },
    selectedDay: {
      get(){
      return this.$store.getters.selectedDay;
    },
      set(value){
        this.$store.commit({type:'updateState',selectedDay:value})
      }
    },
  },
  methods: {
    toDetail() {
      this.$router.push('Detail');
    },
  },
  created() {
    const year = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
      this.list.unshift(year - i);
    }
  },
};
</script>
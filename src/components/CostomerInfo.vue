<template>
  <div>
    <h1>
      <span>STEP1</span> お客様の情報を入力してください
    </h1>
    <p>性別</p>
    <input type="radio" value="男性" id="man" v-model="gender" />
    <label for="man">男性</label>
    <input type="radio" value="女性" id="women" v-model="gender" />
    <label for="women">女性</label>
    <p>生年月日</p>

    <select class="select">
      <option v-for="(year, index) in list" :key="index" :value="year">{{ year }}年</option>
    </select>
    <span>年</span>
    <select class="select" v-model="selectedMonth">
      <option v-for="(month,index) in 12" :key="index" :value="month">{{month}}</option>
    </select>
    <span>月</span>
    <select class="select" v-model="selectedDay">
      <option v-for="(day,index) in 31" :key="index" :value="day">{{day}}</option>
    </select>
    <span>日</span>
    
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      list: [],
      num: 100,
      selectedMonth:'1',
      selectedDay: '1',
    };
  },
  created() {
    const year = new Date().getFullYear();
    for (let i = 0; i < this.num; i++) {
      this.list.unshift(year - i)
  }
  }
}
</script>
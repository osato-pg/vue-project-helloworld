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

    <select v-model="selected">
      <option v-for="(year, index) in list" :key="index" :value="year">{{ year }}年</option>
    </select>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      selected: null,
      list: [],
      num: 100,
    };
  },
  created() {
    const year = new Date().getFullYear();
    for (let i = 0; i < this.num; i++) {
      this.list.unshift(year - i)
  }
  this.selected = this.list[this.list.length * 0.6]
  }
}
</script>
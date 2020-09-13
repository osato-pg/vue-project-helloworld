<template>
  <div>
    <div> 
      <h1>
        <span>STEP3</span> ご相談内容をご記述ください。
      </h1>
      <textarea class="textarea" cols="30" rows="10"></textarea>
      <button class="button is-primary" @click="toDetail">前へ戻る</button>
     <button class="button is-primary">次へすすむ</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail() {
      this.$router.push("/Detail");
    },
  }
}
</script>


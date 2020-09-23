<template>
  <div>
    <div> 
      <h1>
        <span>STEP3</span> ご相談内容をご記述ください。
      </h1>
      <textarea class="textarea" cols="30" rows="10" v-model="freeComment"></textarea>
      <button class="button is-primary" @click="toDetail">前へ戻る</button>
     <button class="button is-primary" @click="toResult">次へすすむ</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    freeComment: {
      get(){
      return this.$store.getters.freeComment;
    },
      set(value){
        this.$store.commit('updateFreeComment',value)
      }
    }
  },
  methods: {
    toDetail() {
      this.$router.push("/Detail");
    },
    toResult() {
      this.$router.push("/Result");
    }
  }
}
</script>


<template>
  <div>
    <h1>
      <span>STEP4</span> 以下の内容をご確認ください
    </h1>
    <p>-性別-</p>
    <p>{{genderSelect}}</p>
    <p>-生年月日-</p>
    <p>{{selectedYear}}年{{selectedMonth}}月{{selectedDay}}日</p>
    <p>-現在生命保険に加入されていますか</p>
    <p>{{insurance}}</p>
    <p>現在入院中ですか。または３ヶ月以内に医師の診察・検査の結果、入院手術を進められたことはありますか。</p>
    <p>{{hospital}}</p>
    <p>過去5年以内に、病気やケガで手術をうけたことまたは継続して7日以上の入院をしたことがありますか。</p>
    <p>{{experience}}</p>
    <p>-ご相談内容-</p>
    <p>{{freeComment}}</p>
    <button class="button is-primary" @click="toFree">前へ戻る</button>
    <button class="button is-primary">送信</button>
  </div>
</template>

<script>
export default {
  computed: {
    freeComment() {
      return this.$store.state.freeComment;
    },
    genderSelect() {
      return this.$store.state.genderSelect;
    },
    selectedYear() {
      return this.$store.state.selectedYear;
    },
    selectedMonth() {
      return this.$store.state.selectedMonth;
    },
    selectedDay() {
      return this.$store.state.selectedDay;
    },
    insurance() {
      return this.$store.state.insurance;
    },
    hospital() {
      return this.$store.state.hospital;
    },
    experience() {
      return this.$store.state.experience;
    },
  },
  methods: {
    toFree() {
      this.$router.push("/Free");
    },
  },
};
</script>
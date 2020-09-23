<template>
  <div>
    <h1>
      <span>STEP２</span>以下にお答えください
    </h1>
    <section>
      <p>現在生命保険に加入されていますか？</p>
      <input @change="appearHos" type="radio" value="はい" id="insuranceYes" v-model="insurance" />
      <label for="insuranceYes">はい</label>
      <input @change="appearHos" type="radio" value="いいえ" id="insuranceNo" v-model="insurance" />
      <label for="insuranceNo">いいえ</label>
    </section>

    <transition appear>
      <section v-if="isShowHospital">
        <p>現在入院中ですか。または３ヶ月以内に医師の診察・検査の結果、入院手術を進められたことはありますか。</p>
        <input @change="appearEx" type="radio" value="はい" id="hospitalYes" v-model="hospital" />
        <label for="hospitalYes">はい</label>
        <input @change="appearEx" type="radio" value="いいえ" id="hospitalNo" v-model="hospital" />
        <label for="hospitalNo">いいえ</label>
      </section>
    </transition>

    <transition appear>
      <section v-if="isShowExperience">
        <p>過去5年以内に、病気やケガで手術をうけたことまたは継続して7日以上の入院をしたことがありますか。</p>
        <input type="radio" value="はい" id="experienceYes" v-model="experience" />
        <label for="experienceYes">はい</label>
        <input type="radio" value="いいえ" id="experienceNo" v-model="experience" />
        <label for="experienceNo">いいえ</label>
      </section>
    </transition>
    <button class="button is-primary" @click="toCostomer">前へ戻る</button>
    <button class="button is-primary" @click="toFree">次へすすむ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowHospital: false,
      isShowExperience: false,
    };
  },
  computed: {
    insurance: {
      get() {
        return this.$store.getters.insurance;
      },
      set(value) {
        this.$store.commit("updateInsurance", value);
      }
    },
    hospital: {
      get() {
        return this.$store.getters.hospital;
      },
      set(value) {
        this.$store.commit("updateHospital", value);
      }
    },
    experience: {
      get() {
        return this.$store.getters.experience;
      },
      set(value) {
        this.$store.commit("updateExperience", value);
      }
    },
  },
  methods: {
    appearHos() {
      this.isShowHospital = true;
    },
    appearEx() {
      this.isShowExperience = true;
    },
    toCostomer() {
      this.$router.push("/");
    },
    toFree() {
      this.$router.push("Free");
    },
  },
};
</script>
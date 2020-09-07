<template>
  <div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <button class="hide" @click="backComponent">前へ戻る</button>
    <button @click="aheadComponent">次へすすむ</button>
  </div>
</template>
Ï
<script>
import CostomerInfo from "./components/CostomerInfo.vue";
import DetailInfo from "./components/DetailInfo.vue";
import FreeField from "./components/FreeField.vue";

export default {
  data() {
    return {
      currentComponent: "CostomerInfo",
    };
  },
  components: {
    CostomerInfo,
    DetailInfo,
    FreeField,
  },
  methods: {
    aheadComponent() {
      if (this.currentComponent === "CostomerInfo") {
        this.currentComponent = "DetailInfo";
      } else if (this.currentComponent === "DetailInfo") {
        this.currentComponent = "FreeField";
      }
    },
    backComponent() {
      if (this.currentComponent === "DetailInfo") {
        this.currentComponent = "CostomerInfo";

      } else if (this.currentComponent === "FreeField") {
        this.currentComponent = "DetailInfo";
      }
    },
  },
};
</script>


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    freeComment: '',
    genderSelect:'',
    selectedYear:'1999',
    selectedMonth:'1',
    selectedDay:'1',
    insurance:'',
    hospital:'',
    experience:'',
  },
  getters: {
    freeComment: state => state.freeComment,
    genderSelect: state => state.genderSelect,
    selectedYear: state => state.selectedYear,
    selectedMonth: state => state.selectedMonth,
    selectedDay: state => state.selectedDay,
    insurance: state => state.insurance,
    hospital: state => state.hospital,
    experience: state => state.experience,
  },
  mutations: {
    updateFreeComment(state,newComment) {
      state.freeComment = newComment
    },
    updateGenderSelect(state,newGender) {
      state.genderSelect = newGender
    },
    updateSelectedYear(state,newYear) {
      state.selectedYear = newYear
    },
    updateSelectedMonth(state,newMonth) {
      state.selectedMonth = newMonth
    },
    updateSelectedDay(state,newDay) {
      state.selectedDay = newDay
    },
    updateInsurance(state,newInsurance) {
      state.insurance = newInsurance
    },
    updateHospital(state,newHospital) {
      state.hospital = newHospital
    },
    updateExperience(state,newExperience) {
      state.experience = newExperience
    },
  }
});
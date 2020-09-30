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
    updateState(state,newState){
      Object.assign(state,newState);
    }
  }
});
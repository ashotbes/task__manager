import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const TASKS_KEY = 'tasks';

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    deleteTask(state, taskIndex) {
      state.tasks.splice(taskIndex, 1);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
    editTask(state, { index, task }) {
      state.tasks.splice(index, 1, task);
      localStorage.setItem(TASKS_KEY, JSON.stringify(state.tasks));
    },
  },
  actions: {
    initializeTasks({ commit }) {
      const savedTasks = localStorage.getItem(TASKS_KEY);
      if (savedTasks) {
        commit('setTasks', JSON.parse(savedTasks));
      }
    },
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, taskIndex) {
      commit('deleteTask', taskIndex);
    },
    editTask({ commit }, payload) {
      commit('editTask', payload);
    },
  },
});

export default store;

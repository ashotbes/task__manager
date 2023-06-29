<template>
  <div>
    <h1 class="title">Список задач</h1>
    <form @submit.prevent="submitTask">
      <input v-model="newTask" type="text" placeholder="Новая задача" class="field"/>
      <button type="submit" class="btn mr">Добавить</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="list">
        {{ task }}
        <button class="btn mr" @click="deleteTask(index)">Удалить</button>
        <button class="btn mr" @click="editTask(index)">Редактировать</button>
      </li>
    </ul>
    <button class="btn mt mr" @click="goToHome">Вернуться на главную</button>
    <button class="btn mt mr" @click="loadMoreTasks">Загрузить 50 задач</button>
    <button class="btn mt mr" @click="deleteAllTasks">Удалить все задачи</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Tasks',
  computed: {
    ...mapState(['tasks']),
  },
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    ...mapActions(['addTask', 'deleteTask', 'loadTasks']),
    submitTask() {
      if (this.newTask.trim() !== '') {
        this.addTask(this.newTask);
        this.newTask = '';
      }
    },
    editTask(index) {
      const updatedTask = prompt('Введите новое название задачи', this.tasks[index]);
      if (updatedTask) {
        this.$store.dispatch('editTask', {index, task: updatedTask});
      }
    },
    goToHome() {
      this.$router.push('/');
    },
    loadMoreTasks() {
      for (let i = 0; i < 50; i++) {
        this.addTask(`Задача ${i + 1}`);
      }
    },
    deleteAllTasks() {
      if (confirm('Вы уверены, что хотите удалить все задачи?')) {
        for (let i = this.tasks.length - 1; i >= 0; i--) {
          this.deleteTask(i);
        }
      }
    },
  },
  created() {
    this.loadTasks();
  },
};
</script>

<style scoped>

.title {
  font-size: 40px;
  margin-top: 100px;
}

.btn {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  margin-left: 15px mt;
}


.field {

  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #99A3BA;
  border: 1px solid #CDD9ED;
  background: #fff;
  transition: border 0.3s ease;
  width: 200px;
}

ul,li {
  list-style-type: none;

}

ul {
  display: flex;
  flex-direction: column;
  gap: 45px;
}


.mt{
  margin-top: 124px;
}

.mr{
  margin-right: 25px;
  margin-left: 25px;
}

</style>

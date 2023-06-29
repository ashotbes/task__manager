<template>
  <div class="home">
    <h1 class="title">Добро пожаловать на главную страницу</h1>
    <router-link to="/tasks" class="link">Перейти к списку задач</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
}

.home{
  width: 100%;
  background: #e3ffef;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title{
  font-size: 45px;
}

.link{
  text-decoration: none;
  color: #2c3e50;
  font-size: 28px;
  margin-top: 15px;
  border-radius: 100%;
}
</style>

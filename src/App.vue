<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Home
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, 'Times New Roman', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

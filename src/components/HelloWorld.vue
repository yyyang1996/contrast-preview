<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Contrast Ratio Preview</h1>
      <div class="setting">
        <ColorPicker
          title="Background"
          v-model="leftBgColor"
        />
        <ColorPicker
          title="Foreground"
          v-model="foreground"
        />
        <ColorPicker
          title="Background"
          v-model="rightBgColor"
        />
      </div>
    </header>

    <main class="main">
      <div class="container">
        <Playground
          :background="leftBgColor"
          :color="foreground"
        />
      </div>
      <div class="container">
        <Playground
          :background="rightBgColor"
          :color="foreground"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Playground from './Playground';
import ColorPicker from './ColorPicker';
export default {
  name: 'HelloWorld',
  components: {
    Playground,
    ColorPicker
  },
  data() {
    return {
      foreground: '#1FBC9C',
      leftBgColor: '#eeeeee',
      rightBgColor: '#0b1928'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page {
  display: flex;
  flex-flow: column;
  width: 100%;
  min-height: 100vh;

  .header {
    width: 100%;
    height: 200px;
    color: #121212;
    background-color: #ddccee;
    text-align: center;

    .title {
      height: 100px;
      line-height: 100px;
      font-size: 36px;
      font-weight: 100;
    }

    .setting {
      height: 100px;
      display: flex;
      justify-content: space-around;
      color: #121212;
    }
  }

  .main {
    display: flex;
    width: 100%;
    flex: 1;
  }

  .container {
    flex: 1;
    width: 50%;
  }
}
</style>

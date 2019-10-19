<template>
  <div
    :style="{ background }"
    class="preview"
  >
    <div
      :style="{color: resultColor}"
      class="contrast"
    >Contrast Ratio: {{ratio.toFixed(2)}}</div>
    <div
      :style="{color}"
      class="text"
    >
      <h2 class="large-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p
        class="normal-text"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorum maxime nobis porro nostrum iure harum, eligendi deleniti sint nulla labore dolore enim nemo vel dolor consequuntur tenetur suscipit ipsam.</p>
    </div>
  </div>
</template>

<script>
import Color from 'color';
export default {
  name: 'Preview',
  props: {
    color: {
      type: String,
      default: '#ffffff'
    },
    background: {
      type: String
    }
  },
  data() {
    return {
      targetRatio: 3
    };
  },
  computed: {
    ratio() {
      return Color(this.color).contrast(Color(this.background));
    },
    resultColor() {
      return Color(this.background).isLight() ? '#423c37' : '#e7e4e4';
    }
  }
};
</script>


<style lang="less" scoped>
.preview {
  width: 100%;
  height: 100%;
  line-height: 1.5;
  padding-top: 24px;
  overflow: hidden;

  .contrast {
    font-size: 36px;
  }

  .text {
    width: 600px;
    margin: 50px auto 0;
    line-height: 1.5;
    text-align: left;
    .large-text {
      font-size: 24px;
      font-weight: bold;
    }
    .normal-text {
      margin-top: 24px;
      font-size: 18px;
    }
  }
}
</style>

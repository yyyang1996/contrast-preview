<template>
  <div
    :style="{ background }"
    class="playground"
  >
    <div
      :style="{color: resultColor}"
      class="contrast"
    >Contrast Ratio: {{ratio.toFixed(2)}}</div>
    <div
      :style="{color}"
      class="preview"
    >
      <h2 class="large-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p
        class="normal-text"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolorum maxime nobis porro nostrum iure harum, eligendi deleniti sint nulla labore dolore enim nemo vel dolor consequuntur tenetur suscipit ipsam.</p>
    </div>

    <div>
      <div
        :style="{color: resultColor}"
        class="target"
      >
        <label class="label">Minimum ratio:</label>
        <select
          class="select"
          v-model.number="targetRatio"
        >
          <option
            selected
            value="3"
          >3</option>
          <option value="4.5">4.5</option>
          <option value="7">7</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Color from 'color';
export default {
  name: 'playground',
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
.playground {
  width: 100%;
  height: 100%;
  line-height: 1.5;
  padding-top: 24px;

  .contrast {
    font-size: 36px;
  }

  .preview {
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

  .target {
    width: 600px;
    margin: 50px auto 0;
    text-align: left;

    .label {
      display: inline-block;
      margin-right: 8px;
      font-size: 16px;
    }
    .select {
      width: 80px;
      height: 34px;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  }
}
</style>

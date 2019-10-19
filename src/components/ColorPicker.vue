<template>
  <div class="color-picker">
    <h2 class="title">{{title}}</h2>
    <v-popover offset="5">
      <div
        @click="handleClick"
        class="hex"
      >{{hex}}</div>
      <div slot="popover">Copied!</div>
    </v-popover>

    <Verte
      :colorHistory="colors"
      :rgbSliders="true"
      :showHistory="true"
      :value="color"
      @input="handleInput"
      menuPosition="bottom"
      model="rgb"
      picker="square"
    >
      <div
        :style="{background: color}"
        class="watches"
      ></div>
    </Verte>
  </div>
</template>

<script>
import Copy from 'copy-to-clipboard';
import Verte from 'verte';
import Color from 'color';

export default {
  name: 'ColorPicker',
  components: {
    Verte
  },
  model: {
    prop: 'color',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      colors: [
        '#1fbc9c',
        '#1ca085',
        '#2ecc70',
        '#27af60',
        '#3398db',
        '#008dff',
        '#2980b9',
        '#a463bf',
        '#8e43ad',
        '#3d556e',
        '#222f3d',
        '#f2c511',
        '#f39c19',
        '#ff4081',
        '#e84b3c',
        '#c0382b',
        '#dde6e8',
        '#bdc3c8'
      ],
      tooltipOptions: {
        trigger: 'click',
        show: false,
        content: 'copied!',
        offset: 10
      }
    };
  },
  computed: {
    hex() {
      return Color(this.color)
        .hex()
        .toLowerCase();
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('change', val);
    },
    handleClick() {
      Copy(this.hex);
    }
  }
};
</script>

<style lang="less">
.fallback-input {
  text-indent: 12px;
  margin-right: 4px;
}
</style>

<style lang="less" scoped>
.color-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .title {
    color: #121212;
    margin-right: 12px;
    font-size: 18px;
  }

  .hex {
    height: 36px;
    line-height: 36px;
    width: 90px;
    margin-right: 16px;
    padding: 0 8px;
    color: #121212;
    border: 1px solid #808080;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .verte {
    width: 36px;
    height: 36px;
    justify-content: flex-start;
    .watches {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid #808080;
    }
  }
}
</style>

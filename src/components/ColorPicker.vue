<template>
  <div class="color-picker">
    <h2 class="title">{{title}}</h2>
    <Swatches
      :close-on-select="false"
      :value="color"
      @input="handleInput"
      fallbackInputClass="fallback-input"
      popover-to="left"
      show-fallback
    ></Swatches>
  </div>
</template>

<script>
import Swatches from 'vue-swatches';

export default {
  name: 'ForeInput',
  components: {
    Swatches
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
  model: {
    prop: 'color',
    event: 'change'
  },
  methods: {
    handleInput(val) {
      this.$emit('change', val);
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
    color: #040218;
    margin-right: 24px;
    font-size: 18px;
  }
}
</style>

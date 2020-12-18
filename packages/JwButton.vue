<template>
  <button :class="[`jw-button--${type}`]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "JwButton",
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.jw-button--success {
  background-color: red;
}
</style>
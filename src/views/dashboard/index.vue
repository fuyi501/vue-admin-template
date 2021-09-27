<template>
  <div class="dashboard-container">
    <div class="dashboard-title">主页</div>
    <div class="dashboard-text">系统: {{ title }}</div>
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">token: {{ token }}</div>
    <div class="dashboard-text">avatar: {{ avatar }}</div>
    <div class="dashboard-text">github: {{ github }}</div>
    <div class="dashboard-text">gitee: {{ gitee }}</div>
    <div class="dashboard-text">device: {{ device }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['avatar', 'name', 'token', 'device']),
    title() {
      return this.$store.state.settings.title
    },
    github() {
      return this.$store.state.settings.github
    },
    gitee() {
      return this.$store.state.settings.gitee
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-title {
    font-size: 30px;
    line-height: 46px;
  }
  &-text {
    font-size: 20px;
    line-height: 36px;
  }
}
</style>

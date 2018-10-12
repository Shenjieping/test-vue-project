<template>
  <div id="app">
      <layout>
          <router-view/>
      </layout>
  </div>
</template>

<script>
import Layout from './layout';
export default {
  name: 'App',
  components: {
      Layout
  }
}
</script>

<style lang="less">
@import 'assets/global.less';

</style>

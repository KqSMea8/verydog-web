<template>
  <div id="app" class="app">

    <dog-header></dog-header>

    <div class="app-init">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import DogHeader from './components/DogHeader'

  export default {
    name: 'app',
    components: {
      DogHeader,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/language.css";
  @import "//at.alicdn.com/t/font_864472_lptvl9yrzlq.css";
</style>

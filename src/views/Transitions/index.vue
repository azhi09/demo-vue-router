<template>
  <div>
    <h2>
      过度动效
    </h2>
    <div>
      <router-link to="/transitions/tab1">Tab1</router-link>
      |
      <router-link to="/transitions/tab2">Tab2</router-link>
      |<a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank"
        >更多</a
      >
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "transitions"
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

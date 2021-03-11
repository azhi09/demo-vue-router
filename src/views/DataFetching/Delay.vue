<template>
  <div>进入到新路由: {{ $route.path }}</div>
</template>

<script>
export default {
  name: "dataFetchingDelay",
  beforeRouteEnter(to, from, next) {
    setTimeout(next, 3000);
  }
};
</script>

<style></style>

<template>
  <div>
    <h2>Meta: 路由元信息</h2>
    获取方式：$route.meta.title => title: {{ $route.meta.title }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Meta"
};
</script>

<style></style>

<template>
  <div>
    {path: '*'} 匹配所有路由
    <hr />
    <div>当前路由 => $route.path : {{ $route.path }}</div>
    <hr />
    <div>
      匹配参数 => $route.params.pathMatch : {{ $route.params.pathMatch }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchAnything",
  data() {
    return {};
  },
};
</script>

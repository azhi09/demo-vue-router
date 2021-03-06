<template>
  <div>
    {path: 'user-*'} 匹配部分路由
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
  name: "MatchPart",
  data() {
    return {};
  },
};
</script>

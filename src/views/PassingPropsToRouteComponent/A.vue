<template>
  <div>
    <h2>路由组件传参- 单个</h2>
    <div>路由中参数传入到组件的props中 => id: {{ id }}</div>
    <p>query中参数不能写入到组件props中=> type: {{ type }}</p>
    <p>
      query中参数获取方式还是旧方式$route.query.type:{{ $route.query.type }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PassingPropsToRouteComponentA",
  props: ["id"],
};
</script>

<style>
</style>
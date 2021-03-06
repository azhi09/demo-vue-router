<template>
  <div>
    <h2>
      默认视图：路由组件传参- 多个 router-view 时, props:{ default: true, one:
      false}
    </h2>
    <div>
      <p>默认视图中，路由中参数传入到组件的props中</p>
      <p>params中参数可以直接写入到组件props中 => id: {{ id }}</p>
      <p>query中参数不能写入到组件props中=> type: {{ type }}</p>
      <p>query中参数获取方式还是旧方式$route.query.type:{{ $route.query.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassingPropsToRouteComponentB",
  props: ["id", "type"],
};
</script>

<style>
</style>
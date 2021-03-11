<template>
  <div>
    <h2>
      One视图：路由组件传参- 多个 router-view 时, props:{ default: true, one:
      false}
    </h2>
    <div>
      <p>One视图中，路由中参数依然需要从$route.params中读取</p>
      <p>
        props 为 false时，使用旧的获取方式=> $route.params.id:{{
          $route.params.id
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassingPropsToRouteComponentOne"
};
</script>

<style></style>

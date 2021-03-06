<template>
  <div>
    <h2>嵌套路由</h2>
    <div>这里是一级路由</div>
    <div>
      <router-link to="/nestedRoutes">不匹配子路由</router-link>
      |
      <router-link to="/nestedRoutes/one">子路由一</router-link>
      |
      <router-link to="/nestedRoutes/two">子路由二</router-link>
      |
      <router-link to="/nestedRoutes/404">子路由通配</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NestedRoutes",
  data() {
    return {};
  },
};
</script>

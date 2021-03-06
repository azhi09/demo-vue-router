<template>
  <div>
    <h2>命名视图</h2>
    <router-link to="/namedRoutes">默认视图</router-link>
    |
    <router-link to="/namedRoutes/one">视图one + 默认视图</router-link>
    |
    <router-link to="/namedRoutes/two">视图two + 视图one</router-link>
    <router-view></router-view>
    <router-view name="one"></router-view>
    <router-view name="two"></router-view>
  </div>
</template>

<script>
export default {
  name: "namedRoutes",
  data() {
    return {};
  },
  methods: {
    routerPushPathString() {
      this.$router.push("/drm/0");
    },
    routerPushPath() {
      this.$router.push({ path: "/drm/1" });
    },
    routerPushName() {
      this.$router.push({ name: "dynamicRouterMatching", params: { id: 1 } });
    },
    routerPushNameQuery() {
      this.$router.push({
        name: "dynamicRouterMatching",
        params: { id: 1 },
        query: { type: "add" },
      });
      //   this.$router.push({ name: "dynamicRouterMatching", params: {id: 1}, query: { type: 1 } });
    },
  },
};
</script>

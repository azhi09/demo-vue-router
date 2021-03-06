<template>
  <div>
    <h2>编程式导航</h2>
    router.push | router.replace | router.go
    <hr />
    <div>router.push 等于 点击 &lt;router-link&gt;</div>
    <div>router.push({path:'/a'}) => &lt;router-link to="/a"&gt;</div>
    <hr />
    router.push中，path与params不共存
    <hr />
    router.go可以看统一的返回按钮
    <hr />
    <p>
      <button @click="routerPushPathString">this.$router.push('/drm/0')</button>
      => /drm/0
    </p>
    <p>
      <button @click="routerPushPath">
        this.$router.push({path:'/drm/0'})
      </button>
      => /drm/0
    </p>
    <p>
      <button @click="routerPushName">
        this.$router.push({name:'dynamicRouterMatching', params:{id:1}})
      </button>
      => /drm/1
    </p>
    <p>
      <button @click="routerPushNameQuery">
        this.$router.push({name:'dynamicRouterMatching', params:{id:1}
        query:{type:'add'}})
      </button>
      => /drm/1?type=add
    </p>
  </div>
</template>

<script>
export default {
  name: "programmaticNavigation",
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

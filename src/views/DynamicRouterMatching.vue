<template>
  <div>
    <div>
      <div>
        尝试修改/drm/0 => /drm/1 查看页面变动,
        <router-link to="/drm/10">或者点这里</router-link>
      </div>
    </div>
    <hr />
    <div>动态路由匹配，路由路径参数/drm/:id => id: {{ $route.params.id }}</div>
    <hr />
    <div>
      响应路由参数变化1：通过watch:$route => 原id: {{ prevId }} 新id:{{
        currId
      }}
    </div>
    <hr />
    <div>
      响应路由参数变化2：通过导航守卫beforeRouteUpdate(to, from, next) => 原id:
      {{ bPrevId }} 新id:{{ bCurrId }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicRouterMatching",
  data() {
    return { prevId: "", currId: "", bPrevId: "", bCurrId: "" };
  },
  watch: {
    $route(to, from) {
      this.prevId = from.params.id;
      this.currId = to.params.id;
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.bPrevId = from.params.id;
    this.bCurrId = to.params.id;
    next();
  },
};
</script>

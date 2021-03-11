<template>
  <div>
    <h2>导航守卫</h2>
    <hr />
    <p>参数(params)或查询(query)的改变并不会触发进入/离开的导航守卫</p>
    <hr />
    <h3>beforeEach(全局)</h3>
    <p>
      router.beforeEach(to, from,
      next)将在每次路由发生变化时调用（包括params和query的改变）
    </p>
    <hr />
    <h3>beforeResolve(全局)</h3>
    <p>
      router.beforeResolve(to, from,
      next)将在所有组件内守卫和异步路由组件被解析之后，路由确认之前被调用
    </p>
    <hr />
    <h3>afterEach(全局)</h3>
    <p>router.afterEach(to, from )将在路由确认之后，DOM更新前被调用</p>
    <hr />
    <h3>beforeEnter(路由)</h3>
    <p>
      beforeEnter(to, from, next), 写在具体的路由上, {path, name, component,
      beforeEnter}
    </p>
    <hr />
    <!-- <router-link to="/navigationGuards/one">点击这里</router-link> -->
    <router-view></router-view>
    <hr />
    <h3>守卫顺序</h3>
    <div>=> 导航被触发</div>
    <div>=> from组件中的 beforeRouteLeave</div>
    <div>=> 全局的 beforeEach</div>
    <div>=> 如果有复用组件, 调用组件的 beforeRouteUpdate</div>
    <div>=> 调用beforeEnter</div>
    <div>=> 解析异步路由组件</div>
    <div>=> to组件中的 beforeRouteEnter</div>
    <div>=> 全局的 beforeResolve</div>
    <div>=> 导航被确认</div>
    <div>=> 全局的 afterEach</div>
    <div>=> DOM更新</div>
    <div>=> 执行 to组件中 beforeRouteEnter 的next回调函数</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "navigationGuards"
};
</script>

<style></style>

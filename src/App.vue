<template>
  <div id="app">
    <button @click="$router.go(-1)">返回($router.go(-1)</button>
    <div class="nav">
      基础 =>
      <router-link to="/drm/0">动态路由匹配</router-link>
      |
      <router-link to="/nestedRoutes">嵌套路由</router-link>
      |
      <router-link to="/user-abc">匹配部分路由（/user-*）</router-link>
      |
      <router-link to="/404"
        >匹配所有路由（/* 那些没有被定义的路由）</router-link
      >
      |
      <router-link to="/programmaticNavigation">编程式导航</router-link>
      |
      <router-link to="/namedRoutes">命名视图</router-link>
      |
      <router-link to="/redirectAndAlias">重定向与别名</router-link>
      |
      <router-link to="/passingPropsToRouteComponent">路由组件传参</router-link>
    </div>
    <div class="nav">
      进阶 =>
      <router-link to="/drm/0">动态路由匹配</router-link>
      |
      <router-link to="/nestedRoutes">嵌套路由</router-link>
      |
      <router-link to="/user-abc">匹配部分路由（/user-*）</router-link>
      |
      <router-link to="/404"
        >匹配所有路由（/* 那些没有被定义的路由）</router-link
      >
      |
      <router-link to="/programmaticNavigation">编程式导航</router-link>
      |
      <router-link to="/namedRoutes">命名视图</router-link>
      |
      <router-link to="/redirectAndAlias">重定向与别名</router-link>
      |
      <router-link to="/passingPropsToRouteComponent">路由组件传参</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>

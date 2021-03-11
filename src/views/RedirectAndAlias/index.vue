<template>
  <div>
    <h2>重定向与别名</h2>
    <ul>
      <li>
        重定向：访问/a时转跳到/b =>
        <router-link to="/redirectAndAlias/a" tag="button"
          >/redirectAndAlias/a
        </router-link>
      </li>
      <li>
        别名：访问/c时路由不转跳，但访问的是/d路由的内容[组件](
        访问/d时正常转跳/d) =>
        <router-link to="/redirectAndAlias/c" tag="button"
          >/redirectAndAlias/c
        </router-link>
        |
        <router-link to="/redirectAndAlias/d" tag="button"
          >/redirectAndAlias/d
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RedirectAndAlias"
};
</script>

<style></style>

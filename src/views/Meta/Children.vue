<template>
  <div>
    <h2>Meta Children: 子路由(嵌套路由的)元信息</h2>
    <p>
      访问子路由时，$route.meta是当前路由的meta
    </p>
    <div>
      要获取父路由中的meta，可以通过$route.matched中的数组获取，如列出所有的title:
      $route.matched.map(item => item.meta.title).join(" - ")
      <div>
        <strong>
          {{ $route.matched.map(item => item.meta.title).join(" - ") }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "metaChildren",
  created() {}
};
</script>

<style></style>

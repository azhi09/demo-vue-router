<template>
  <div>
    <h2>数据获取</h2>
    <p>
      数据获取分为路由完成后获取和路由完成前
    </p>
    <hr />
    <h3>路由完成后</h3>
    <p>
      路由完成后意味着旧组件已经消失，可以进入新组件的生命周期了，此时，只需要在create时操作数据获取即可
    </p>
    <hr />
    <h3>路由完成前</h3>
    <p>
      在beforeRouteEnter中完成数据获取的操作，获取到数据后再允许路由进入(执行next())，此时页面上依然展示旧组件，数据获取后再进去新组件
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataFetching"
};
</script>

<style></style>

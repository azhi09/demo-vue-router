<template>
  <div>
    <h2>路由组件传参</h2>
    <p>正常情况下，组件读取路由参数通过<code>$route.params.id</code></p>
    <p>这样组件和路由就高度耦合，不便于复用</p>
    <p>
      通过路由组件传参props:true，使路由参数传入到组件的<code>props</code>中，使得组件与路由解耦
    </p>

    <router-link to="/passingPropsToRouteComponent/a/0?type=add"
      >{props: true}</router-link
    >
    |
    <router-link to="/passingPropsToRouteComponent/b/1?type=add"
      >{components:{defualt, one},props: {default:true, one:false}
      }</router-link
    >
    <router-view></router-view>
    <router-view name="one"></router-view>

    <!-- <p>
      {path:'/a/:id', component: () => import('/ComponentName.vue'), props:
      true}
    </p> -->
    <!-- <router-view></router-view> <h3>{components:{defualt, one},props: {default:true, one:false} }</h3> -->
    <!-- <p>
      {path:'/a/:id', component: () => import('/ComponentName.vue'), props:
      true}
    </p> -->
  </div>
</template>

<script>
export default {
  name: "passingPropsToRouteComponent",
};
</script>

<style>
</style>
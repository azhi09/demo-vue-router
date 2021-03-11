<template>
  <div>
    <button @click="jump">点击这里</button>
    <div v-if="isNavigating">导航中：当前路由{{ $route.path }}</div>
  </div>
</template>

<script>
export default {
  name: "dataFetchingDefault",
  data() {
    return {
      isNavigating: false
    };
  },
  methods: {
    jump() {
      this.isNavigating = true;
      this.$router.push("/dataFetching/delay", () => {
        this.isNavigating = false;
      });
    }
  }
};
</script>

<style></style>

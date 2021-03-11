<template>
  <div>
    <h3>beforeRouteEnter|beforeRouteUpdate|beforeRouteLeave</h3>
    <p>打开控制台看输出</p>
    <p><strong>beforeRouteEnter:</strong> {{ beforeRouteEnterMsg }}</p>
    <p>
      <strong>beforeRouteUpdate:</strong>
      只触发beforeEach,beforeRouteUpdate,beforeResolve,afterEach
      <router-link :to="`/navigationGuards/beforeRouteUpdate?id=${timeStamp}`"
        >点击这里
      </router-link>
    </p>

    <div class="bg-red text-white">
      beforeRouteLeave中设置了next(false), 当前不能转跳到其他的路由中，
      <router-link :to="`/navigationGuards/beforeRouteLeave?id=${timeStamp}`"
        >点击这里
      </router-link>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "navigationGuards",
  data() {
    return {
      timeStamp: Date.now(),
      beforeRouteEnterMsg: "",
      canJump: false
    };
  },
  methods: {
    switchButton() {
      window.confirm("");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(`beforeRouteEnter: ${to.path} => ${from.path} `);
    next(vm => {
      console.log(`beforeRouteEnter.next: 执行 `);
      vm.beforeRouteEnterMsg =
        "触发beforeRouteEnter， 并在回调中修改beforeRouteEnterMsg => beforeRouteEnter(to, from, next) { next(vm => {})}";
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path === from.path) {
      this.canJump = false;
    }
    this.timeStamp = Date.now();
    console.log(
      `beforeRouteUpdate: ${to.path} => ${from.path} path.query.id: ${from.query.id}=> ${to.query.id}`
    );
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(`beforeRouteLeavel: ${to.path} => ${from.path}`);
    if (this.canJump) {
      next();
    } else {
      let res = window.confirm(
        "路由转跳被beforeRouteLeave拦截，是否要继续转跳"
      );
      next(res);
    }
  }
};
</script>

<style scoped>
.bg-red {
  background-color: #f00;
}
.bg-green {
  background-color: lightgreen;
}
.text-white {
  color: #fff;
}
</style>

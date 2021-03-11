import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/drm/0"
  },
  {
    path: "/drm/:id",
    name: "dynamicRouterMatching",
    component: () => import("@/views/DynamicRouterMatching.vue")
  },
  {
    path: "/nestedRoutes",
    name: "nestedRoutes",
    component: () => import("@/views/NestedRoutes/index.vue"),
    children: [
      {
        path: "one",
        name: "nestedRouteOne",
        component: () => import("@/views/NestedRoutes/One.vue")
      },
      {
        path: "two",
        name: "nestedRouteTwo",
        component: () => import("@/views/NestedRoutes/Two.vue")
      },
      {
        path: "*",
        name: "nestedRouteAnything",
        component: () => import("@/views/MatchAnything.vue")
      }
    ]
  },
  {
    path: "/programmaticNavigation",
    name: "programmaticNavigation",
    component: () => import("@/views/ProgrammaticNavigation.vue")
  },
  {
    path: "/namedRoutes",
    name: "namedRoutes",
    component: () => import("@/views/NamedRoutes/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/NamedRoutes/Default.vue")
      },
      {
        path: "/namedRoutes/one",
        components: {
          default: () => import("@/views/NamedRoutes/Default.vue"),
          one: () => import("@/views/NamedRoutes/One.vue")
        }
      },
      {
        path: "/namedRoutes/two",
        components: {
          one: () => import("@/views/NamedRoutes/One.vue"),
          two: () => import("@/views/NamedRoutes/Two.vue")
        }
      }
    ]
  },
  {
    path: "/redirectAndAlias",
    name: "redirectAndAlias",
    component: () => import("@/views/RedirectAndAlias/index.vue"),
    children: [
      {
        path: "a",
        redirect: "b"
      },
      {
        path: "b",
        component: () => import("@/views/RedirectAndAlias/B.vue")
      },
      {
        path: "d",
        component: () => import("@/views/RedirectAndAlias/D.vue"),
        alias: "c"
      }
    ]
  },
  {
    path: "/passingPropsToRouteComponent",
    name: "passingPropsToRouteComponent",
    component: () => import("@/views/PassingPropsToRouteComponent/index.vue"),
    children: [
      {
        path: "a/:id",
        component: () => import("@/views/PassingPropsToRouteComponent/A.vue"),
        props: true
      },
      {
        path: "b/:id",
        components: {
          default: () => import("@/views/PassingPropsToRouteComponent/B.vue"),
          one: () => import("@/views/PassingPropsToRouteComponent/One.vue")
        },
        props: {
          default: true,
          one: false
        }
      }
    ]
  },
  {
    path: "/navigationGuards",
    name: "navigationGuards",
    redirect: "/navigationGuards/beforeRouteUpdate",
    component: () => import("@/views/NavigationGuards/index.vue"),
    children: [
      {
        path: "beforeRouteLeave",
        name: "navigationGuardsBeforeRouteLeave",
        component: () => import("@/views/NavigationGuards/BeforeRouteLeave.vue")
      },
      {
        path: "beforeRouteUpdate",
        name: "navigationGuardsBeforeRouteUpdate",
        component: () =>
          import("@/views/NavigationGuards/BeforeRouteUpdate.vue")
      }
    ]
  },
  {
    path: "/meta",
    name: "meta",
    component: () => import("@/views/Meta/index.vue"),
    meta: { title: "Meta元信息" },
    redirect: "/meta/children",
    children: [
      {
        path: "children",
        name: "metaChildren",
        component: () => import("@/views/Meta/Children.vue"),
        meta: { title: "Meta Children元信息" }
      }
    ]
  },
  {
    path: "/transitions",
    name: "transitions",
    component: () => import("@/views/Transitions/index.vue"),
    children: [
      {
        path: "tab1",
        name: "transitionsTab1",
        component: () => import("@/views/Transitions/Tab1.vue")
      },
      {
        path: "tab2",
        name: "transitionsTab2",
        component: () => import("@/views/Transitions/Tab2.vue")
      }
    ]
  },
  {
    path: "/dataFetching",
    name: "dataFetching",
    component: () => import("@/views/DataFetching/index.vue"),
    children: [
      {
        path: "",
        name: "dataFetchingDelay",
        component: () => import("@/views/DataFetching/Default.vue")
      },
      {
        path: "delay",
        name: "dataFetchingDelay",
        component: () => import("@/views/DataFetching/Delay.vue")
      }
    ]
  },
  {
    path: "/user-*",
    name: "matchPart",
    component: () => import("@/views/MatchPart.vue")
  },
  {
    path: "*",
    name: "matchAnything",
    component: () => import("@/views/MatchAnything.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(`beforeEach: ${to.path} => ${from.path}`);
  next();
});
router.beforeResolve((to, from, next) => {
  console.log(`beforeResolve: ${to.path} => ${from.path}`);
  next();
});
router.afterEach((to, from) => {
  console.log(`afterEach: ${to.path} => ${from.path}`);
});

export default router;

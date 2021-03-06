import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/drm/0'
    },
    {
        path: '/drm/:id',
        name: 'dynamicRouterMatching',
        component: () => import('@/views/DynamicRouterMatching.vue')
    },
    {
        path: '/nestedRoutes',
        name: 'nestedRoutes',
        component: () => import('@/views/NestedRoutes/index.vue'),
        children: [
            {
                path: 'one',
                name: "nestedRouteOne",
                component: () => import('@/views/NestedRoutes/One.vue'),
            },
            {
                path: 'two',
                name: "nestedRouteTwo",
                component: () => import('@/views/NestedRoutes/Two.vue'),
            },
            {
                path: '*',
                name: "nestedRouteAnything",
                component: () => import('@/views/MatchAnything.vue'),
            }
        ]
    },
    {
        path: '/programmaticNavigation',
        name: "programmaticNavigation",
        component: () => import('@/views/ProgrammaticNavigation.vue')
    },
    {
        path: '/namedRoutes',
        name: "namedRoutes",
        component: () => import('@/views/NamedRoutes/index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/NamedRoutes/Default.vue'),
            },
            {
                path: '/namedRoutes/one',
                components: {
                    default: () => import('@/views/NamedRoutes/Default.vue'),
                    one: () => import('@/views/NamedRoutes/One.vue'),
                }
            },
            {
                path: '/namedRoutes/two',
                components: {
                    one: () => import('@/views/NamedRoutes/One.vue'),
                    two: () => import('@/views/NamedRoutes/Two.vue'),
                }
            }
        ]
    },
    {
        path: '/redirectAndAlias',
        name: "redirectAndAlias",
        component: () => import('@/views/RedirectAndAlias/index.vue'),
        children: [
            {
                path: 'a',
                redirect: 'b'
            },
            {
                path: 'b',
                component: () => import('@/views/RedirectAndAlias/B.vue'),
            },
            {
                path: 'd',
                component: () => import('@/views/RedirectAndAlias/D.vue'),
                alias: 'c'
            },
        ]
    },
    {
        path: '/passingPropsToRouteComponent',
        name: "passingPropsToRouteComponent",
        component: () => import('@/views/PassingPropsToRouteComponent/index.vue'),
        children: [
            {
                path: 'a/:id',
                component: () => import('@/views/PassingPropsToRouteComponent/A.vue'),
                props: true
            },
            {
                path: 'b/:id',
                components: {
                    default: () => import('@/views/PassingPropsToRouteComponent/B.vue'),
                    one: () => import('@/views/PassingPropsToRouteComponent/One.vue')
                },
                props: {
                    default: true,
                    one: false
                }
            },
        ]
    },
    {
        path: '/user-*',
        name: "matchPart",
        component: () => import('@/views/MatchPart.vue')
    },
    {
        path: '*',
        name: "matchAnything",
        component: () => import('@/views/MatchAnything.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import ShoppingCar from '../views/ShoppingCar.vue'
import Contact from '../views/Contact.vue'
import AddressEdit from '../views/AddressEdit.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '',
                component: Products
            },
            {
                path: 'products',
                component: Products
            },
            {
                path: 'shoppingCar',
                component: ShoppingCar
            },
            {
                path: 'contact',
                component: Contact
            },
            {
                path: 'addressedit',
                component: AddressEdit
            }
        ]
    },
    {
        path: '/shoppingcar',
        name: 'shoppingcar',
        component: ShoppingCar
    }
]

const router = new VueRouter({
    routes
})

export default router

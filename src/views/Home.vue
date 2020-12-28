<template>
    <div class="home">
        <van-nav-bar title="动物餐厅" left-arrow @click-left="onClickLeft"/>
        <div class="main">
            <router-view />
        </div>
        <van-tabbar v-model="tabbarActive">
            <van-tabbar-item icon="home-o" replace to="/home/products"
                >主页</van-tabbar-item
            >
            <van-tabbar-item icon="search" replace to="/home/shoppingcar"
                >购物车</van-tabbar-item
            >
            <van-tabbar-item icon="setting-o" replace to="/home/contact">地址</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabbarActive: 0,
        }
    },
    methods: {
        onClickLeft (){
            console.log(123)
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    .main {
        position: absolute;
        top: 46px;
        bottom: 50px;
        left: 0;
        right: 0;
        overflow: scroll;
    }
}
.van-tree-select {
    height: 100% !important;
}
</style>

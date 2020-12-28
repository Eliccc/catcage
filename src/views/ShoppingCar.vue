<template>
    <div class="shoppingcar">
        <div class="car">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="./ipad.jpeg"
            />
        </div>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            :loading="loading"
            @submit="onSubmit"
        />
    </div>
</template>

<script>
export default {
    data(){
        return {
            loading: false
        }
    },
    methods: {
        onSubmit() {
            this.loading = !this.loading
        }
    }
}
</script>

<style lang="less" scoped>
.shoppingcar {
    height: 100%;
    position: absolute;
    width: 100%;
    .car {
        height: 100%;
        position: absolute;
        width: 100%;
        bottom: 50px;
    }
}
.van-tree-select {
    height: 100% !important;
}
.van-submit-bar {
    position: absolute;
    bottom: 0px;
}
</style>

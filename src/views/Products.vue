<template>
    <div class="products">
        <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
        >
            <template #content>
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
            </template>
        </van-tree-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{ text: '动物' }, { text: '食品' }],
            activeId: 1,
            activeIndex: 0,
        }
    },
}
</script>

<style lang="less" scoped>
.products {
    height: 100%;
}

.van-tree-select {
    height: 100% !important;
}
</style>
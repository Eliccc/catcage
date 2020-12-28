<template>
    <div class="login">
        <div class="logo login_item"><img src="@/assets/cib.svg" /></div>
        <div class="login_table login_item">
            <input class="input username" placeholder="请输入账户"></input>
            <!-- <div class="input password"></div> -->
        </div>
        <div class="login_btn">
            <van-button type="info" size="large" @click="login">登录</van-button>
        </div>
        <div class="ipv6">本应用不支持IPv6</div>
    </div>
</template>

<script>
export default {
    methods: {
        login(){
            this.$router.push('home')
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        width: 200px;
        margin-top: 100px;
    }

    .login_table {
        .input {
            width: 300px;
            height: 48px;
            border: 2px solid #c4c7ce;
            border-radius: 10px;

            &::-webkit-input-placeholder {
                text-indent: 10px;
                font-size: 16px;
                color: #e4e4e4;
            }
        }
    }

    .login_btn {
        width: 300px;
        position: absolute;
        bottom: 5rem;
    }

    .ipv6{
        position: absolute;
        bottom: 0;
        color: #e3e3e3;
    }
}
</style>

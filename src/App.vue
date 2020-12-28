<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view />
    </div>
</template>

<style lang="less">
*{
    padding: 0;
    margin: 0;
}
#app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    word-wrap: break-word;
    background: white;
}
</style>


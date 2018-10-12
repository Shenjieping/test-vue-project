<template>
    <div class="layout">
        <ul class="link clear">
            <li><router-link  to="/">柱状图</router-link></li>
            <li><router-link to="/pie">饼图</router-link></li>
            <li><router-link to="/height">代码高亮</router-link></li>
            <li><router-link to="/editor">编辑器</router-link></li>
            <li><router-link to="/notificat">消息推送</router-link></li>
            <li><router-link to="/viewer">图片展示</router-link></li>
        </ul>
        <div class="main-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout'
}
</script>
<style lang="less">
@import './../assets/global.less';
.layout {
    .link {
        line-height: 40px;
        width: 100%;
        li {
            float: left;
            padding: 0 20px
        }
    }
}
</style>

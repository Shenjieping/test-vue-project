<template>
    <div v-highlightjs>
        <div v-html="html"></div>
        <pre><code class="java">public class aa = {}</code></pre>
        <div
            v-long-press="longTap"
            class="test-tap"
            :class="{flag: flag}">测试长按</div>
    </div>
</template>
<script>
import longPress from '@/directive/longPress';

export default {
    name: 'Height',
    directives: {longPress},
    data() {
        return {
            html: `<pre><code class="javascript">
            const s = new Date().toString()
            function name() {
                console.log('123')
            }
            // 这是一条注释
            /*
                这是一条多行注释
            */
            </code></pre>`,
            flag: false
        }
    },
    methods: {
        longTap() {
            this.flag = true;
            console.log('长按');
        }
    }
}
</script>
<style lang="less">
.flag {
    color: #f66;
}
</style>


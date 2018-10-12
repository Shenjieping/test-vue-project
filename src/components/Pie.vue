<template>
    <div class="pie">
        <div id="main"></div>
        <div id="demo1"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    name: 'pie',
    mounted() {
        echarts.init(document.getElementById('main')).setOption({
            series: {
                type: 'pie',
                data: [
                    {name: 'A', value: 1212},
                    {name: 'B', value: 2323},
                    {name: 'C', value: 1919}
                ]
            }
        });
        var myChart1 = echarts.init(document.getElementById('demo1'));
        myChart1.setOption({
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    roseType: 'angle',
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ]
                }
            ]
        })
    }
}
</script>
<style lang="less">
.pie {
    #main {
        height: 400px;
        width: 600px;
    }
    #demo1 {
        height: 400px;
        width: 600px;
    }
}
</style>

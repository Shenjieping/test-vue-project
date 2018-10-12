<template>
    <div>
        <button @click="newNotification">点击</button>
    </div>
</template>
<script>
export default {
    name: 'Notification',
    data() {
        return {
            queryParams: {
                title: '一条新通知', // 显示标题
                body: '哈哈哈哈哈哈啊哈哈哈哈哈好啊', // 显示的主体内容
                icon: 'https://denzel.netlify.com/hero.png', // 显示图片的url
                badge: 'https://denzel.netlify.com/hero.png', // 图片的url，当桌面没有空间来展示该通知时，用来表示该通知的图标
                image: 'https://denzel.netlify.com/hero.png', // 一个图片的url，显示在通知文字下方
                silent: true, // 是否静音，默认为false
                sound: 'http://p8rbt50i2.bkt.clouddn.com/blogsmile.wav', // 声音文件的url，通知来时播放
                dir: 'rtl', // 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左）
                data: { // 与通知绑定的数据，可以是任意数据类型
                    time: new Date()
                },
                // vibrate: [200, 100, 200], // 通知时设备震动，数组，例如[200, 100, 200]表示设备震动200毫秒，然后停止100毫秒，再震动200毫秒
                requireInteraction: false, // 是否持续显示通知，true表示通知会一直显示而不会自动消失，直到用户点击或者关闭
            },
            time: '',
            msg: ''
        };
    },
    methods: {
        onConfirm () {
            if (!('Notification' in window)) {
                alert('您的浏览器不支持通知API');
                return;
            }

            this.msg = Notification.permission;
            //检查用户是否同意接受通知
            //用户已同意
            if (Notification.permission == "granted") {
                this.newNotification();
            //若没拒绝获取权限
            } else if (Notification.permission != "denied") {
                //向用户获取权限
                Notification.requestPermission((permission) => {
                    this.newNotification();
                });
            }
        },
        newNotification () {
            console.log('.....')
            // this.onConfirm();
            let notification = new Notification(this.queryParams.title, {
                ...this.queryParams
            });

            console.log(notification);

            //事件绑定
            notification.addEventListener('show', e => {
                console.log(e);
                this.$message.info('通知出现');
                this.time = notification.data.time.toLocaleTimeString();
            });


            notification.addEventListener('click', e => {
                console.log(e);
                this.$message.info('你点击了通知');
                // notification.close();
            });

            notification.addEventListener('close', e => {
                console.log(e);
                this.$message.info('你关闭了通知');
            });
        }
    },
    mounted() {
        this.onConfirm();
    },
}
</script>

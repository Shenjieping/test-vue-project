<template>
    <el-dialog
        title="插入代码"
        :visible.sync="codeVisibel"
        :before-close="close"
        class="code-dialog-box"
        width="600px">
        <div class="select-lang">
            <span class="title">编程语言：</span>
            <el-select v-model="language" placeholder="请选择">
                <el-option
                    v-for="(item, idx) in options"
                    :key="idx"
                    :label="item"
                    :value="item">
                </el-option>
            </el-select>
        </div>
        <div class="code-content">
            <div class="title">代码：</div>
            <el-input
                type="textarea"
                v-model="codeContent"></el-input>
        </div>
        <div class="footer">
            <el-button type="primary" @click="insertHandle">插入代码</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'InsertCode',
    data() {
        return {
            language: 'C',
            options: ['C', 'C++', 'C#', 'CSS', 'HTML', 'Java', 'JavaScript', 'Objective-C', 'Perl', 'PHP', 'Python', 'Ruby', 'XML'],
            codeContent: ''
        }
    },
    props: {
        codeVisibel: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('closeDialog', false);
        },
        insertHandle() {
            let text = `<pre v-highlightjs><code class="${this.language.toLowerCase()}">${this.codeContent}</code></pre>`;
            this.$emit('insertCode', text);
        }
    }
}
</script>
<style lang="less">
.code-dialog-box {
    .title {
        font-size: 14px;
        display: inline-block;
        vertical-align: top;
        width: 80px;
        text-align: right;
    }
    .select-lang {
        .el-input__inner {
            height: 28px;
            line-height: 28px;
        }
        .el-input__icon {
            line-height: 28px;
        }
    }
    .code-content {
        margin-top: 20px;
        .el-textarea {
            display: inline-block;
            vertical-align: top;
            width: 470px
        }
        .el-textarea__inner {
            width: 470px;
            resize: none;
            height: 200px
        }
    }
    .footer {
        margin-top: 20px;
        text-align: right;

    }
}
</style>


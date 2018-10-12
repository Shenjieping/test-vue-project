<template>
    <div v-highlightjs>
        <froala :config="config" v-model="editContent" id="edit"></froala>
        <div v-html="editContent"></div>
        <insert-code
            :codeVisibel="showDialog"
            v-if="showDialog"
            @closeDialog="closeDialog"
            @insertCode="insertCode"></insert-code>
    </div>
</template>
<script>
require('froala-editor/js/froala_editor.pkgd.min');
require('froala-editor/css/froala_editor.pkgd.min.css');
require('font-awesome/css/font-awesome.css');
require('froala-editor/css/froala_style.min.css');

require('froala-editor/js/languages/zh_cn.js');

import InsertCode from './InsertCode.vue';

export default {
    name: 'Editor',
    data() {
        return {
            config: {
                key: 'QF4B3D3A13hC7D6D5D5D2E3B2C6A6B7cODOe1HLEBFZOTGHW==',
                height: 380,
                width: 900,
                zIndex: 100,
                events: {
                    'froalaEditor.initialized': function () {
                        console.log('initialized');
                    },
                },
                language: 'zh_cn',
                fontFamily: {
                    'SimSun': '宋体',
                    'Microsoft YaHei': '微软雅黑',
                    'SimHei': '黑体',
                    'KaiTi': '楷体',
                    'Arial,Helvetica,sans-serif': 'Arial',
                    'Georgia,serif': 'Georgia',
                    'Impact,Charcoal,sans-serif': 'Impact',
                    'Tahoma,Geneva,sans-serif': 'Tahoma',
                    "'Times New Roman',Times,serif'": 'Times New Roman',
                    'Verdana,Geneva,sans-serif': 'Verdana'
                },
                fontSize: ['12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
                toolbarButtons: ['bold', 'italic', 'underline', 'fontFamily',
                'fontSize', 'color', 'align', 'formatOL', 'formatUL', 'insertImage',
                'insertVideo', 'insertLink', 'insertTable', 'code', '|', 'undo', 'redo', '|', 'html'],
                imageUploadURL: '',
                imageMaxSize: 1024 * 1024 * 5,
                imageAllowedTypes: ['jpeg','jpg', 'png', 'gif', 'bmp'],
                imageEditButtons:['imageAlign', 'imageRemove', 'imageDisplay', 'imageSize'],
                imageInsertButtons: ['imageBack', '|', 'imageUpload'],
                imageDefaultAlign: 'left',
                fontSizeDefaultSelection: '14',
                linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
                linkInsertButtons: ['linkBack'],
                shortcutsHint: false
            },
            editContent: '',
            documentTitle: '',
            showDialog: false,
            set: null
        }
    },
    components: {
        InsertCode
    },
    created() {
        let self = this;
        $.FroalaEditor.DefineIcon('code', {NAME: 'file-code-o'});
        $.FroalaEditor.RegisterCommand('code', {
            title: '插入代码',
            icon: 'code',
            undo: false,
            focus: false,
            refreshAfterCallback: true,
            callback: function() {
                self.set = this.html.insert;
                self.showDialog = true;
            }
        });
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
        },
        insertCode(value) {
            // $('#edit').froalaEditor('html.set', value);
            this.set(value);
            this.showDialog = false;
        }
    }
}
</script>
<style lang="less">
.fr-view pre {
    background-color: #f0f0f0;
    line-height: 1.5;
    border-radius: 6px;
    padding: 18px;
}
</style>


<template>
    <div class="sidebar" >
        <el-menu style="height:calc(100% - 10px);overflow: auto" :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'html',
                        title: 'HTML'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'css',
                        title: 'CSS',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'js',
                        title: 'JS',
                    },

                    {
                        icon: 'el-icon-setting',
                        index: 'jquery',
                        title: 'jQuery'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'ajax',
                        title: 'Ajax'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'algorithm',
                        title: '算法'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'es6',
                        title: 'ES6'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '1',
                        title: 'MVC系列',
                        subs: [
                            {
                                index: 'react',
                                title: 'React'
                            },
                            {
                                index: 'vue',
                                title: 'Vue'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'webpack',
                        title: '打包系列'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '2',
                        title: 'Node后端系列',
                        subs: [
                            {
                                index: 'node',
                                title: 'Node.js'
                            },
                            {
                                index: 'mongo',
                                title: 'MongoDB'
                            },
                            {
                                index: 'linux',
                                title: 'Linux'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '13',
                        title: '简历模板'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '14',
                        title: '前端插件网站 '
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 50px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>

<template>
    <div style="width: 80%">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> HTML</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <title-head></title-head>
        <title-page></title-page>
    </div>
</template>

<script>
    import TitlePage from './TitlePage.vue'
    import TitleHead from './TitleHead.vue'
    export default {
        data: function () {
            return {
            }
        },
        methods: {

        },
        components: {
            TitlePage,
            TitleHead
        }
    }
</script>

<style scoped>
    .el-collapse-item:hover {
        border-left: 2px solid red;
    }

    .el-collapse-item.is-active {
        border-left: 2px solid red;
    }


</style>

<template>
    <div style="width: 90%">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> HTML</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <title-head :page="pageInfo" @changePage="updateDate"></title-head>
        <title-page :titleData="title" :page="pageInfo"></title-page>
    </div>
</template>

<script>
    import TitlePage from './TitlePage.vue'
    import TitleHead from './TitleHead.vue'
    export default {
        data: function () {
            return {
                title: {},
                pageInfo: {
                    title_page: 1,
                    limit: 2,
                },

                titleData: ''
            }
        },
        created(){

            this.updateDate()
        },
        watch: {
            '$route': function (val) {
                this.updateDate()
            }
        },
        methods: {
            updateDate(){
                let titleType = this.$route.path.replace('/', '');

                let searchCon = {page: this.pageInfo.title_page, limit: this.pageInfo.limit, type: [titleType]};
                this.$axios.post('/typeTitles', searchCon).then(res => {
                    this.title = res.data
                })
            }

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

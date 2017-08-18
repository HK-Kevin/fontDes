<template>
    <div style="width: 90%">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> HTML</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <title-head :page="pageInfo"   @seeData ="getData" @updata="updateData" @changePage="updateData" @sortGet ="updateData"></title-head>
        <title-page :titleData="title" :page="pageInfo"></title-page>
    </div>
</template>

<script>
    import TitlePage from './TitlePage.vue'
    import TitleHead from './TitleHead.vue'
    import hljs from 'highlight.js'
    export default {
        data: function () {
            return {
                title: {a:1},
                pageInfo: {
                    title_page: 1,
                    limit: 4,
                },

                titleData: ''
            }
        },
        created(){
            this.updateData()
        },
        watch: {
            '$route': function (val) {
                this.pageInfo.title_page =1;
                this.updateData();
                this.$forceUpdate()
            }
        },
        mounted(){
            hljs.highlightCode();
        },
        methods: {
            getData(data){
              this.title = data
            },
            updateData(condition){
                let sortCondition = condition || '';
                let titleType = this.$route.path.replace('/', '');
                let searchCon = {page: this.pageInfo.title_page, limit: this.pageInfo.limit, type: [titleType],condition:sortCondition};
                this.$axios.post('/typeTitles', searchCon).then(res => {
                    this.title = res.data;

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

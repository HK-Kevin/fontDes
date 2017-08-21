<template>
    <div style="width: 80%">
        <el-form :inline="true" class="demo-form-inline" style="width: 100%">
            <el-form-item label="" style="width: 20%">
                <el-input placeholder="title" icon="search" v-model="searchData"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-select v-model="value" placeholder="排序条件" @change="sort" style="width: 110px">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-form-item label="">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page.title_page"
                    :page-size="200"
                    layout="prev, pager,    next, jumper"
                    :total="1000">
                </el-pagination>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        props: ['page'],
        data: function () {
            return {
                searchData: '',
                currentPage: 1,
                options: [{
                    value: 'titleClickTimes',
                    label: '火热度'
                }, {
                    value: 'important',
                    label: '重要度'
                }, {
                    value: 'hard',
                    label: '难度'
                }],
                value: ''
            }
        },
        methods: {
            handleSizeChange(val){

            },
            sort(condition){
                console.log(condition)
                this.$emit("sortGet",condition)
            },
            handleCurrentChange(val){
                this.page.title_page = val;
                this.$emit('changePage')
            },
            onSearch(){
                if (!this.searchData) {
                    this.$emit("updata");
                    return;
                }
                let titleType = this.$route.path.replace('/', '');
                this.$axios.get(`/search?title=${this.searchData}&type=${titleType}`).then(res => {
                    this.$emit("seeData",res.data)
                })
            }
        },
        components: {}
    }
</script>

<style scoped>


</style>

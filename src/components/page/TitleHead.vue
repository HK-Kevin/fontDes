<template>
    <div style="width: 80%">

        <el-form :inline="true"  class="demo-form-inline" style="width: 100%">
            <el-form-item label="" style="width: 20%">
                <el-input  placeholder="title" icon="search"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-select v-model="value" placeholder="排序条件">
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
                    :current-page.sync="currentPage"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                currentPage:1,
                options: [{
                    value: '选项1',
                    label: '火热度'
                }, {
                    value: '选项2',
                    label: '重要度'
                }, {
                    value: '选项3',
                    label: '难度'
                }],
                value: ''
            }
        },
        methods:{
            handleSizeChange(){

            },
            handleCurrentChange(){

            },
            onSubmit(){

            }
        },
        components:{
        }
    }
</script>

<style scoped>


</style>

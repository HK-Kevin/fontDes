<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item v-for="(item,index) in titleData">
                <template slot="title">
                    <el-form :inline="true" style="width: 90%;display: inline-block"  class="demo-form-inline">
                        <el-form-item style="width: 70%;font-size: 18px" label="">{{index+titleNum}}. {{item.title}}
                        </el-form-item>
                        <el-form-item style="width: 20%" label="">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                        </el-form-item>
                        <el-form-item style="width: 1%">
                            <el-tag type="danger" style="">{{item.titleClickTimes}}</el-tag>
                        </el-form-item>
                    </el-form>
                </template>
                <div v-html="item.answer"></div>
                <el-col :span="6" :offset="18">
                    <el-button type="primary" size="small" icon="el-icon-d-arrow-right">进入详情</el-button>
                </el-col>

            </el-collapse-item>


        </el-collapse>
    </div>
</template>

<script>
    export default {
        props:['titleData','page'],
        data: function () {
            return {

            }
        },
        computed:{
            titleNum(){
                return this.page.title_page*this.page.limit-1
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    .el-collapse-item:hover{
        border-left:2px solid red;
    }
    .el-collapse-item.is-active{
        border-left:2px solid red;
    }


</style>

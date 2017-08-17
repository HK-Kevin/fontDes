<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <el-form :inline="true" style="width: 90%;display: inline-block"  class="demo-form-inline">
                        <el-form-item style="width: 70%" label="">
                            1. 一致性 Consistency
                        </el-form-item>
                        <el-form-item style="width: 20%" label="">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                        </el-form-item>
                        <el-form-item style="width: 1%">
                            <el-tag type="danger" style="">9999</el-tag>
                        </el-form-item>
                    </el-form>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                <el-col :span="6" :offset="18">
                    <el-button type="primary" size="small" icon="el-icon-d-arrow-right">进入详情</el-button>
                </el-col>

            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <el-form :inline="true" style="width: 90%;display: inline-block"  class="demo-form-inline">
                        <el-form-item style="width: 70%" label="">
                            2. 一致性 Consistency
                        </el-form-item>
                        <el-form-item style="width: 20%" label="">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-star-on"></i>
                        </el-form-item>
                        <el-form-item style="width: 1%">
                            <el-tag type="danger" style="">9999</el-tag>
                        </el-form-item>
                    </el-form>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                <el-col :span="6" :offset="18">
                    <el-button type="primary" size="small" icon="el-icon-d-arrow-right">进入详情</el-button>
                </el-col>

            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
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

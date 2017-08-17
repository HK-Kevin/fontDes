<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <el-form :inline="true" style="width: 90%;display: inline-block"  class="demo-form-inline">
                        <el-form-item style="width: 80%" label="">
                            1. 一致性 Consistency
                        </el-form-item>
                        <el-form-item style="width: 14%" label="">
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
            return {}
        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }

    .ms-doc h3 {
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }

    .ms-doc article {
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .ms-doc article h1 {
        font-size: 32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }

    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }

    .ms-doc article p {
        margin-bottom: 15px;
        line-height: 1.5;
    }

    .ms-doc article .el-checkbox {
        margin-bottom: 5px;
    }
</style>

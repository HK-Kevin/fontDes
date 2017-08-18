<template>
    <div>
        <el-collapse accordion @change="userClick">
            <el-collapse-item v-for="(item,index) in titleData"  :key="index" :name="item._id">
                <template slot="title">
                    <el-form :inline="true" style="width: 90%;display: inline-block" class="demo-form-inline">
                        <el-form-item style="width: 70%;font-size: 18px" label="">{{index + titleNum}}. {{item.title}}


                        </el-form-item>
                        <el-form-item style="width: 20%" label="">
                            <i class="el-icon-star-on" v-for="n in item.hard" :key="n"></i>
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
    import hljs from 'highlight.js'
    export default {
        props: ['titleData', 'page'],
        data: function () {
            return {
                number: 0
            }
        },
        computed: {
            titleNum(){
                return (this.page.title_page-1) * this.page.limit +1
            }
        },
        methods: {
            userClick(id){
                hljs.highlightCode();
                if (!id)return;
                this.$axios.get(`/addClick?id=${id}`, function (data) {
                    this.number = 1;
                    this.$forceUpdate();
                })
            }
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

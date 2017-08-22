<template>
    <div style="width: 80%">
        <div>
            <div class="title">
                {{form.title}}
            </div>
            <hr>
            <div style="border-bottom: 2px solid #00d1b2;margin: 20px 0;padding-bottom: 5px;color: #7ac4ab">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">重要度:<i class="el-icon-star-on"
                                                                   v-for="n in form.hard"
                                                                   :key="n"></i></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">难度:
                            <i class="el-icon-edit" v-for="n in form.hard" :key="n"></i></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-tag type="success" v-for="(item,index) in form.company" :key="index">{{item}}</el-tag>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <el-tag type="success" v-for="(item,index) in form.type" :key="index">{{item}}</el-tag>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <h4 style="color: #25bb9b">参考答案</h4>
            <div class="answer"  v-html="form.answer">
            </div>
        </div>
        <title-list :listData="allTypeTitle" @update="updateListData" style="position: fixed;right: 0;top: 70px;width: 15%"></title-list>
    </div>
</template>

<script>
    import TitleList from './TitleList.vue'
    import hljs from 'highlight.js'
    export default {
        props: [''],
        data: function () {
            return {
                form: {},
                allTypeTitle: {}
            }
        },
        created(){
            this.getData()
        },
        methods: {
            updateListData(id){
                this.getData(id)
            },
            getData(bId){
                let id = bId || this.$route.query.id;
                this.$axios.get(`/oneTitle?id=${id}`).then(res => {
                    this.form = res.data;
                    hljs.highlightCode();
                    let searchCon = {page: 1, limit: 999, type: this.form.type};
                    this.$axios.post('/typeTitles', searchCon).then(res => {
                        this.allTypeTitle = res.data;
                    })
                });
            }
        },
        components: {TitleList}
    }
</script>

<style scoped>
    .answer {
        background-color: #d3f4e4;
        border-radius: 5px;
        margin-top: 15px;
    }

    .title {
        /* background-color: #33dac1;*/
        color: #7d7d7d;
        font-size: 20px;
        padding: 3px 4px;
    }
</style>

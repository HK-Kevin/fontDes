<template>
    <div  style="height: calc(100% - 30px);overflow: auto">
        <el-button @click="changeDisplay"><i class="el-icon-setting"></i>点击</el-button>
        <el-collapse-transition>
        <el-card   v-if="flag" class="box-card">
            <div v-for="(item,index) in listData" :key="index" class="text item">
                <el-button v-if="item._id==id" :plain="true" :style="activeObj" @click="goToDetail(item._id)" type="success">{{index+1}}. {{item.title}}
                </el-button>
                <el-button v-else :plain="true" :class="{ activeObj: isActive }" @click="goToDetail(item._id)" type="success">{{index+1}}. {{item.title}}
                </el-button>
            </div>
        </el-card>
        </el-collapse-transition>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    export default {
        props: ['listData'],
        data: function () {
            return {
                id: '',
                flag:true,
                activeObj: {
                    borderColor: "#13ce66",
                    color: "#13ce66"
                },
            }
        },
        created(){
            this.id = this.$route.query.id
        },
        mounted(){

        },
        methods: {
            changeDisplay(){
                this.flag = !this.flag;
            },
            goToDetail(bId){
                this.$router.push(`/detail?id=${bId}`);
                this.$emit('update', bId);
                this.id = this.$route.query.id
            }
        }
    }
</script>

<style scoped>
    .text {
        margin: 5px 0;
    }

</style>

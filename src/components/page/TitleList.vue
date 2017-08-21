<template>
    <div style="">

        <el-card class="box-card">
            <div v-for="(item,index) in listData" :key="index" class="text item">
                <el-button v-if="item._id==id" :plain="true" :style="activeObj" @click="goToDetail(item._id)" type="success">{{index+1}}. {{item.title}}
                </el-button>
                <el-button v-else :plain="true" :class="{ activeObj: isActive }" @click="goToDetail(item._id)" type="success">{{index+1}}. {{item.title}}
                </el-button>

            </div>
        </el-card>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    export default {
        props: ['listData'],
        data: function () {
            return {
                id: '',
                activeObj: {
                    borderColor: "#13ce66",
                    color: "#13ce66"
                },
            }
        },
        created(){
            this.id = this.$route.query.id
        },
        methods: {
            goToDetail(bId){
                this.$emit('update', bId)
                this.$forceUpdate()

            }
        }
    }
</script>

<style scoped>
    .text {
        margin: 5px 0;
    }

</style>

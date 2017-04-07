<template>
    <div class="sender-home">
        <div class="panel panel-default" style="padding: 10px;">
            <img src="imgs/logo.png" alt="" class="">
            <span class="name">您好&nbsp;&nbsp;&nbsp;&nbsp;张三</span>
        </div>
        <div class="panel panel-default" style="padding: 10px;">
            <div class="bs-example" data-example-id="panel-without-body-with-table">
                <div class="panel panel-default">
                    <!-- Default panel contents -->
                    <div class="panel-heading">
                        <button type="button" class="btn btn-primary">上传</button>
                    </div>

                    <!-- Table -->
                    <table class="table">
                        <thead>
                        <tr>
                            <th>序号</th>
                            <th>主题</th>
                            <th>安全等级</th>
                            <th>创建人</th>
                            <th>创建时间</th>
                            <th>发布时间</th>
                            <th>文档状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in list">
                            <th scope="row">{{index}}</th>
                            <td>{{item.subject}}</td>
                            <td>{{item.secLevel}}</td>
                            <td>{{item.creater}}</td>
                            <td>{{item.cDate}}</td>
                            <td>{{item.sDate}}</td>
                            <td>{{item.status}}</td>
                            <td>
                                <button v-if="(item.status=='草稿'||item.status=='不通过')" type="button" class="btn btn-danger">删除</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="page-btns">
                <button type="button" class="btn btn-default page-btn">上一页</button>
                <div class="page-text">第10页</div>
                <button type="button" class="btn btn-default page-btn" disabled>下一页</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default{

        mounted(){

        },
        data(){
            return {
                list: [],
            }
        },
        methods:{
            getSenderList: function () {
                var _this = this;

                axios.post('datas/sender_home.json', {
                            index: 1,
                            pageSize: 50,
                            token:"token"
                        })
                        .then(function (res) {
                            var response = res.data;
                            console.log(response);
                            if(response.errorCode == 200) {
                                _this.list = response.result.subinfos;
                            } else {
                                console.log(response.msg);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        },
        mounted: function () {
            this.$nextTick(function() {
                this.getSenderList();
            });
        },
        components:{

        }
    }
</script>

<style>
    .sender-home img{
        height: 65px;
    }
    .sender-home .name{
        line-height: 65px;
        float: right;
    }
    .sender-home tr {
        height: 51px;
    }
    .sender-home td, .sender-home th {
        line-height: 51px !important;
    }
    .page-text {
        width: 70px;
        display: inline-block;
        text-align: center;
    }
    .page-btns {
        margin-left: calc(50% - 189px);
        display: inline-block;
        width: 378px;
    }
    .page-btn {
        width: 150px;
    }

</style>

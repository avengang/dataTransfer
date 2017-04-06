/**
 * Created by Administrator on 2017/4/6 0006.
 */
var vm = new Vue({
    el: "#app",
    data: {
        name: "",
        list: []
    },
    methods: {
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
    filters: {
        
    }
});
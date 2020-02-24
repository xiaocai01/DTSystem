<template>
  <div class="view-page">
    <h1 style="text-align: center;">登录</h1>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="formData.name" required placeholder="请输入姓名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="formData.number" required placeholder="请输入学号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="isLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $ from 'jquery';
import Cookies from 'js-cookie';

export default {
  name: 'login',
  data() {
    return {
      formData: {
        name: '',
        number: ''
      },
      flag: true,
      layer: null
    }
  },
  methods: {
    isLogin(){
      const self = this;
      if(!self.formData.name || !self.formData.number){
        return false;
      }
      if(self.flag){
        self.flag = false;
        $.ajax({
          type: 'POST',
          url: '/api/addUser',
          dataType: 'JSON',
          data: {
            name: self.formData.name,
            number: self.formData.number
          },
          success(d) {
            console.log(d);
            self.flag = true;
            if(d.code === 0){
              var data = d.data;
              self.$alert('登陆成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  Object.keys(data[0]).forEach(v => {
                    Cookies.set(v, data[0][v], { path: '/' });
                  });
                  self.$router.replace('/');
                }
              });
            }else{
              // self.layer.open({
              //   title: '提示',
              //   content: d.msg
              // });
            }
          },
          error(err) {
            self.flag = true;
            console.log(err);
          }
        })
      }
    },
    getUserId() {
      const self = this;
      $.ajax({
        type: 'GET',
        url: '/api/getUserId',
        dataType: 'JSON',
        data: {
          name: self.formData.name,
          number: self.formData.number
        },
        success(d) {
          console.log('userId');
          console.log(d);
        },
        error(err) {
          console.log(err);
        }
      })
    }
  },
  beforeDestroy() {
    this.getUserId();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

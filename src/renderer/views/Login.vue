<template>
  <div class="login_container">
    <div class="login_box">
      <el-alert
        title="用户名或密码错误"
        type="error"
        show-icon
        class="message"
        v-show = isShow >
      </el-alert>
      <!-- 登录表单区域 -->
      <el-form size="mini">
        <span class="title">登录</span>
        <!-- 用户名 -->
        <el-form-item>
          <el-input
          type="text"
          placeholder="用户名"
          prefix-icon="el-icon-user"
          v-model="username">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            type="password"
            placeholder="密码"
            prefix-icon="el-icon-goods"
            v-model="password"
            @keyup.enter.native="loginBtn">
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="loginBtn">登录</el-button>
        </el-form-item>
      </el-form>
        
      
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isShow: false
    };
  },
  methods: {
    loginBtn() {
      if (this.username === 'admin' && this.password === '123456') {
        this.$router.replace('/home');
      } else {
        this.isShow = true;
      }
    }
  }
};

</script>

<style>
.login_container {
  /* background-image: url("~/static/imgs/login_bg.png"); */
  background-image: url("../../assets/images/login_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.login_box {
  width: 400px;
  height: 330px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  /* opacity: 0.3; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.el-form {
  padding: 76px;
  position: absolute;
  top: -22px;
  line-height: 60px;
  width: 100%;
  box-sizing: border-box;
}
.title{
  color: rgb(255, 255, 255);
  font-family: 'Courier New', Courier, monospace;
  font-size: 25px; 
}
.el-button {
  width: 100%;
  border-radius: 20px;
  color: #FFFFFF;
}
span{
  color: #FFFFFF;
}
.message{
  width: 90%;
  margin-left: 5%;
  margin-top: 5px;
}
</style>
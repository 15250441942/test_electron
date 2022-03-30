<template>
  <form class="forms" v-if="isShow">
    <div class="forms-item">
      <span class="icons" :style="{color:'red',marginRight:'0'}">*</span>
      <span>IP地址</span><input placeholder="请输入"/>
    </div>
    <div class="forms-item">
      <span class="icons" :style="{color:'red',marginRight:'0'}">*</span>
      <span>端口</span><input placeholder="请输入"/>
    </div>
    <div class="forms-item">
      <span class="icons" :style="{color:'red',marginRight:'0'}">*</span>
      <span>Token</span><input placeholder="请输入"/>
    </div>
    <div class="forms-item" id="forms-item">
      <button class="save" @click="save">保存</button>
      <button class="cancel" @click="cancel">取消</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    open() {
      this.isShow = true;
    },
    cancel() {
      this.isShow = false;
    },
    save() {

    }
  }
};
</script>

<style>
  .forms{
    width: 320px;
    height: 180px;
    background: #FFFFFF;
    float: right;
    margin-top: 20px;
    border-radius: 5px;
    
  }
  .forms span{
    font-family: "PingFangSC-Regular", sans-serif;
    font-size: 13px;
    color: rgb(22, 22, 22);
    margin-right: 10px;
  }
  .forms-item{
    float: right;
    margin-top: 15px;
    margin-right: 25px;
    /* margin-bottom: 5px; */
  }
  #forms-item{
    margin-right: 126px;
  }
  .forms-item input{
    width: 220px;
    height: 20px;
    /* border: 1px soild #a3c8ec; */
  }
  .save,.cancel{
    width: 60px;
    height: 20px;
    border-radius: 5px;
    /* margin-right: 50px; */
  }
  .save{
    background: #409eff;
    color: #FFFFFF;
  }
 
</style>
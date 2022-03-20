<template>
  <div class="layout">
    <div class="slide-left">
      <ul class="app-list">
        <li
            class="list-item"
            v-for="(item, index) in leftList"
            :key="index"
            @click="handleToOpenWindow(item)"
          >
            <a href="javascript:void(0)"><img :src="item.src" /></a>
            <span>{{ item.label }}</span>
          </li>
        
      </ul>
    </div>
    <div class="content">
      <div class="demo-input-suffix">
        <el-input placeholder="全局搜索"  v-model="input" >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="slide-right">
      <ul class="list-right">
        <li id="items" class="items">
          <i class="el-icon-message"></i>王小明给您发来了一条信息
        </li>
        <li class="items" :style="{ borderRadius: '20px 20px 10px 10px' }">
          <p
            :style="{
              background: '#F05656',
              height: '45px',
              borderRadius: '20px 20px 0 0',
            }"
            class="errors"
          >
            <span><img src="../../assets/images/异常.png" :style="{marginTop:'15px',marginLeft:'5px'}">异常处理</span>
          </p>
        </li>
        <li class="items" :style="{ borderRadius: '20px 20px 10px 10px' }">
          <p
            :style="{
              background: '#3090F0',
              height: '45px',
              borderRadius: '20px 20px 0 0',
            }"
            class="my-waiting"
          >
            <span><img src="../../assets/images/我的待办.png" :style="{marginTop:'15px',marginLeft:'5px'}">我的待办</span>
          </p>
        </li>
        <li class="items">
          <p id="main" :style="{width:'22vw',height:'23vh',marginLeft:'0.9vw'}"></p>
        </li>
        <li class="items" id="right-five">
          <p class="three-icons">
            <span><img src="../../assets/images/进行.png"></span>
            <span :style="{marginRight:'2.8vw',marginLeft:'2.8vw'}"><img src="../../assets/images/编组 7.png"></span>
            <span><img src="../../assets/images/编组 8.png"></span>
          </p>
          <p class="three-titles" :style="{marginLeft:'1vw'}">
            <span :style="{marginRight:'1.8vw'}">进行中</span>
            <span>生产中</span>
            <span :style="{marginLeft:'1.8vw'}">维护中</span>
          </p>
          <p class="three-numbers" :style="{marginLeft:'6px'}">
            <span :style="{marginRight:'3.5vw'}">58</span>
            <span>42</span>
            <span :style="{marginLeft:'3.5vw'}">169</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="container">
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="handleToOpenWindow(item)"
          >
            <span>{{ item.label }}</span>
            <a href="javascript:void(0)"><img :src="item.src" /></a>
          </li>
        </ul>
      </div>
    </div>
    <VueWindowComp :ref="`viewWindowRef_BI`" />
    <!-- <VueWindowComp :ref="`viewWindowRef_Codde`" />
    <VueWindowComp :ref="`viewWindowRef_MES`" />
    <VueWindowComp :ref="`viewWindowRef_PDCA`" /> -->
  </div>
</template>

<script>
import VueWindowComp from "../components/VueWindowComp";
const menuList = require("../../menu.config.json");
const leftList = require("../../left.config.json");
export default {
  data() {
    return {
      input: "",
      menuList,
      vueWindowRefs: {},
      leftList,
    };
  },
  components: {
    VueWindowComp,
  },
  mounted() {
    this.myecharts();
  },
  methods: {
    getVueWindowComp() {
      return {
        render(h) {
          return h("font", {}, "hello world");
        },
      };
    },
    handleOnRef(item) {
      return (refInstance) => {
        this.vueWindowRefs[item.label] = refInstance;
      };
    },
    openCodde() {
      this.$router.replace("/about");
    },
    handleToOpenWindow(item) {
      this.$refs.viewWindowRef_BI._open(item);
      // this.$refs[`viewWindowRef_${item.label}`]._open(item);
    },
    open() {
      this.$refs.viewWindowRef_BI._open(item);
    },
    myecharts() {
      const myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      const option = {
        // title: {

        // },
        // tooltip: {},
        // legend: {
        //   orient: 'horizontal',
        //   icon: 'circle',

        // },
        grid: {
          top: '12%',
          right: '7%'
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
          type: 'value',

          min: 0,
          max: 600,
          // interval: 100
        },
        series: [
          {
            data: [560, 430, 100, 220, 280, 160],
            type: 'line',
            stack: 'x',
            smooth: true
          },
          {
            data: [590, 450, 360, 200, 80, 240],
            type: 'line',
            stack: 'x',
            smooth: true
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.layout {
  background-image: url(../../assets/images/de_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
/* 左侧部分 */
.slide-left {
  height: calc(100vh - 1vh);
  width: 15vw;
  overflow: hidden;
}
.app-list {
  display: flex;
  height: 80vh;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-left: 1vw;
  list-style: none;
}
.app-list .list-item {
  width: 4.5vw;
  margin-top: 2.5vh;
  margin-left: 2.5vw;
  cursor: pointer;
}
.app-list .list-item img {
  width: 100%;
  border-radius: 5px;
  height: 6.5vh;
}
.app-list .list-item span {
  display: block;
  line-height: 2vh;
  text-align: center;
  /* background: rgba(0, 0, 0, 0.2); */
  border-radius: 18px;
  margin-top: 0.8vh;
  font-size: 12px;
  color: #ffffff;
}
/* 中间部分 */
.content {
  width: 35vw;
  height: 5vh;
  position: fixed;
  top: -88vh;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  /* background: #1e1e1e; */
}
.demo-input-suffix {
  text-align: center;
  opacity: 10%;
}
.text {
  font-size: 12px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* 右侧部分 */
.slide-right {
  position: absolute;
  top: 2vh;
  right: 1.5vw;
  height: 80vh;
}

.items {
  width: 22vw;
  height: 18vh;
  margin-top: 1vh;
  list-style-type: none;
  background: #1e1e1e;
  border-radius: 10px;
  opacity: 90%;
}

#items {
  height: 10vh;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-family: "宋体";
}

#right-five{
  text-align: center;
}
.three-icons span img{
  margin-top: 1.8vh;
  width: 10%;
  height: 20%;
}
.three-titles{
  color: #fff;
  font-family: 'PingFangSC-Semibold', sans-serif;
}
.three-numbers{
  font-size: 18px;
  color: #fff;
  font-family: 'PingFangSC-Semibold', sans-serif;
}
.errors span,.my-waiting span{
  color: #fff;
  font-family: 'PingFangSC-Regular', sans-serif;
}

/* 底部 */
.footer {
  position: fixed;
  bottom: 0;
  left: calc(50% - 15vw);
  width: 30vw;
  padding: 1.6vw 0;
  /* background: rgba(255, 255, 255, 0.5); */
  border-radius: 10px 10px 0 0;
  text-align: center;
}
.footer .container {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.footer li {
  list-style-type: none;
  display: inline-block;
  position: relative;
  margin-left: 2vw;
  margin-bottom: 1.5vh;
}
.footer li img {
  width: 4vw;
  height: 5.6vh;
  border-radius: 5px;
}
.container li span {
  display: block;
  position: absolute;
  bottom: -2vh;
  left: 0;
  width: calc(100% + 2vw);
  margin-left: -0.9vw;
  
  padding: 0.4vw 0;
  border-radius: 7px;
  color: #fff;
  font-size: 12px;
}
</style>
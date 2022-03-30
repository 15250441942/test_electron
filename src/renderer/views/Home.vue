<template>
  <div class="layout" ref="layoutRef" :style="{width:'100%',height:'100%'}">
    <div class="slide-left">
      <div class="app-list">
        <div
          class="list-item"
          v-for="(item, index) in leftList"
          :key="index"
          @click="openDragResize(item)"
        >
          <a href="javascript:void(0)"><img :src="item.src" /></a>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="demo-input-suffix">
        <el-input
          placeholder="全局搜索"
          v-model="input"
          prefix-icon="el-icon-search"
        >
        </el-input>
      </div>
    </div>
    <div class="slide-right">
      <ul class="list-right">
        <li id="items" class="items">
          <span
            ><img
              src="../../assets/images/8.png"
              :style="{
                height: '20px',
                width: '20px',
                marginTop: '15px',
                marginLeft: '10px',
              }"
          /></span>
          <span
            :style="{
              position: 'absolute',
              marginTop: '15px',
              marginLeft: '-2px',
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '13px',
              marginLeft: '10px',
            }"
            >王小明</span
          >
          <span
            :style="{
              float: 'right',
              marginTop: '15px',
              marginRight: '10px',
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '13px',
            }"
            >5分钟前</span
          >
          <p
            :style="{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '3px',
            }"
          >
            我有一个紧急任务暂时没时间做，您能帮我处理一下么？
          </p>
        </li>
        <li class="items" :style="{ borderRadius: '20pxx' }">
          <p
            :style="{
              background: '#F05656',
              height: '40px',
              borderRadius: '20px 20px 0 0',
            }"
            class="errors"
          >
            <span
              ><img
                src="../../assets/images/异常.png"
                :style="{
                  marginTop: '10px',
                  marginLeft: '10px',
                  height: '20px',
                }"
            /></span>
            <span
              :style="{
                position: 'absolute',
                marginLeft: '6px',
                fontSize: '15px',
                marginTop: '9px',
              }"
              >异常处理</span
            >
          </p>
          <p class="tasks">工单数据导入异常</p>
          <p
            class="tasks"
            :style="{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)' }"
          >
            工单数据导入时出现异常，无法解决，及时处理>>
          </p>
          <hr
            :style="{
              height: '1px',
              border: 'none',
              width: '290px',
              background: 'rgba(255, 255, 255, 0.1)',
              opacity: '0.9',
            }"
          />
          <p class="tasks">表单工作流未能及时处理提醒</p>
          <p
            class="tasks"
            :style="{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)' }"
          >
            表单工作流未能及时处理，已做升级处理，请前往查看>>
          </p>
          <hr
            :style="{
              height: '1px',
              border: 'none',
              width: '290px',
              background: 'rgba(255, 255, 255, 0.1)',
              opacity: '0.9',
            }"
          />
        </li>
        <li class="items" :style="{ borderRadius: '20px' }">
          <p
            :style="{
              background: '#3090F0',
              height: '40px',
              borderRadius: '20px 20px 0 0',
            }"
            class="my-waiting"
          >
            <span
              ><img
                src="../../assets/images/我的待办.png"
                :style="{
                  marginTop: '10px',
                  marginLeft: '10px',
                  height: '20px',
                }"
            /></span>
            <span
              :style="{
                position: 'absolute',
                marginLeft: '6px',
                fontSize: '15px',
                marginTop: '9px',
              }"
              >我的待办</span
            >
          </p>
          <p class="tasks">点检任务</p>
          <p
            class="tasks"
            :style="{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)' }"
          >
            您有2条任务需要处理，前往处理>>
          </p>
          <hr
            :style="{
              height: '1px',
              border: 'none',
              width: '290px',
              background: 'rgba(255, 255, 255, 0.1)',
              opacity: '0.9',
            }"
          />
          <p class="tasks">采购单审批条件</p>
          <p
            class="tasks"
            :style="{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)' }"
          >
            您有1个采购单需要审批，前往处理>>
          </p>
          <hr
            :style="{
              height: '1px',
              border: 'none',
              width: '290px',
              background: 'rgba(255, 255, 255, 0.1)',
              opacity: '0.9',
            }"
          />
        </li>
        <li class="items">
          <p
            id="main"
            :style="{ width: '300px', height: '200px', marginLeft: '9px' }"
          ></p>
          <!-- <webview src="http://192.168.0.18:3000/bi/share/link/abf3f51e-6504-48a4-a3b9-7693288803bb?responsive=false&fullScreen=true" :style="{ width: '300px', height: '200px', marginLeft: '9px' }"></webview> -->
        </li>
        <li class="items" id="right-five" :style="{ opacity: '0.81' }">
          <p class="three-icons">
            <span><img src="../../assets/images/进行.png" /></span>
            <span :style="{ marginRight: '2.8vw', marginLeft: '2.8vw' }"
              ><img src="../../assets/images/编组 7.png"
            /></span>
            <span><img src="../../assets/images/编组 8.png" /></span>
          </p>
          <p class="three-titles" :style="{ marginLeft: '0.2vw' }">
            <span :style="{ marginRight: '1.7vw' }">进行中</span>
            <span>生产中</span>
            <span :style="{ marginLeft: '1.7vw' }">维护中</span>
          </p>
          <p class="three-numbers" :style="{ marginLeft: '6px' }">
            <span :style="{ marginRight: '3.5vw' }">58</span>
            <span>42</span>
            <span :style="{ marginLeft: '3.5vw' }">169</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="container" :style="{width:'350px', marginTop:'-12px'}">
        <ul :style="{ paddingLeft: '0'}">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="openDragResize(item)"
          >
            <!-- @click="handleToOpenWindow(item)"  -->
            <!-- <span>{{ item.label }}</span> -->
            <a href="javascript:void(0)" ><img :src="item.src"/></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <VueWindowComp
      :ref="`viewWindowRef_BI`"
      :width="width - 50"
      :height="height - 100"
    /> -->
    
    <VueResize
      v-for="(item, index) in menuList"
      :key="index"
      :activeId="activeCompId"
      @active-change="($event) => (activeCompId = $event)"
      :ref="`reSize_${item.label}`"
    ></VueResize>
    <VueResize
      v-for="(item, index) in leftList"
      :key="index"
      :activeId="activeCompId"
      @active-change="($event) => (activeCompId = $event)"
      :ref="`reSize_${item.label}`"
    ></VueResize>
  </div>
</template>

<script>
// import axios from "axios";
import elementResizeEvent from "element-resize-event";
import VueWindowComp from "../components/VueWindowComp";
import VueResize from "../components/VueResize";
import Test from "../service/test";
const menuList = require("../../menu.config.json");
const leftList = require("../../left.config.json");
export default {
  data() {
    return {
      input: "",
      menuList,
      width: 0,
      activeCompId: "",
      height: 0,
      vueWindowRefs: {},
      leftList,
      i: 0,
      isShow: false,
    };
  },
  components: {
    VueWindowComp,
    VueResize,
  },
  mounted() {
    this.registerEvent();
    this._resize();
    this.myecharts();
    this.handleInfo();
  },
  methods: {
    handleInfo() {
      Test.getAbc('/lck-service/leansight/idoos/api/multi/1036').then((res) => {
        console.log('res :>> ', res);
      });
    },
    registerEvent() {
      elementResizeEvent(this.$refs.layoutRef, this._resize);
    },
    _resize() {
      const { clientWidth, clientHeight } = this.$refs.layoutRef;
      this.width = clientWidth;
      this.height = clientHeight;
    },
    openDragResize(item) {
      console.log("this.$refs.reSize :>> ", this.$refs);
      console.log("... :>> ", this.$refs[`reSize_${item.label}`]);
      this.$refs[`reSize_${item.label}`][0].open(item);
    },
    handleToOpenWindow(item) {
      this.$refs.viewWindowRef_BI._open(item);
      // this.$refs[`viewWindowRef_${item.label}`]._open(item);
    },
    myecharts() {
      const myChart = this.$echarts.init(document.getElementById("main"));
      const option = {
        grid: {
          top: "20px",
          right: "20px",
        },
        xAxis: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        },
        yAxis: {
          type: "value",

          min: 0,
          max: 600,
          // interval: 100
        },
        series: [
          {
            data: [560, 430, 100, 220, 280, 160],
            type: "line",
            stack: "x",
            smooth: true,
          },
          {
            data: [590, 450, 360, 200, 80, 240],
            type: "line",
            stack: "x",
            smooth: true,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 97px;
  padding: 45px 10px 10px 30px;
  width: 160px;
  max-height: 100vh;
  overflow: auto;
  max-width: calc(100vw - 200px);
  min-width: 160px;

  img {
    width: 60px;
    height: 60px;
  }
  span {
    width: 60px;
    font-size: 12px;
    display: block;
    line-height: 20px;
    text-align: center;
  }
}

/* 中间部分 */
.content {
  width: 38vw;
  height: 6vh;
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
  font-size: 17px;
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
  height: 800px;
}

.items {
  width: 320px;
  height: 160px;
  margin-top: 1vh;
  list-style-type: none;
  background: #1e1e1e;
  border-radius: 10px;
  opacity: 90%;
}

#items {
  height: 90px;
  color: #ffffff;
  font-size: 13px;
  font-family: "PingFangSC-Regular", sans-serif;
}

#right-five {
  text-align: center;
}
.three-icons span img {
  margin-top: 1.8vh;
  width: 10%;
  height: 20%;
}
.three-titles {
  color: #fff;
  font-family: "PingFangSC-Semibold", sans-serif;
}
.three-numbers {
  font-size: 18px;
  color: #fff;
  font-family: "PingFangSC-Semibold", sans-serif;
}
.errors span,
.my-waiting span {
  color: #fff;
  font-family: "PingFangSC-Regular", sans-serif;
}
.tasks {
  color: #fff;
  font-family: "PingFangSC-Regular", sans-serif;
  font-size: 13px;
  line-height: 1vh;
  margin-left: 1vw;
}
/* 底部 */
.footer {
  position: fixed;
  bottom: 2px;
  left: calc(50vw - 400px);
  width: 800px;
  height: 70px;
  /* padding: 6px 0; */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  /* text-align: center; */
}
.footer .container {
  width: 100%;
  text-align: center;
  /* margin: 0 auto; */
}

.footer li {
  list-style-type: none;
  display: inline-block;
  margin-left: 20px;
  /* margin-bottom: 5px; */
  /* margin-top: -10px; */
}
.footer li img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
/* .container li span {
  display: block;
  position: absolute;
  bottom: -2vh;
  left: 0;
  width: calc(100% + 20px);
  margin-left: -9px;
  padding: 4px 0;
  border-radius: 7px;
  color: #fff;
  font-size: 12px;
} */
</style>

<style>
body {
  background-image: url("../../assets/images/de_bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.el-input__inner {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  border: none;
  color: #ffffff;
  font-family: "PingFangSC-Regular", sans-serif;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
}
.container{
  border-right: 1px solid rgb(76, 73, 73);
}
</style>
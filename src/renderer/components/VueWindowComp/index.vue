<template>
  <div @click="handleOnWrapClick" :minest="minest" class="modal" v-if="visible">
    <div class="header">
      {{ item.label }}
      <div class="small" @click="minimizeWin">
        <a>
          <i class="el-icon-minus"></i>
        </a>
      </div>
      <div class="close" @click="_close">
        <a>
          <i class="el-icon-close"></i>
        </a>
      </div>
    </div>
    <div class="body">
      <webview
        :src="item.url"
        :style="{
          width: '100%',
          height: '100%',
        }"
      ></webview>
    </div>
  </div>
</template>
<script>
import VueResize from "../VueResize";
export default {
  components: {
    VueResize

  },
  props: {
    width: {
      type: Number,
      default: () => document.body.clientWidth,
    },
    height: {
      type: Number,
      default: () => document.body.clientHeight,
    },
  },
  data() {
    return {
      positionX: 0,
      positionY: 0,
      visible: false,
      minest: false,
      item: {
        url: "",
      },
    };
  },
  methods: {
    _open(item) {
      this.visible = true;
      this.item = item;
      this.width = document.body.clientWidth;
      this.height = document.body.clientHeight - 30;
    },
    _close() {
      this.visible = false;
      this.minest = false;
      this.item = {
        url: "",
      };
    },
    handleOnWrapClick(e) {
      try {
        const key = e.target.getAttribute("minest");
        if (/true/.test(`${key}`)) {
          this.minest = false;
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    minimizeWin() {
      this.minest = true;
    },
  }
};
</script>

<style lang='scss' scoped>
.modal {
  position: fixed;
  top: 120px;
  bottom: 120px;
  right: 200px;
  left: 200px;
  $height: 40px;
  transition: all 0.3s;
  .header {
    position: relative;
    height: $height;
    line-height: $height;
    padding-left: 10px;
    background: #ccc;
    .small {
      position: absolute;
      right: 35px;
      line-height: 0;
      top: 14px;
      z-index: 1;
    }
    .close {
      position: absolute;
      right: 10px;
      line-height: 0;
      top: 14px;
      z-index: 1;
    }
  }
  .body {
    height: calc(100% - #{$height});
  }
  &[minest="true"] {
    bottom: 5vh;
    right: 26vw;
    transform: scale(0.05);
    transform-origin: bottom right;
    .body {
      pointer-events: none;
    }
  }
}
</style>

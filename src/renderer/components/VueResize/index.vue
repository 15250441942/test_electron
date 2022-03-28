<template>
  <div
    @click="handleOnWrapClick"
    class="re-size"
    v-if="visible"
    ref="wrap"
    :minest="minest"
    :style="`z-index:${activeId == compId ? 999999 : 1}`"
  >
    <VueDragResize
      :w="r_width"
      :h="r_height"
      :x="r_x"
      :y="r_y"
      :resizing="resize"
      :dragging="resize"
      :isActive="true"
      :stickSize="50"
      ref="container"
    >
      <div class="header">
        {{ item.label }}
        <div class="small">
          <a>
            <i class="el-icon-minus" @click="minimizeWin"></i>
          </a>
        </div>
        <div class="close">
          <a>
            <i class="el-icon-close" @click="close"></i>
          </a>
        </div>
      </div>
      <div class="body">
        <webview :src="item.url" :style="{ height: '100%' }"></webview>
      </div>
      <!-- <div :style="{ width: +vw + 'px', height: +vh + 'px' }"> -->

      <!-- </div> -->
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";

export default {
  components: { VueDragResize },
  props: {
    activeId: String,
  },
  data() {
    return {
      r_x: 180,
      r_y: 100,
      r_width: 900,
      r_height: 600,
      minest: false,
      visible: false,
      be_width: 0,
      be_height: 0,
      be_x: 0,
      be_y: 0,
      compId: `vue_resize_${Math.random()}`,
      item: {
        url: "",
      },
    };
  },
  created() {},
  methods: {
    open(item) {
      this.visible = true;
      this.item = item;
    },
    close() {
      this.visible = false;
      this.minest = false;
      this.item = {
        url: "",
      };
    },
    // 缩小
    resize(newRect) {
      // console.log("newRect :>> ", newRect);
      this.vw = newRect.width;
      this.vh = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    handleOnWrapClick(e) {
      this.$emit("active-change", this.compId);

      try {
        const key = e.target.parentElement.parentElement.getAttribute("minest");
        if (/true/.test(`${key}`)) {
          // this.$refs.container.left = this.be_x;
          // this.$refs.container.top = this.be_y;
          this.$refs.container.$el.style.left = this.be_x;
          this.$refs.container.$el.style.top = this.be_y;
          this.$refs.container.$refs.container.style.width = this.be_width;
          this.$refs.container.$refs.container.style.height = this.be_height;
          this.minest = false;
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    minimizeWin() {
      const ds =
        this.$refs.wrap.parentElement.querySelectorAll('[minest="true"]');
      // this.r_width = 1000;
      // this.r_height = 1000;
      // document.getElementsByClassName("content-container").style.height = "1000px";
      this.be_width = this.$refs.container.$refs.container.style.width;
      this.be_height = this.$refs.container.$refs.container.style.height;
      this.be_x = this.$refs.container.$el.style.left;
      this.be_y = this.$refs.container.$el.style.top;
      this.$refs.container.$el.style.top = "100px";
      this.$refs.container.$el.style.left = `180px+${2000 * ds.length}`;
      this.$refs.container.$refs.container.style.width = "1000px";
      this.$refs.container.$refs.container.style.height = "1000px";
      console.log("this.$refs.container :>> ", this.$refs.container);
      // this.$forceUpdate();
      this.minest = true;
    },
  },
};
</script>

<style lang='scss' scoped>
.vdr.active:before {
  display: none;
}
.re-size {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;

  > div {
    pointer-events: initial;
    /* transition: all 0.3s; */
  }
  $height: 40px;
  :global(.vdr-stick) {
    opacity: 0;
    background: transparent;
    border: unset;
    border-color: transparent;
  }
  /* top: 100px;
  left: 180px; */
  /* border: none; */
  .header {
    position: relative;
    height: $height;
    line-height: $height;
    padding-left: 10px;
    background: #ccc;
    height: $height;
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
    height: calc(100% - 40px);
    width: 100%;
  }
  &[minest="true"] {
    > div {
      bottom: 25px;
      right: calc(50% + 2px);
      transform: scale(0.05);
      transform-origin: bottom right;
      .body {
        pointer-events: none;
      }
    }
  }
}
</style>

<template>
  <hsc-window-style-metal v-if="visible">
    <hsc-window
      :width="width"
      :height="height"
      :left.sync="left"
      :top.sync="top"
      
      closeButton="true"
      @closebuttonclick="_close"
    >
      <!-- <font color="red">red:{{ visible }}</font> -->
      <!-- <div @click="_close">x</div> -->
      <webview :src=item.url :style="{width:'100%',height:'640px'}"></webview>
    </hsc-window>
  </hsc-window-style-metal>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      width: 1000,
      height: 650,
      top: 100,
      left: 200,
      item: {
        url: "",
      },
    };
  },

  methods: {
    _open(item) {
      this.visible = true;
      this.item = item;
    },
    _close() {
      this.visible = false;
      this.item = {
        url: "",
      };
    },
  },
};
</script>

<style scoped>
</style>
<!--
 * @Author: your name
 * @Date: 2021-04-07 13:38:17
 * @LastEditTime: 2021-04-08 16:42:26
 * @LastEditors: Please set LastEditors
 * @Description: 入口页面
 * @FilePath: \eva-applets\src\pages\index\index.vue
-->
<template>
  <view class="content">
    <button class="" @click="toTheme"> 去主题配置 </button>
    <button class="" @click="modal"> 模态框 </button>
  </view>
</template>
<script>
import { getEvaTemplate } from "@/api/index.js";
export default {
  data() {
    return {};
  },
  onLoad() {
    this.getEvaTemplate();
  },
  methods: {
    async getEvaTemplate() {
      try {
        const { data } = await getEvaTemplate({ templeteId: 1617767082202005 });
        console.log(data)
      } catch (error) {}
    },
    modal() {
      this.$toast
        .showModal()
        .then(() => {})
        .catch(() => {});
    },
    toTheme() {
      this.$router.push({
        path: "../themeSetting/index",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

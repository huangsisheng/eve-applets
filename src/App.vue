<!--
 * @Author: your name
 * @Date: 2021-04-07 13:38:17
 * @LastEditTime: 2021-04-09 17:19:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\App.vue
-->
<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
@import "/wxcomponents/vant/dist/common/index.wxss";
</style>

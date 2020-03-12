<template>
  <div class="layoutPage">
    <!-- 上面固定，下面自适应 -->
    <div class="header">请挑选你的分类</div>
    <div class="content">
      <div class="leftBar">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="index in 99" :key="index" dot :title="'分类名称'+index" />
        </van-sidebar>
      </div>
      <div class="rightBar">
        <ul class="contList">
          <li class="contItem"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Getter } from "vuex-class";
import { Sidebar, SidebarItem } from "vant";
@Component({
  name: "layoutPage",
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  }
})
export default class layoutPage extends Vue {
  activeIndex: number = -1;
  activeKey: number = 0;
  newArr: number[] = [
    112,
    434,
    34546,
    5652342,
    2343,
    356465,
    32432,
    34,
    34,
    34232,
    4543,
    45232,
    79887,
    78787
  ];
  clickThis(index: number) {
    this.activeIndex = index;
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.layoutPage {
  min-height: 100vh;
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    color: #333;
    // background-color: pink;
  }
  .content {
    border-top: 1px solid #ccc;
    flex: 1;
    height: 414px;
    display: flex;
    flex-direction: row;
    // background-color: skyblue;
    .leftBar {
      width: 100px;
      height: 100%;
      border-right: 1px solid #efefef;
      //   background-color: rgb(255, 255, 134);
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .van-sidebar {
        width: 100%;
      }
      .van-sidebar-item {
        width: 100%;
      }
      .barList {
        width: 100%;
        .barItem {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-bottom: 1px solid #efefef;
          font-size: 15px;
          &.activeBar {
            background-color: #efefef;
            color: #f91;
          }
        }
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
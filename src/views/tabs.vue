<template>
  <div class="tabs">
    <div class="TabCont">
      <div class="innerCont">
        <router-view></router-view>
      </div>
    </div>
    <van-tabbar v-model="active">
      <router-link to="./home" class="tabListItem">
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      </router-link>

      <router-link to="./movieList" class="tabListItem">
        <van-tabbar-item name="video" icon="video-o">电影列表</van-tabbar-item>
      </router-link>
      <router-link to="./about" class="tabListItem">
        <van-tabbar-item name="friends" icon="friends-o">关于</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Tabbar, TabbarItem } from "vant";
@Component({
  name: "tabs",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})
export default class Tabs extends Vue {
  active: string = "home";
}
</script>
<style lang="scss">
.tabs {
  .van-tabbar--fixed {
    display: flex;
    align-items: center;
    .tabListItem {
      display: block;
      flex: 1;
    }
  }
  .TabCont {
    min-height: 100vh;
    .innerCont {
      padding-bottom: 28px;
      box-sizing: border-box;
    }
  }
}
</style>
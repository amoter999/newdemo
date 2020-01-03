<template>
  <div class="home">
    <van-collapse v-model="activeNames" v-for="item in list" :key="item.id">
      <van-collapse-item :title="item.tit" :name="item.id">{{item.content}}</van-collapse-item>
    </van-collapse>

    <div class="clickEnterLsit" @click="clickEnterLsit">点击进入商品列表页面</div>
    <div class="clickEnterLsit" @click="clickEnterAgree">点击进入协议内容页面</div>
    <div class="clickEnterLsit" @click="clickEnterSteps">点击进入进度条内容页面</div>
    <div class="clickEnterLsit" @click="clickEnterLayoutPage">康康布局问题</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {
  Button,
  Toast,
  Popup,
  Field,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem
} from "vant";
// Vue.use(Tab).use(Tabs);

@Component({
  name: "home",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  }
})
export default class Home extends Vue {
  msg: string = "This is a flower";
  list: Object[] = [
    {
      tit: "Monday",
      id: "123",
      content:
        "'string' only refers to a type, but is being used as a value here."
    },
    {
      tit: "Tuesday",
      id: "234",
      content: "Compiled successfully in 898ms Type checking in progress..."
    },
    {
      tit: "Wednesday",
      id: "345",
      content: "Compiled successfully in 898ms Type checking in progress..."
    }
  ];
  activeNames: string[] = [];
  clickEnterLsit() {
    this.$router.push({ name: "movieList" });
  }
  clickEnterAgree() {
    this.$router.push({ name: "about" });
  }
  clickEnterSteps() {
    this.$router.push({ name: "stepPage" });
  }
  clickEnterLayoutPage() {
    this.$router.push({ name: "layoutPage" });
  }
}
</script>
<style lang="scss">
.clickEnterLsit {
  font: 16px sans-serif;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #1069dd;
}
</style>

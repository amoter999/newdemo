<template>
  <div class="goodslist">
    <ul v-for="(item,index) in list" :key="index">
      <li class="goodItem" @click="enterDetail($event)">{{item}}</li>
    </ul>
    <div class="backIcon">
      <span @click="backLastPage">
        <van-icon name="arrow-left" />返回
      </span>
      <span @click="backtop">
        返回顶部
        <van-icon name="arrow-up" />
      </span>
    </div>
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
  Cell,
  CellGroup,
  Icon,
  Collapse,
  CollapseItem,
  List
} from "vant";
@Component({
  name: "goodslist",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [List.name]: List,
    [Icon.name]: Icon
  }
})
export default class About extends Vue {
  list1: number[] = Array.from(new Array(100).keys());
  list: number[] = [];

  created() {
    this.enumList();
  }

  enumList() {
    for (let i = 1; i <= 80; i++) {
      this.list.push(i);
    }
  }
  backLastPage() {
    history.go(-1);
  }
  enterDetail(eve: object) {
    // .offset().top;
    console.log(eve);
    this.$router.push({ name: "goodDetail" });
  }
  backtop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
</script>
<style lang="scss" scoped>
.goodslist {
  text-align: left;
  .goodItem {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;

    text-align: center;
    border-bottom: 1px solid #efefef;
  }
  .backIcon {
    font-size: 16px;
    text-align: center;
    color: #1069dd;
    height: 50px;
    line-height: 50px;
  }
}
</style>
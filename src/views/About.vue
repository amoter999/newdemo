<template>
  <div class="about">
    <h1 class="aboutlist">This is an about page</h1>
    <van-cell title="URL 跳转" is-link url="/about" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <div class="submitBtn">
      <van-button size="large" color="#42b983">提交</van-button>
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
  Collapse,
  CollapseItem
} from "vant";

@Component({
  name: "about",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class About extends Vue {
  msg: string = "This is a flower";
}
</script>
<style lang="scss">
.about {
  text-align: left;
  h1.aboutlist {
    font-size: 18px;

    padding-left: 15px;
  }
  .van-cell:first-child {
    border-top: 1px solid #efefef;
  }
  .van-cell__title {
    text-align: left;
  }
  .submitBtn {
    width: 100%;
    padding: 0 45px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 30px;
  }
}
</style>

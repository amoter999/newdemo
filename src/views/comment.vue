

<template>
  <div class="comment">
    <div class="headImg"></div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {
  Button,
  Toast,
  Sku,
  Popup,
  Field,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem
} from "vant";
Vue.use(Sku);
@Component({
  name: "comment",
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
export default class Comment extends Vue {
  show: boolean = false;
  sku: object = {
    // 数据结构见下方文档
  };
  goods: object = {
    // 数据结构见下方文档
  };
  messageConfig: object = {
    // 数据结构见下方文档
  };
}
</script>
<style lang="scss">
.comment {
  text-align: center;
}
</style>
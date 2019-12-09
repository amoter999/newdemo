<template>
  <div class="home">
    <van-collapse v-model="activeNames" v-for="item in list" :key="item.id">
      <van-collapse-item :title="item.tit" :name="item.id">{{item.content}}</van-collapse-item>
    </van-collapse>
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
    }
  ];
  activeNames: string[] = [];
}
</script>

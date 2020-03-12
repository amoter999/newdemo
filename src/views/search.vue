<template>
  <div class="Search">
    <div class="chinese">{{ str }}</div>
    <div class="pinyin">{{ pinyinStr }}</div>
    <van-checkbox v-model="checked">
      自定义图标
      <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" />
    </van-checkbox>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Checkbox, CheckboxGroup } from "vant";
@Component({
  name: "Search",
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  }
})
export default class Search extends Vue {
  str: string = "对好的说法范德萨撒旦法撒旦法撒旦法";
  pinyinStr: any = "";
  checked: boolean = true;
  activeIcon: string = "https://img.yzcdn.cn/vant/user-active.png";
  inactiveIcon: string = "https://img.yzcdn.cn/vant/user-inactive.png";
  created() {
    // this.pinyinStr = PinyinMatch.match(this.str, "sa");
  }
}
</script>
<style lang="scss">
.Search {
  .van-checkbox__icon {
    width: 15px;
    height: 15px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

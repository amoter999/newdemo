<template>
  <div class="collapsePage">
    <ul class="collapseList">
      <li class="collapseItem" v-for="(item, index) in list" :key="item.id">
        <div :class="['tit','animated',item.check?'swing':'']" @click="clickExpand(index)">
          <span>{{ item.tit }}</span>
          <img :src="getIcon(iconSrc.rightArrow)" :class="{rotate:item.check}" alt />
        </div>
        <div :class="[item.check?'leave':'','cont']">{{ item.cont }}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";
import "animate.css";
@Component({
  name: "drag",
  components: {}
})
export default class Drag extends Vue {
  iconSrc: Object = {
    rightArrow: "rightArrow.png"
  };
  list: any[] = [
    {
      id: 1,
      tit: "《越人歌》",
      cont: "山有木兮木有枝，心悦君兮君不知。",
      check: false
    },
    {
      id: 2,
      tit: "《三月花生酱》",
      cont:
        "要把二月的坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉。",
      check: false
    },
    {
      id: 3,
      tit: "《二月春风》",
      cont:
        "带着二月的未完成，在三月奔跑起来，即使道路泥泞，也会收获遍野的烂漫。",
      check: false
    },
    {
      id: 4,
      tit: "《三月花生酱》",
      cont:
        "要把二月的坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉。要把二月的坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉。要把二月的坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉。要把二月的坏心情卷进肥牛里，伴着滚烫的火锅底料和可口的花生酱一口吃掉。",
      check: false
    }
  ];

  getIcon(pathName: string) {
    try {
      return require(`@/assets/images/${pathName}`);
    } catch (error) {
      return "";
    }
  }
  clickExpand(index: number) {
    this.list[index]["check"] = !this.list[index]["check"];
  }
}
</script>
<style lang="scss">
.collapsePage {
  .collapseItem {
    .tit {
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      background-color: #fff;
      img {
        width: 10px;
        height: 15px;
        transform: rotate(0deg);
        transition: 0.1s linear;
        &.rotate {
          transform: rotate(-90deg);
        }
      }
    }
    .cont {
      text-align: left;

      box-sizing: border-box;
      background-color: #efefef;
      font-size: 16px;
      height: 0;
      opacity: 0;
      overflow: hidden;
      padding: 0 15px;
      transition: 0.1s linear;
    }
    .leave {
      height: auto;
      width: 100%;
      opacity: 1;
      padding: 20px 15px;
    }
  }
  .animated {
    animation-duration: 0.7s;
  }
  @keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }
    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -2deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
}
</style>

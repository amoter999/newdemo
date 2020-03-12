<template>
  <div class="useAnimate">
    <!-- <div class="smallbox animated bounce rotateOut firstBox infinite"></div>
    <div class="smallbox animated rubberBand infinite"></div>
    <div class="smallbox animated pulse infinite"></div>
    <div class="smallbox animated swing infinite"></div>
    <div class="smallbox animated slideOutUp infinite"></div>
    <div class="smallbox animated slideInDown infinite"></div>-->
    <div class="smallbox speacial animated bounceInDown" v-if="isShow"></div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import "animate.css";

@Component({
  name: "useAnimate",
  components: {}
})
export default class useAnimate extends Vue {
  isShow: boolean = false;

  created() {
    this.isShow = true;
  }
}
</script>
<style lang="scss">
.useAnimate {
  .smallbox {
    width: 50px;
    height: 50px;
    margin: 60px auto;
    background-color: violet;
    &.firstBox.animated {
      animation-duration: 4s;
    }
    &.speacial {
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -25px;
    }
  }

  @keyframes rotateOut {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 720deg);
      transform: rotate3d(0, 0, 1, 720deg);
      opacity: 0;
    }
  }
}
</style>

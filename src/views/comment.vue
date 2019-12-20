<template>
  <div class="comment" v-if="show">
    <div class="allComments">
      <p class="comTit">全部评论：</p>
      <div class="comment" v-for="item in commentObj.comments" :key="item.id">
        <div class="comCont">
          <div class="topAvatar">
            <div class="leftAvatarImg">
              <img v-lazy="item.author.avatar===''?defaultAvatar:getImage(item.author.avatar)" alt />
            </div>
            <div class="rightAvatarCont">
              <p class="nickname">{{ item.author.name }}</p>
              <p
                class="signature"
                v-text="
                  item.author.signature == ''
                    ? '暂无个签'
                    : item.author.signature
                "
              ></p>
            </div>
          </div>
          <div class="botCont">
            <p class="contText">{{ item.content }}</p>
            <p class="timeText">{{ item.created_at }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { comments } from "@/api/index";

import { Lazyload } from "vant";
Vue.use(Lazyload);
@Component({
  name: "comment",
  components: {}
})
export default class Comment extends Vue {
  show: boolean = false;
  commentObj: any = {};
  defaultAvatar: string = require("../assets/images/defalutAvatar.jpg");
  created() {
    let id = this.$route.params.id;
    comments(id)
      .then(res => {
        console.log(res);
        this.show = true;
        this.commentObj = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  getImage(url: string) {
    if (url !== undefined) {
      return url.replace(
        /^(http)[s]*(\:\/\/)/,
        "https://images.weserv.nl/?url="
      );
    }
  }
}
</script>
<style lang="scss">
.comment {
  text-align: center;
  .allComments {
    .comTit {
      margin: 0;
      font-size: 20px;
      height: 50px;
      box-sizing: border-box;
      line-height: 50px;
      text-align: left;
      padding-left: 15px;
      font-weight: 500;

      border-bottom: 1px solid #efefef;
    }
    .comCont {
      padding-bottom: 15px;
      border-bottom: 1px solid #efefef;
      .topAvatar {
        display: flex;
        padding: 15px;
        .leftAvatarImg {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          flex-grow: 0;
          flex-shrink: 0;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .rightAvatarCont {
          flex: 1;
          padding-left: 20px;
          text-align: left;
          p {
            margin: 0;
          }
          .nickname {
            font-size: 17px;
            color: #111;
            padding-bottom: 5px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          .signature {
            font-size: 15px;
            color: #999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
      .botCont {
        font-size: 16px;
        padding-left: 85px;
        padding-right: 15px;
        text-align: left;
        p {
          &.timeText {
            font-size: 15px;
            color: #ccc;
            text-align: left;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
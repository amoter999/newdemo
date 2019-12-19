<template>
  <div class="movieDetail">
    <div class="headImg">
      <div class="leftImg">
        <img v-lazy="getImage(headImg)" alt />
      </div>
      <div class="rightCont">
        <div class="rigInnerCont">
          <p class="movieTit">{{movieDetailObj.title}}</p>
          <!-- <p class="movieDirectors">
            导演：
            <span v-for="item in movieDetailObj.directors" :key="item.id">{{item.name}}&nbsp;</span>
          </p>-->
          <p class="movieSorts">
            电影类型：
            <span v-for="(item,index) in movieDetailObj.genres" :key="index">{{item}}&nbsp;</span>
          </p>
          <p class="moviePubTime">
            上线时间：
            <span>{{movieDetailObj.pubdate}}</span>
          </p>
          <p class="moviePubTime">
            上线国家：
            <span v-for="(item,index) in movieDetailObj.countries" :key="index">{{item}}&nbsp;</span>
          </p>
          <p class="movieSummary">简介：{{movieDetailObj.summary}}</p>
        </div>
      </div>
    </div>
    <div class="mainActors">
      <p class="actorTit">主演列表：</p>
      <div class="outerActor" ref="personWrap">
        <ul class="actorList" ref="personTab">
          <li class="actorItem" v-for="item in movieDetailObj.casts" :key="item.id">
            <img :src="getImage(item.avatars.large)" alt />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="comment">
      <p class="comTit">热门评论：</p>
      <div class="comCont">
        <div class="topAvatar">
          <div class="leftAvatarImg">
            <img :src="img" alt />
          </div>
          <div class="rightAvatarCont">
            <p class="nickname">嘟嘟熊之父</p>
            <p class="signature">谁来拧动拧发条鸟的发条</p>
          </div>
        </div>
        <div class="botCont">
          <p
            class="contText"
          >好于印度原版，将不痛不痒的现实主义裹脚布改造成高度浓缩的社会寓言。羊命、蒙太奇、架空国度、多重人物身份，可以置放在任何政治语境下进行解读。对准面孔的长久凝视，是试探和挑衅，也是控诉和审判。陈冲太猛，狰狞的表情犹如恶魔附体。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { movieDetail } from "@/api/index";
import { Toast, Lazyload, Swipe, SwipeItem } from "vant";
import BScroll from "better-scroll";
Vue.use(Lazyload);
@Component({
  name: "movieDetail",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Home extends Vue {
  headImg: string = "";
  original_title: string = "";
  movieDetailObj: any = "";
  img: string = require("../assets/images/detail-headimg.jpg");
  actorListWidth: number = 0;
  itemWidth: number = 0;
  created() {
    this.renderData();
  }
  renderData() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner"
    });
    let id = this.$route.params.id;
    movieDetail(id)
      .then(res => {
        this.headImg = res.data.images.large;
        this.movieDetailObj = res.data;
        console.log(res);
        Toast.clear();
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
@import "../assets/style/normalize";
.movieDetail {
  .headImg {
    display: flex;
    padding: 10px 15px;
    background-image: url(~@/assets/images/detail-headimg.jpg);
    background-size: 100% 100%;
    .leftImg {
      width: 130px;
      height: 180px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .rightCont {
      flex: 1;
      padding-left: 20px;
      .rigInnerCont {
        text-align: left;
        width: 100%;
        height: 100%;
        // background-color: lime;
        p {
          font-size: 14px;
          margin: 0;
          margin-top: 5px;
          color: #eaeaea;
          &:first-child {
            margin-top: 0;
          }
          &.movieTit {
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          &.movieSummary {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
          &.moviePubTime {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          &.movieSorts {
            color: #f6f6f6;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }
  .mainActors {
    overflow: hidden;
    .actorTit {
      font-size: 18px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      text-align: left;
      padding-left: 15px;
      font-weight: 500;
      border-bottom: 1px solid #efefef;
    }
    .outerActor {
      width: 100%;
      height: 200px;
      padding-top: 10px;
      border-bottom: 1px solid #efefef;
      padding-bottom: 10px;
      .actorList {
        text-align: left;
        overflow: hidden;
        overflow-x: scroll;
        font-size: 0;
        white-space: nowrap;
        height: 100%;
        .actorItem {
          width: 120px;
          height: 199px;
          display: inline-block;
          border: 1px solid #efefef;
          border-top: 0;
          margin-right: 10px;
          &:first-child {
            margin-left: 10px;
          }
          img {
            width: 100%;
            height: 170px;
            display: block;
          }
          p {
            text-align: center;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }
  }
  .comment {
    .comTit {
      font-size: 18px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
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
        }
      }
    }
  }
}
</style>
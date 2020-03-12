<template>
  <div class="movielist">
    <div class="topSearch">
      <van-search v-model="searchText" placeholder="请输入搜索关键词" show-action @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="innerCont">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeImgList" :key="index">
          <img :src="getNewImg(item)" class="swipeImg" alt />
        </van-swipe-item>
      </van-swipe>
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        loading-text="正在加载中..."
        success-text="加载已成功"
      >
        <ul class="allMovies">
          <li class="movieItem" v-for="item in movieList" :key="item.id">
            <div class="movieImg">
              <a :href="item.alt">
                <img v-lazy="getNewImg(item.images.small)" alt />
              </a>
            </div>
            <div class="movieDesc">
              <div class="movInner">
                <p class="movieName">{{item.title}}</p>
                <div class="tagBox">
                  <p class="movieCont" v-for="(cont,index) in item.genres" :key="index">
                    <van-button type="primary" plain color="#177DDC" size="small">{{cont}}</van-button>
                  </p>
                </div>
                <p class="movieRate">
                  <span>评分：</span>
                  <span v-if="item.rating.average!==0">
                    {{item.rating.average}}分
                    <van-rate v-model="item.rating.average/2" allow-half readonly />
                  </span>
                  <span v-else-if="item.rating.average===0">
                    {{item.rating.average}}分
                    <span>未上线</span>
                  </span>
                </p>
                <p class="movieTime">上线时间：{{item.mainland_pubdate|filterTime}}</p>
                <p class="someBtn">
                  <van-button
                    type="primary"
                    color="#177DDC"
                    size="small"
                    class="comment"
                    @click="enterDetail(item.id)"
                  >查看详情</van-button>
                  <van-button
                    type="primary"
                    color="#E54858"
                    size="small"
                    class="comment"
                    @click="comment(item.id)"
                  >查看评价</van-button>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <van-pagination
          v-model="currentPage"
          v-if="isShowPage"
          :total-items="125"
          :show-page-size="3"
          force-ellipses
        />
      </van-pull-refresh>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {
  Rate,
  Button,
  Lazyload,
  PullRefresh,
  Pagination,
  Search,
  Swipe,
  SwipeItem,
  Toast
} from "vant";
import { DateTime } from "luxon";
import axios from "axios";
import { movieList, searchMovie } from "@/api/index";
Vue.use(Lazyload);
Vue.use(Toast);

@Component({
  name: "goodslist",
  components: {
    [Rate.name]: Rate,
    [Button.name]: Button,
    [PullRefresh.name]: PullRefresh,
    [Pagination.name]: Pagination,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  filters: {
    filterComment: (value: number) => {
      return value / 2;
    },
    filterTime: (val: any) => {
      return DateTime.fromISO(val).toFormat("yyyy年MM月dd日");
    }
  }
})
export default class About extends Vue {
  movieList: any[] = [];
  // movieImg: string =
  // "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2576090251.jpg";
  value: Number = 0;
  currentPage: number = 0;
  isLoading: boolean = false;
  searchText: string = "";
  isShowPage: boolean = false;
  swipeImgList: any[] = [];
  created() {
    // 自定义加载图标
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner"
    });
    this.onRefresh();
  }
  // renderMovielist() {}

  onRefresh() {
    movieList({
      city: "上海",
      start: 0,
      count: 10
    })
      .then(res => {
        console.log(res);
        this.movieList = res.data.subjects;
        this.isLoading = false;
        this.isShowPage = true;
        res.data.subjects.map((item: any) =>
          this.swipeImgList.push(item.images.small)
        );
        console.log(this.swipeImgList);
        Toast.clear();
      })
      .catch(err => {
        console.log(err);
      });
  }
  onSearch() {
    searchMovie({
      q: this.searchText,
      start: 0,
      count: 10
    }).then(res => {
      console.log(res);
    });
  }
  // onCancel() {}
  getNewImg(url: string) {
    // return "https://images.weserv.nl/?url=" + imgurl;
    if (url !== undefined) {
      return url.replace(
        /^(http)[s]*(\:\/\/)/,
        "https://images.weserv.nl/?url="
      );
    }
  }
  getIntegration(val: number) {
    return val / 2;
  }

  comment(id: string) {
    // .offset().top;
    this.$router.push({ path: `/comment/${id}` });
  }
  enterDetail(id: string) {
    // .offset().top;
    this.$router.push({ path: `/movieDetail/${id}` });
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
.movielist {
  .swipeImg {
    width: 100%;
    height: 200px;
  }
  .topSearch {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #efeefe;
  }
  .someBtn {
    overflow: hidden;
    padding-top: 7px;
    .comment {
      float: left;
    }
  }
  .innerCont {
    padding-top: 53px;
    .van-pull-refresh__head {
      border-bottom: 1px solid #efefef;
    }
  }
  .allMovies {
    .movieItem {
      display: flex;
      padding: 20px;
      border-bottom: 1px solid #efefef;
      .movieImg {
        width: 100px;
        height: 160px;
        margin-right: 20px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .movieDesc {
        flex: 1;
        text-align: left;
        p {
          margin: 0;
          text-align: left;
          &.movieName {
            font-size: 17px;
            font-weight: bold;
          }
          &.movieCont {
            font-size: 16px;
            font-weight: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            float: left;
            margin-right: 8px;
          }
          &.movieRate {
            margin: 0;
            height: 35px;
            line-height: 28px;
            span {
              font-size: 15px;
            }
          }
        }
        .comment {
          margin-top: 5px;
          margin-right: 10px;
        }
      }
      .tagBox {
        overflow: hidden;
        margin-top: 10px;
      }
      .movInner {
        display: inline-block;
        .movieTime {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="index-page">

    <div class="section-center">
      <div class="top-controller clear" style="margin-top: 10px">
        <div class="fl swiper-wrap left-box theme-bg">
          <dog-swiper :list="swiperList"></dog-swiper>
        </div>
        <div class="fr hot-tags-wrap right-box scroll-view theme-bg">
          <div class="tag-controller">
            <dog-tag v-for="(target, index) in getBaiduTags" :key="index" :text="target.keyword" :href="target.href"></dog-tag>
          </div>
        </div>
      </div>
    </div>


    <div class="section-center margin-top">
      <div class="content-box clear">

        <div class="fl left-box">

          <div class="hot-reps-wrap theme-bg">
            <div class="block-header">
              今日最佳
            </div>
            <div class="block-content">
              <dog-repositories v-for="(target, index) in todayHotResponse" :key="index" :config="target"></dog-repositories>

              <div
                class="btn default load-more"
                @click="todayHotResponse = todayHotResponseFull"
                v-if="todayHotResponse.length !== todayHotResponseFull.length">加载更多</div>
            </div>
          </div>


          <div class="r-item theme-bg margin-t">
            <div class="block-header" style="color: #bab084">
              好文
            </div>
            <div class="block-content clear">
              <dog-wen
                class="fl"
                v-for="(target, index) in haowen.juejin"
                :key="index"
                :config="target"></dog-wen>
            </div>
          </div>

        </div>

        <div class="hot-reps-wrap fr right-box">

          <div class="r-item theme-bg margin-b">
            <div class="block-header" style="color: #10a9e8">
              Gits大佬
            </div>
            <div class="block-content clear">
              <div class="row">
                <dog-user
                  class="fl"
                  v-for="(target, index) in hotUsers"
                  :key="index"
                  :config="target"></dog-user>
              </div>
            </div>
          </div>


          <div class="weibo-wrap theme-bg margin-t">
            <div class="block-header" style="color: #F46A41">
              大佬说
            </div>

            <div class="block-content says-box">
              <dog-weibo
                v-for="(target, index) in hotWeibo"
                :key="index"
                :config="target"></dog-weibo>
            </div>
          </div>



        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import DogSwiper from '../components/DogSwiper'
  import DogTag from '../components/DogTag'
  import DogRepositories from '../components/DogRepositories'
  import DogUser from '../components/DogUser'
  import DogWeibo from '../components/DogWeibo'
  import DogWen from '../components/DogWen'
  import axios from 'axios'

  export default {
    name: 'app',
    components: {
      DogSwiper,
      DogTag,
      DogRepositories,
      DogUser,
      DogWeibo,
      DogWen
    },
    data() {
      return {
        swiperList: [],
        hotSearch: {
          baidu: [],
          weibo: [],
          bilibili: []
        },
        todayHotResponse: [],
        todayHotResponseFull: [],

        hotUsers: [],
        hotWeibo: [],
        haowen: {
          juejin: []
        }
      }
    },

    methods: {
      getSwiper () {
        axios.get('./json/swiper.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.swiperList = data
          }

        })
      },

      getHotTags () {
        // 获取时下热门
        axios.get('./json/hot_search.json').then(response=> {
          let {data, status} = response

          if (status === 200) {

            data.baidu = JSON.parse(data.baidu)
            data.bilibili = JSON.parse(data.bilibili)
            data.weibo = JSON.parse(data.weibo)

            try{
              this.hotSearch.baidu = data.baidu.success === 1 ? data.baidu.result.topwords : []
              this.hotSearch.weibo = data.weibo.ok === 1 ? data.weibo.data : []
              this.hotSearch.bilibili = data.bilibili.message === 'success' ? data.bilibili.result : []
            } catch (e) {
              // parse error
            }

            // console.log(this.hotSearch)
          }
        })
      },

      getHotRep () {
        // 获取近期热门项目
        axios.get('./json/git_today_hot.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.todayHotResponseFull = data
            this.todayHotResponse = this.todayHotResponseFull.slice(0, 10)
          }

        })
      },

      getHotProple () {
        // 获取热门人物
        axios.get('./json/git_user.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.hotUsers = data
          }

        })
      },

      getWeibo () {
        // 获取热门微博
        axios.get('./json/weibo_says.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.hotWeibo = data
          }

        })
      },

      getHaowen () {
        // 获取热门微博
        axios.get('./json/san_wen.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            try{
              this.haowen = {
                juejin: data.juejin.d.entrylist
              }
            } catch (e) {
              //
            }
          }

        })
      }
    },
    mounted() {

      this.getSwiper()
      this.getHotTags()
      this.getHotRep()
      this.getHotProple()
      this.getWeibo()
      this.getHaowen()

    },

    computed: {
      getBaiduTags () {
        let arr = []
        this.hotSearch.baidu.slice(0, 20).forEach(val=>{
          val.href = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=' + val.keyword
          arr.push(val)
        })
        return arr
      }
    }
  }
</script>

<style>
  .index-page .swiper-wrap {
  }

  .index-page .hot-tags-wrap {
    height: 300px;
    /*background-color: #EAEEEF;*/
  }
</style>

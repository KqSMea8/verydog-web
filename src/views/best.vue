<template>
  <div class="index-page">


    <div class="section-center margin-top">
      <div class="content-box clear">

        <div class="fl left-box">

          <div class="hot-reps-wrap theme-bg margin-b">
            <div class="block-header">
              本月最佳
            </div>
            <div class="block-content">
              <dog-repositories v-for="(target, index) in momentHotResponse" :key="index" :config="target"></dog-repositories>

              <div
                class="btn default load-more"
                @click="momentHotResponse = momentHotResponseFull"
                v-if="momentHotResponse.length !== momentHotResponseFull.length">加载更多</div>
            </div>
          </div>

          <div class="hot-reps-wrap theme-bg">
            <div class="block-header">
              Best推荐
            </div>
            <div class="block-content">
              <dog-repositories v-for="(target, index) in bestHotResponse" :key="index" :config="target"></dog-repositories>

              <div
                class="btn default load-more"
                @click="bestHotResponse = bestHotResponseFull"
                v-if="bestHotResponse.length !== bestHotResponseFull.length">加载更多</div>
            </div>
          </div>

        </div>

        <div class="hot-reps-wrap fr right-box">

          <div class="r-item theme-bg margin-b">
            <div class="block-header" style="color: #10a9e8">
              一些内容
            </div>
            <div class="block-content clear">

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import DogRepositories from '../components/DogRepositories'
  import axios from 'axios'

  export default {
    name: 'app',
    components: {
      DogRepositories,
    },
    data() {
      return {

        momentHotResponse: [],
        momentHotResponseFull: [],

        bestHotResponse: [],
        bestHotResponseFull: [],

      }
    },

    methods: {

      getHotRep () {
        // 获取近期热门项目
        axios.get('./json/git_hot.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.momentHotResponseFull = data
            this.momentHotResponse = this.momentHotResponseFull.slice(0, 10)
          }

        })
      },

      getBest () {
        // 获取近期热门项目
        axios.get('./json/git_best.json').then(response => {

          let {data, status} = response

          if (status === 200) {
            this.bestHotResponseFull = data
            this.bestHotResponse = this.bestHotResponseFull.slice(0, 10)
          }

        })
      }

    },
    mounted() {

      this.getHotRep()
      this.getBest()

    },

    computed: {

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

<template>
  <div class="dog-haowen">
    <div class="rep-title">
      <h3>
        <a :href="config.originalUrl" target="_blank">
          {{config.title}}
        </a>
      </h3>
    </div>

    <div class="rep-des">
      <a :href="config.originalUrl" target="_blank" class="inhre">
        <p v-if="config.screenshot">
          <img :src="config.screenshot" alt="">
        </p>
        <p>
          {{config.content}}
        </p>

        <p class="tag-box">
          <dog-tag v-for="(target, index) in config.tags" :key="index" :text="target.title"></dog-tag>
        </p>
      </a>
    </div>

    <div class="rep-info text-gray">
      <div class="inline-block info-item info-item-icon">
        <span class="iconfont icon-xihuan"></span>
        <span class="programming-start">
          {{config.collectionCount}}
        </span>
      </div>

      <div class="inline-block info-item info-item-icon">
        <span class="iconfont icon-pinglun"></span>
        <span class="programming-fork">
          {{config.commentsCount}}
        </span>
      </div>

    </div>

  </div>
</template>

<script>
  import { getLanguageClass } from '../util'
  import DogTag from './DogTag'

  export default {
    name: 'DogRepositories',
    components: {
      DogTag
    },
    props: {
      config: {
        type: Object,
        default(){
          return {
            title: "2018年最值得关注学习的25个JavaScript开源项目",
            content: "💩🚀 Windows 95 in Electron. Runs on macOS, Linux, and Windows.",
          }
        }
      }
    },
    data(){
      return {

      }
    },

    computed: {

      getLanguageClass(){
        return getLanguageClass(this.config.language)
      }

    }
  }

</script>

<style lang="scss">

  .dog-haowen {
    h3 {
      font-size: 16px;
      font-weight: 600;
    }
    .rep-title a {
      color: #333;
    }
    .rep-des {
      padding-top: 8px;
      padding-bottom: 8px;
      color: #586069;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    a.inhre {
      color: #333;
    }
    .tag-box {
      margin-top: 6px;
    }
    .octicon {
      color: #586069!important;
    }
    .info-item-icon {
      margin-left: 10px;
    }

    .right-menu {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .today-info {
        font-size: 14px;
        color: #586069;
        margin-top: 10px;
      }
    }

    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
  }



</style>

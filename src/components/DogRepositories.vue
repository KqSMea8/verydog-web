<template>
  <div class="dog-repositories">
    <div class="rep-title">
      <h3>
        <a :href="config.url || config.html_url" target="_blank">
          {{config.name}}
        </a>
      </h3>
    </div>

    <div class="rep-des">
      <p>
        {{config.description}}
      </p>
    </div>

    <div class="rep-info text-gray">

      <div class="inline-block info-item language-box">
        <span class="repo-language-color" :class="getLanguageClass"></span>
        <span class="programming-language">
          {{config.language}}
        </span>
      </div>

      <div class="inline-block info-item info-item-icon">
        <span class="iconfont icon-start"></span>
        <span class="programming-start">
          {{config.stars || config.stargazers_count}}
        </span>
      </div>

      <div class="inline-block info-item info-item-icon">
        <span class="iconfont icon-fork"></span>
        <span class="programming-fork">
          {{config.forks}}
        </span>
      </div>

    </div>

    <div class="right-menu">
      <div class="btn-box clear">
        <a class="start-btn fr btn default" target="_blank" :href="config.url || config.html_url">
          <span class="iconfont icon-start"></span>
          start
        </a>
      </div>

      <p v-if="config.currentPeriodStars" class="today-info"><span class="iconfont icon-start"></span>{{config.currentPeriodStars}} start today</p>

    </div>

  </div>
</template>

<script>
  import { getLanguageClass } from '../util'
  export default {
    name: 'DogRepositories',
    props: {
      config: {
        type: Object,
        default(){
          return {
            created_at: "2018-08-23T05:04:38.000Z",
            description: "💩🚀 Windows 95 in Electron. Runs on macOS, Linux, and Windows.",
            forks: 712,
            html_url: "https://github.com/felixrieseberg/windows95",
            language: "JavaScript",
            name: "windows95",
            stargazers_count: 12759,
            watchers: 12759,
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

  .dog-repositories {
    h3 {
      font-size: 20px;
      font-weight: 600;
    }
    .rep-title a {
      color: #0366d6;
    }
    .rep-des {
      padding-top: 8px;
      padding-bottom: 8px;
      color: #586069;
      width: 75%;
      padding-right: 24px;
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

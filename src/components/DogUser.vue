<template>
  <div class="dog-user-controller">

    <a :href="config.html_url" target="_blank">

      <div class="face-box">
        <img :src="config.avatar_url" :alt="config.login">
      </div>

      <p>
        <span class="repo-language-color" :class="getLanguageClass"></span>
        <span class="programming-language">
        {{config.language || 'null'}}
      </span>
      </p>

      <p class="user-info-box hide-text">
        <span class="username">{{config.login}}</span>
      </p>

    </a>

  </div>
</template>

<script>

  import { getLanguageClass } from '../util'

  export default {
    name: 'DogUser',
    props: {
      config: {
        type: Object,
        default(){
          return {
            avatar_url: "https://avatars3.githubusercontent.com/u/3233966?v=4",
            html_url: "https://github.com/waylau",
            language: "null",
            login: "waylau"
          }
        }
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
  .dog-user-controller {
    width: 33.33%;
    text-align: center;
    margin-bottom: 12px;

    .face-box {
      box-sizing: border-box;
      padding: 0 10px;
      img {
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
      }

    }
    .programming-language {
      font-size: 12px;
      color: #586069;
    }

    a {
      color: #333;
    }
  }
</style>

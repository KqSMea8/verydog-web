<template>
  <div class="says-item" :class="getSex">
    <div class="user-face clear">
      <div class="fl face-box" :style="{ backgroundImage: 'url(' +(config.user.avatar_hd || '')+ ')' }" @click="userFaceClick"></div>
      <div class="fl user-info">
        <p class="user-name">
          <span class="name-target">{{config.user.screen_name}}</span>
          <span class="iconfont icon-nan" v-if="showwx"></span>
          <span class="iconfont icon-comiisnv" v-if="showwx"></span>
        </p>
        <p class="create-time hide-text">
          <span class="time" style="padding-left: 0">{{config.user.description}}</span>
        </p>
      </div>
    </div>

    <div class="content-box">
      <div class="content-text" v-html="config.text">

      </div>
      <div class="content-img clear" :class="getLengthClass" @click="viewImages(getPhotoList)">
        <div class="img-item" v-for="(target, index) in getPhotoList" :key="index">
          <div class="img-target" :style="{ backgroundImage: 'url(' + target.url + ')' }"></div>
          <p>{{getSuperSrc()}}</p>
        </div>
      </div>
    </div>

    <div class="menu-box clear">



      <div class="tool-wrap fr">

        <div class="tool-item weixin fl" v-if="showwx">
          <span class="iconfont icon-weixin"></span>
        </div>

        <div class="tool-item pinglun fl active" @click="openComment">
          <span class="iconfont icon-pinglun"></span>
          <span class="num">{{config.comments_count}}</span>
        </div>
        <div class="tool-item xihuan fl" :class="{ 'active': config.isLike }" @click="toggleLike">
          <span class="iconfont icon-xihuan"></span>
          <span class="num">{{config.attitudes_count}}</span>
        </div>

      </div>


    </div>

  </div>
</template>

<script>

  export default {
    data(){
      return {
        sexType: {
          1: 'boy',
          2: 'girl'
        },
        photoArray: []
      }
    },
    props: {
      config: {
        type: Object,
        default () {
          return {
            isLike: false,
            isLove: false,
            says: {

            },
            user: {

            }
          }
        }
      },
      showwx: {
        type: Boolean,
        default(){
          return true
        }
      }
    },
    methods: {
      viewImages(){

      },
      openComment(){

      },
      toggleLike(){
        this.$emit('toggleLike')
      },
      userFaceClick(){
        this.$emit('faceClick')
      },
      getSuperSrc(src) {
        if(src && src.indexOf('http') === -1) {
          // src = $api.getBaseUrl() + src
        }
        return src
      }
    },
    computed: {
      getSex(){
        return {1:'boy', 2:'girl'}[this.config.user.sex] || 'boy'
      },
      getLengthClass(){
        return 'length' + this.getPhotoList.length
      },
      getPhotoList(){
        return this.config.pics || []
      }
    },
    onLoad(){
      try{
        // this.config.says.create_time_string = wxHelp.fromNow(this.config.says.create_time)
      }catch (e) { this.config.says.create_time = '' }
    },
    onShow(){

    }
  }
</script>

<style>

</style>

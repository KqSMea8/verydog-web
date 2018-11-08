<template>
  <div class="dog-tag" :style="{ backgroundColor: theme.bg, color: theme.color, borderColor: theme.border }">
    <a :href="href" target="_blank">{{text}}</a>
  </div>
</template>

<script>
  import random from 'lodash/random'

  let colorList = [
    {
      border: 'rgba(64,158,255,.2)',
      bg: 'rgba(64,158,255,.1)',
      color: '#409eff'
    },
    {
      border: 'rgba(103,194,58,.2)',
      bg: 'rgba(103,194,58,.1)',
      color: '#67c23a'
    },
    {
      border: 'hsla(220,4%,58%,.2)',
      bg: 'hsla(220,4%,58%,.1)',
      color: '#909399'
    },
    {
      border: 'rgba(230,162,60,.2)',
      bg: 'rgba(230,162,60,.1)',
      color: '#e6a23c'
    },
    {
      border: 'hsla(0,87%,69%,.2)',
      bg: 'hsla(0,87%,69%,.1)',
      color: '#f56c6c'
    }
  ]

  export default {
    name: 'DogTag',
    props: {
      text: {
        type: String,
        default(){
          return 'String'
        }
      },
      href: {
        type: String,
        default(){
          return 'String'
        }
      }
    },
    data(){
      return {
        theme: colorList[random(0, colorList.length-1)]
      }
    }
  }
</script>

<style>
  .dog-tag {
    display: inline-block;
    padding: 0 10px;
    line-height: 26px;
    height: 28px;
    font-size: 10px;
    margin-right: 6px;
    margin-bottom: 6px;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .dog-tag a {
    color: inherit;
  }
</style>

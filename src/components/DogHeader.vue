<template>
  <div class="dog-header">
    <div class="section-center">
      <div class="logo fl">
        <a href="#/">
          logo没设计好
        </a>
      </div>

      <ul class="nav fl">
        <li class="item s1">
          <a href="#/best">项目推荐</a>
        </li>
        <li class="item s3">
          <a href="">大佬说</a>
        </li>
        <li class="item s4">
          <a href="">好文</a>
        </li>
        <li class="item s5">
          <a href="">关于</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'DogHeader',
    props: {
      msg: String
    }
  }
</script>

<style>
  .dog-header {
    z-index: 9000;
    border-bottom: 1px solid #eaeeef;
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    background-color: #fff;

    transform: translate3d(0, 0, 0);
  }
  .dog-header .section-center {
    height: 42px;
    padding: 4px 0;
  }
  .dog-header .logo {
    height: 42px;
    width: 100px;
    background-color: #eaeeef;
  }

  .dog-header .nav {
    line-height: 42px;
    margin-left: 30px;
  }

  .dog-header .nav .item {
    float: left;
    text-decoration: none;
    font-size: 21px;
    font-weight: 700;
    margin-right: 20px;
    cursor: pointer;
  }
  .dog-header .nav .item.s1 a{
    color: #00B068;
  }
  .dog-header .nav .item.s2 a{
    color: #10a9e8;
  }
  .dog-header .nav .item.s3 a{
    color: #F46A41;
  }
  .dog-header .nav .item.s4 a{
    color: #bab084;
  }
  .dog-header .nav .item.s5 a{
    color: #2b9da5;
  }
</style>

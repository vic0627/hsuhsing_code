<script setup>
import logoA from "../assets/head/logoA.svg";
import logoB from "../assets/head/logoB.svg";
</script>

<template>
  <header>
    <div class="logo">
      <div class="logoAContainer">
        <img :src="logoA" alt="logoA" />
      </div>
      <img :src="logoB" alt="logoB" class="logoB" />
    </div>
    <div class="ham">
      <span v-for="i in 3"></span>
      <p>menu</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../sass/base.scss";
@import "../sass/font.scss";
@import "../sass/media.scss";
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding-top: 30px;
  @include l() {
    padding-top: 65px;
  }
  .logo {
    margin: 0 0 0 10%;
    cursor: pointer;
    display: flex;
    .logoAContainer {
      width: 36px;
      height: 44px;
      @include l() {
        width: 47.84px;
        height: 58px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .logoB {
      display: none;
      @include l() {
        display: block;
        width: 93.97px;
        margin-left: 17px;
      }
    }
  }
  .ham {
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    span {
      display: block;
      width: 39px;
      height: 1px;
      background: #fff;
      margin-bottom: 6px;
    }
    span:nth-child(3) {
      clip-path: polygon(44% 0, 100% 0, 100% 100%, 44% 100%);
    }
    p {
      @extend %en-p;
      font-size: 14px;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";

const contact = ref([
  {
    title: "E-Mail",
    info: " info@fractalab.com",
  },
  {
    title: "TEL",
    info: " 02-338455678",
  },
]);
</script>

<template>
  <footer>
    <div class="footTxt">
      <h3>序形設計股份有限公司</h3>
      <div class="footContact">
        <div class="conWrap" v-for="i in contact">
          <div class="conTitle">
            <p>{{ i.title }}</p>
            <p>|</p>
          </div>
          <p>{{ i.info }}</p>
        </div>
      </div>
    </div>
    <p class="copy">© 2022 by Fracta Lab . All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "../sass/base.scss";
@import "../sass/font.scss";
@import "../sass/media.scss";
footer {
  background: #191919;
  width: 80%;
  padding: 25px 10%;
  display: none;
  flex-wrap: wrap;
  @include l() {
    justify-content: space-between;
    align-items: center;
    padding: 45px 10% 0;
  }
  .footTxt {
    @include l() {
      width: 40%;
    }
    h3 {
      @extend %cn-p;
      color: #fff;
      text-align: left;
    }
    .footContact {
      margin: 24px auto 36px;
      @include l() {
        display: flex;
      }
      .conWrap:nth-child(1) {
        @include l() {
          margin-right: 50px;
        }
      }
      .conWrap {
        display: flex;
        p {
          @extend %en-p;
        }
        .conTitle {
          display: flex;
          justify-content: space-between;
          width: 64px;
          margin-right: 12px;
          @include l() {
            width: auto;
          }
          > p:nth-child(1) {
            margin-bottom: 16px;
            @include l() {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  .copy {
    @extend %en-p;
    color: #acacac;
    width: 100%;
    margin: 0 auto;
    @include l() {
      width: 360px;
      margin: 0;
    }
  }
}
</style>

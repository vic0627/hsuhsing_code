<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import BannerBgVue from "./BannerBg.vue";
import arrow from "../assets/scrollDown/arrow.svg";
import ring from "../assets/scrollDown/ring.svg";
const main = ref(null);
let section, footer;
const ww = window.innerWidth;
onMounted(() => {
  section = document.querySelector(".section");
  footer = document.querySelector("footer");
  intro();
});
const scrollTo = () => {
  section.style.display = "block";
  ww > 550 ? (footer.style.display = "flex") : (footer.style.display = "block");
  window.scrollTo({ top: section.offsetTop + 30, behavior: "smooth" });
};
const intro = (d = 0) => {
  gsap.to(".mainTxt h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: d + 2,
  });
  gsap.to(".mainTxt p", {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: d + 2.5,
  });
  gsap.to(".scroll", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: d + 3,
  });
};
</script>

<template>
  <main ref="main">
    <BannerBgVue />
    <div class="mainTxt">
      <p>About</p>
      <h2>
        We Accelerate <br class="br" />the Organization is
        <br class="br" />transition <br class="br" />to the future period
      </h2>
      <h2>品牌發展的夥伴</h2>
      <p class="mainP">
        序形是由品牌策略、行銷設計、資訊工程與數位媒體創作專業人員共同組成的團隊。
        <br /><br />
        不同的專業背景整合形成數位生態輪廓，提供品牌全方面的數位佈局服務，為品牌實現更沈浸的數位場域。
      </p>
      <div class="scroll" @click="scrollTo">
        <img :src="ring" class="ring" v-for="i in 3" />
        <img :src="arrow" class="arrow" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../sass/base.scss";
@import "../sass/font.scss";
@import "../sass/media.scss";
main {
  background: $bg;
  position: relative;
  padding-bottom: 78px;
  overflow: hidden;
  @include l() {
    padding-bottom: 174px;
  }
  .mainTxt {
    position: relative;
    padding-top: 159px;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    @include l() {
      padding-top: 240px;
    }
    h2,
    p,
    .scroll {
      opacity: 0;
      transform: translateY(30px);
    }
    p:nth-child(1) {
      @extend %en-p;
      margin-bottom: 8px;
    }
    h2:nth-child(2) {
      @extend %en-title;
      margin: 0 auto 20px;
      .br {
        display: none;
        @include l() {
          display: block;
        }
      }
    }
    h2:nth-child(3) {
      @extend %cn-title;
      margin-bottom: 116px;
      @include l() {
        margin-bottom: 166px;
      }
    }
    p:nth-child(4) {
      @extend %cn-p;
      color: $cp1;
      margin: 0 auto;
      max-width: 486px;
    }
    .scroll {
      width: 170px;
      height: 170px;
      margin: 40px 0 0 auto;
      position: relative;
      border-radius: 50%;
      cursor: pointer;
      @include l() {
        position: absolute;
        top: 597px;
        right: 0;
      }
      .ring {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        transition: 0.3s;
        //animation: ring 10s linear infinite;
      }
      .ring:nth-child(1) {
        animation: ring 20s linear infinite;
      }
      .ring:nth-child(2) {
        animation: ring 20s 0.833333s linear infinite;
      }
      .ring:nth-child(3) {
        animation: ring 20s 1.633333s linear infinite;
      }
      .arrow {
        position: absolute;
        top: 50%;
        margin-top: -22%;
        left: 50%;
        margin-left: -15.5%;
        animation: arrow 3s ease-in-out infinite;
      }
    }
  }
}
@keyframes ring {
  0% {
    transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  25% {
    transform: perspective(500px) rotateX(90deg) rotateY(360deg) rotateZ(0deg);
  }
  50% {
    transform: perspective(500px) rotateX(180deg) rotateY(720deg)
      rotateZ(120deg);
  }
  75% {
    transform: perspective(500px) rotateX(270deg) rotateY(1080deg)
      rotateZ(240deg);
  }
  100% {
    transform: perspective(500px) rotateX(360deg) rotateY(1440deg)
      rotateZ(360deg);
  }
}
@keyframes arrow {
  0% {
    top: 45%;
  }
  50% {
    top: 55%;
  }
  100% {
    top: 45%;
  }
}
</style>

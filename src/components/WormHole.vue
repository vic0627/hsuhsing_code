<script setup>
import SectionBgVue from "./SectionBg.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ani } from "./SBC.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const section = ref(null);
const showSec = () => {
  gsap.to(".section", {
    clipPath: "circle(100%)",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section",
      start: "top center",
      end: "top top",
    },
  });
};
onMounted(() => {
  const sbcs = document.querySelectorAll(".sbc");
  const rings = document.querySelectorAll(".rings");
  const lines = document.querySelectorAll(".lines");
  let first = true;
  showSec();
  window.addEventListener("scroll", (e) => {
    if (
      window.scrollY > section.value.offsetTop &&
      section.value.offsetTop !== 0
    ) {
      aniIn(first, e.timeStamp / 1000, sbcs, rings, lines);
      first = false;
    }
    let h = window.scrollY - section.value.offsetTop; // - section.value.offsetHeight / 2;
    sbcs.forEach((val, i) => {
      gsap.to(val, {
        cx: (h / 60) * (9 - i),
        cx: (h / 60) * (9 - i),
        duration: 1 * i,
      });
    });
  });
});
const aniIn = (f, d, sbc, ring, line) => {
  if (f) {
    sbc.forEach((val, i) => {
      val.innerHTML = ani(i, d);
    });
    gsap.fromTo(
      ".rGroup",
      {
        scale: 3,
      },
      {
        scale: 1,
        duration: 2,
      }
    );
  }

  ring.forEach((val, i) => {
    gsap.to(val, {
      strokeDashoffset: 0,
      duration: 2,
      delay: 0.2 * i,
    });
  });
  line.forEach((val, i) => {
    gsap.to(val, {
      strokeDashoffset: 0,
      duration: 1,
      delay: 1.5,
    });
  });
  gsap.to(".content h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
  });
  gsap.to(".content p", {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 3,
  });
};
</script>

<template>
  <section class="section" ref="section">
    <div class="content">
      <SectionBgVue />
      <h2>To Dedicate a Proposal for the Coming Era</h2>
      <h2>不斷迎接時代的挑戰</h2>
      <p>
        序形是品牌數位化的節點，各種產業透過序形構築品牌的數位樣貌，一同定義未來。<br /><br />我們堅信不同的合作是促成環境進步的動力，序形打造串接品牌策略與數位媒體的渠道，幫助企業切入未來的數位主流市場，推動產業變革的動能，數位市場絕對不僅網路與電商，序形提供企業數位變革的方向，成就非凡。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../sass/base.scss";
@import "../sass/font.scss";
@import "../sass/media.scss";
section {
  position: relative;
  background: #191919;
  margin-top: -30px;
  padding-bottom: 30px;
  border-radius: 30px 30px 0 0;
  width: 100%;
  //height: calc(100vh + 30px);
  margin: 0 auto;
  overflow: hidden;
  display: none;
  clip-path: circle(0%);
  .content {
    position: relative;
    max-width: 1200px;
    width: 80%;
    margin: 0 auto 410px;
    padding-top: 115px;
    @include l() {
      padding-top: 182px;
      margin-bottom: 389px;
    }
    h2,
    p {
      opacity: 0;
      transform: translateY(30px);
    }
    h2:nth-child(2) {
      @extend %en-title;
      margin: 0 auto 20px;
      max-width: 725px;
      position: relative;
      .br {
        display: none;
        @include l() {
          display: block;
        }
      }
    }
    h2:nth-child(3) {
      @extend %cn-title;
      position: relative;
      margin-bottom: 42px;
    }
    p:nth-child(4) {
      position: relative;
      @extend %cn-p;
      color: $cp1;
      margin: 0 auto;
      max-width: 569px;
      .br {
        display: none;
        @include l() {
          display: block;
        }
      }
    }
  }
}
</style>

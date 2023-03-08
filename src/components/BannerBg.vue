<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
const bb1 = ref(null);
const bb2 = ref(null);
const bb3 = ref(null);
const bb3c = ref(null);
const bb3g = ref(null);
const bb4 = ref(null);
onMounted(() => {
  intro();
  mov();
});
const intro = (d = 0) => {
  gsap.fromTo(
    bb1.value,
    {
      x: 150,
      y: 90,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      delay: d + 0.6,
    }
  );
  gsap.fromTo(
    bb3.value,
    {
      x: 100,
      y: 60,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      delay: d + 0.3,
    }
  );
  gsap.fromTo(
    bb4.value,
    {
      x: 50,
      y: 20,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      delay: d,
    }
  );
  gsap.fromTo(
    bb2.value,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: d + 1.6,
    }
  );
  gsap.fromTo(
    bb3c.value,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: d + 1.6,
    }
  );
};
const mov = () => {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  if (ww < 550) return;
  window.addEventListener("mousemove", (e) => {
    let y = e.clientY - wh / 2;
    let x = e.clientX - ww / 2;
    gsap.to(bb1.value, {
      x: x / 25,
      y: y / 15,
      duration: 1,
    });
    gsap.to(bb2.value, {
      x: x / 50,
      y: y / 30,
      duration: 1.5,
    });
    gsap.to(bb3g.value, {
      x: x / 100,
      y: y / 60,
      duration: 2,
    });
    gsap.to(bb4.value, {
      x: x / 200,
      y: y / 120,
      duration: 2.5,
    });
  });
};
</script>

<template>
  <svg
    width="1289"
    height="908"
    viewBox="0 0 1289 908"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="svgBanner"
  >
    <g ref="bb3g">
      <path
        d="M1036.11 449.947C973.292 533.983 900.628 598.243 833.937 634.208C767.225 670.184 706.582 677.805 667.715 648.751C628.849 619.698 618.993 559.378 634.614 485.212C650.231 411.068 691.294 323.186 754.113 239.15C816.931 155.114 889.595 90.8538 956.286 54.889C1023 18.9133 1083.64 11.2923 1122.51 40.3454C1161.37 69.3986 1171.23 129.719 1155.61 203.885C1139.99 278.029 1098.93 365.911 1036.11 449.947Z"
        stroke="white"
        stroke-opacity="0.6"
        stroke-width="0.5"
        ref="bb3"
      />
      <circle r="10" fill="white" ref="bb3c">
        <animateMotion
          dur="10s"
          path="M1036.11 449.947C973.292 533.983 900.628 598.243 833.937 634.208C767.225 670.184 706.582 677.805 667.715 648.751C628.849 619.698 618.993 559.378 634.614 485.212C650.231 411.068 691.294 323.186 754.113 239.15C816.931 155.114 889.595 90.8538 956.286 54.889C1023 18.9133 1083.64 11.2923 1122.51 40.3454C1161.37 69.3986 1171.23 129.719 1155.61 203.885C1139.99 278.029 1098.93 365.911 1036.11 449.947Z"
          repeatCount="indefinite"
          rotate="auto"
        ></animateMotion>
      </circle>
    </g>

    <path
      d="M1168.95 528.149C1135.97 572.268 1097.82 605.999 1062.82 624.875C1027.8 643.762 996.013 647.734 975.663 632.522C955.312 617.31 950.125 585.699 958.326 546.763C966.522 507.848 988.077 461.715 1021.06 417.596C1054.04 373.477 1092.18 339.746 1127.18 320.87C1162.21 301.983 1193.99 298.011 1214.34 313.223C1234.69 328.435 1239.88 360.046 1231.68 398.982C1223.48 437.897 1201.93 484.03 1168.95 528.149Z"
      stroke="white"
      stroke-opacity="0.6"
      stroke-width="0.5"
      ref="bb4"
    />
    <g ref="bb2">
      <ellipse
        cx="641.365"
        cy="310.433"
        rx="226.813"
        ry="488.974"
        transform="rotate(36.7786 641.365 310.433)"
        fill="#0554C0"
      />
    </g>

    <path
      d="M672.471 394.877C566.683 536.397 444.309 644.62 331.984 705.193C219.64 765.778 117.439 778.654 51.9086 729.669C-13.622 680.684 -30.2011 579.019 -3.89406 454.12C22.4082 329.243 91.5659 181.24 197.354 39.7203C303.142 -101.8 425.517 -210.022 537.841 -270.596C650.186 -331.181 752.386 -344.057 817.917 -295.072C883.447 -246.087 900.026 -144.421 873.719 -19.5225C847.417 105.354 778.259 253.357 672.471 394.877Z"
      stroke="white"
      stroke-opacity="0.6"
      stroke-width="0.5"
      ref="bb1"
    />
  </svg>
</template>

<style scoped lang="scss">
@import "../sass/media.scss";
.svgBanner {
  width: 150%;
  margin-left: -50%;
  position: absolute;
  top: 40px;
  @include l() {
    width: 80%;
    margin-left: 0;
    top: 0;
  }
}
</style>

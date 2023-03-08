export const ani = (sbc, d) => {
  let dur = 0.5,
    begin = d + 1.8 + Math.random(),
    path;
  switch (sbc) {
    case 0:
      path = "M822.037 891.499C727 770 656.085 852.127 605.037 907.499";
      break;
    case 1:
      path = "M936.905 841.509C1005.53 735.568 1060.02 732.343 1176.91 795.509";
      break;
    case 2:
      path = "M799 894C550 583 413 446 211.703 424.402";
      break;
    case 3:
      path = "M903.501 862.961C880.598 437.794 873.72 215.461 963.347 92.9493";
      break;
    case 4:
      path = "M754.707 904.405C714 853 488.082 672.601 424.707 665.405";
      break;
    case 5:
      path = "M843.518 877.136C681.999 362 605.518 139 605.518 31.1352";
      break;
    case 6:
      path = "M913.5 864.02C898.776 693.274 891.743 603.916 901.5 561.02";
      break;
    case 7:
      path = "M829.523 882.147C811.594 842.489 799.623 791.408 779.523 719.147";
      break;
    case 8:
      path = "M888.999 866C876.807 821.658 870.523 797.061 875.502 760.956";
      break;
    case 9:
      path = "M853.511 889.101C850.566 876.953 847.899 868.751 847.511 860.101";
      break;
  }
  return `<set attributeName="opacity" to="1" begin="${begin}s" />
    <animateMotion
        dur="${dur}s"
        begin="${begin}s"
        path="${path}"
        fill="freeze"
        rotate="auto"
        values="0; 1; 2"
        calcMode="paced"
      ></animateMotion>
      <animateTransform
        dur="${dur}s"
        begin="${begin}s"
        attributeName="transform"
        fill="freeze"
        type="scale"
        from="0"
        to="1"
      ></animateTransform>`;
};

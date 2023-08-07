"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const hello = common_vendor.ref("Hello Fish");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(hello.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/CHA_F/Desktop/codes/HBuilderProjects/fish/weixin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "编程知识库",
  description: "积累青少儿编程知识库",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

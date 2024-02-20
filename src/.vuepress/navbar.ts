import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/demo/",
  "/cpp/",
  // {
  //   text: "C++",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  {
    text: "在线OJ系统",
    icon: "book",
    link: "https://oj.daima101.com",
  },
]);

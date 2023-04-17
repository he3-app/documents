import en from "./config/lang/en";
import zh from "./config/lang/zh";
import { mdPlugin } from "./config/plugins";

export default {
  title: "He3 Documents",
  description: "Component from He3 help you create your own plugin fast",
  locales: {
    root: en,
    zh,
  },

  markdown: {
    config: (md) => mdPlugin(md),
  },
};

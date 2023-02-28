import { createI18n } from 'vue-i18n';
import zh from './lang/zh-CN.json';
import en from './lang/en.json';
import de from './lang/de.json';
import es from './lang/es.json';
import fr from './lang/fr.json';
import it from './lang/it.json';
import ja from './lang/ja.json';
import ko from './lang/ko.json';
import pt from './lang/pt.json';
import ru from './lang/ru.json';
import zh_tw from './lang/zh-tw.json';

const i18n = createI18n({
  legacy: false,
  locale: 'zh', // 初始化配置语言
  messages: {
    zh,
    en,
    de,
    es,
    fr,
    it,
    ja,
    ko,
    pt,
    ru,
    zh_tw,
  },
});

export default i18n;

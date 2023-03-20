import light from '../style/antdTheme/light.less?inline';
import dark from '../style/antdTheme/dark.less?inline';

export function setLightMode() {
  document.querySelector(':root')?.removeAttribute('mode');
  styleLoader(light, 'theme');
}

export function setDarkMode() {
  document.querySelector(':root')?.setAttribute('mode', 'dark');
  styleLoader(dark, 'theme');
}
function styleLoader(style: string, id: string) {
  document.querySelector(`#${id}`)?.remove();
  const styleDom = document.createElement('style');
  styleDom.id = id;
  styleDom.innerHTML = style;
  document.head.appendChild(styleDom);
}

export function setHe3() {
  if (typeof window === 'undefined') return;
  window.$he3 = {};
  window.$he3.message = () => {};
  window.$he3.getTheme = () => {};
  window.$he3.subscribeThemeChange = () => {};
  window.$he3.getLastClipboard = () => {
    return new Promise((resolve) => {
      resolve(1);
    });
  };
}

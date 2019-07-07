export default class Page {
  open (path) {
    // Will take the path from conf.js
    browser.url(path)
  }
}

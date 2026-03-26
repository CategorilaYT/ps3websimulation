import { Kernel } from "./system/core/kernel.js";

const elements = {
  boot: document.getElementById("boot-screen"),
  app: document.getElementById("app"),
  canvas: document.getElementById("background-canvas"),
  categories: document.getElementById("xmb-categories"),
  column: document.getElementById("xmb-column"),
  panelView: document.getElementById("panel-view"),
  panelEyebrow: document.getElementById("panel-eyebrow"),
  panelTitle: document.getElementById("panel-title"),
  panelBody: document.getElementById("panel-body"),
  panelList: document.getElementById("panel-list"),
  optionsMenu: document.getElementById("options-menu"),
  optionsItems: document.getElementById("options-menu-items"),
  notificationStack: document.getElementById("notification-stack"),
  contextCategory: document.getElementById("context-category"),
  contextTitle: document.getElementById("context-title"),
  contextSubtitle: document.getElementById("context-subtitle"),
  contextDescription: document.getElementById("context-description"),
  themeLabel: document.getElementById("theme-label"),
  userName: document.getElementById("user-name"),
  userAvatar: document.getElementById("user-avatar"),
  activeUserLabel: document.getElementById("active-user-label"),
  inputMode: document.getElementById("input-mode"),
  messageCount: document.getElementById("message-count"),
  contextMessages: document.getElementById("context-messages"),
  date: document.getElementById("system-date"),
  time: document.getElementById("system-time"),
  themeMeta: document.querySelector('meta[name="theme-color"]'),
  shell: document.getElementById("shell"),
};

const kernel = new Kernel(elements);
kernel.start();

import { Kernel } from "./system/core/kernel.js";

function collectElements() {
  return {
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
}

function showBootstrapError(error) {
  const boot = document.getElementById("boot-screen");
  if (!boot) return;
  boot.classList.remove("boot-screen--hidden");
  const block = boot.querySelector(".boot-screen__logo-block");
  if (!block) return;
  block.innerHTML = `
    <p class="boot-screen__sony">Boot error</p>
    <h1 class="boot-screen__logo">PS3 XMB</h1>
    <p class="boot-screen__sub">Falha ao iniciar a simulacao. Verifique o console do navegador.</p>
  `;
  console.error(error);
}

try {
  const kernel = new Kernel(collectElements());
  kernel.start();
} catch (error) {
  showBootstrapError(error);
}

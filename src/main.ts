import { invoke } from '@tauri-apps/api/core';
import { disable, enable } from '@tauri-apps/plugin-autostart';

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

(async () => {
  await enable();
})();

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke('greet', {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  greetInputEl = document.querySelector('#greet-input');
  greetMsgEl = document.querySelector('#greet-msg');
  document.querySelector('#greet-form')?.addEventListener('submit', e => {
    e.preventDefault();
    greet();
  });
});

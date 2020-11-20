import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import config from '@/config/config';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

sync(store, router);

window.Vault74 = {
  debugEnabled: config.debug,
  /* eslint-disable */
  debug: (...args) => {
    if (window.Vault74.debugEnabled) {
      console.log(
        `%c [Vault74 Debug]: ${args[0]}`,
        'color: #9b59b6; font-weight: bold; font-family: \'Major Mono Display\', monospace;',
        ...args.slice(1, args.length),
      );
    }
  },
  warn: (...args) => {
    if (window.Vault74.debugEnabled) {
      console.log(
        `%c [Vault74 Warn]: ${args[0]}`,
        'color: #e67e22; font-weight: bold; font-family: \'Major Mono Display\', monospace;',
        ...args.slice(1, args.length),
      );
    }
  },
  error: (...args) => {
    console.log(
      `%c [Vault74 Error]: ${args[0]}`,
      'color: #e74c3c; font-weight: bold; font-family: \'Major Mono Display\', monospace;',
      ...args.slice(1, args.length),
    );
  },
  /* eslint-enable */
};

/* eslint-disable */
new Vue({
  el: '#app',
  functional: true,
  router,
  store,
  render(h) {
    return h(App);
  },
});
/* eslint-enable */

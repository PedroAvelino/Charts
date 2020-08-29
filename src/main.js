/* Copyright Pedro Avelino 2020 */

'use strict'

import Vue from 'vue'

import store from '@/store'
import Index from './views/Index.vue'
import router from './router'

class MainApp {

  constructor( ){
    new Vue({
      router,
      store,
      components: { Index },
      render: h => h( Index ),
    }).$mount('#app')
  }
}

/* eslint-disable */
// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

  const app = new MainApp();
});

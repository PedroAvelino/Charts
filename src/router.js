/*
VUE App's MAIN Component.
Copyright (c) 2018. Pedro Avelino,  All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import pgApp from '@/App.vue'
import indexPage from '@/views/Index.vue'
import Admin from '@/views/Admin.vue'


export default new Router({

    mode: 'history',
    routes: [
        { path:"/",             name:"Index", component: indexPage}, 
        { path:"/home",         name:"Home", component: pgApp}, 
        { path:"/admin",        name:"Admin", component: Admin}, 
    ]
});
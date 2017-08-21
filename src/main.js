import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
 import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI);

let baseUrl = 'http://47.94.94.52:3000';
let mockUrl =  'http://192.168.205.123:3000';

axios.defaults.baseURL = baseUrl;
Vue.prototype.$axios = axios;


import 'highlight.js/styles/github-gist.css'
import hljs from 'highlight.js'
hljs.highlightCode = function () {
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, hljs.highlightBlock);
};



new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

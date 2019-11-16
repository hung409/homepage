import './js/test.js';
//import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';

//<!-- 개발버전, 도움되는 콘솔 경고를 포함. -->
//<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
//<!-- 상용버전, 속도와 용량이 최적화됨. -->
//<script src="https://cdn.jsdelivr.net/npm/vue"></script>

function writecom() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';
  return element;
}
document.body.appendChild(writecom());




import Vue from 'vue'
import AppComponent from './vue_component/AppComponent.vue'

new Vue({
  render: h => h(AppComponent)
}).$mount('#app')
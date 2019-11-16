import Vue from 'vue'
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




import AppComponent from './vue_component/AppComponent.vue'

new Vue({
  render: h => h(AppComponent)
}).$mount('#app')

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
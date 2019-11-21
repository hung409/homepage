function writecom() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';
  return element;
}
document.body.appendChild(writecom());


//  bootstrap-vue js
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

//  bootstrap-vue css
import './scss/index.scss';

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
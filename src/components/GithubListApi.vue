<template>
  <div class="github_list">
    <h3>{{ $t('goRepository') }}</h3>
    <ul>
      <li v-for="entry in repos_list" :key="entry.id">
        <b-link :href="entry.html_url">{{ entry.name }}</b-link>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'github_list',
  data: () => {
    return {
      repos_list: []
    }
  },
  created () {
    axios.get('https://api.github.com/users/shyuni4u/repos')
      .then(response => {
        this.repos_list = response.data
      })
      .catch(e => {
        console.log('error : ', e)
      })
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 10px 0;
  li {
    line-height: 2rem;
    padding-left: 10px;
  }
}
.h4, .h5 {
  font-weight: bold;
}
</style>

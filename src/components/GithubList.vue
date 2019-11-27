<template>
  <div class="github_list">
    <ul>
      <li class="item" v-for="entry in repos_list" :key="entry.title">
        <div class="title">{{ entry.title }}</div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <div class="tag">{{ entry.tag }}</div>
        <div class="info">{{ entry.info }}</div>
        <b-button class="more" size="sm" variant="info">{{ $t('more') }}</b-button>
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'github_list',
  data: () => {
    return {
      repos_list: [
        {
          title: 'docker_webserver',
          image: '../src/assets/logo.png',
          tag: '#Docker #PHP #Nginx #MariaDB',
          info: 'Docker Server Setting'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
div {
  user-select: none;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    line-height: 2rem;
    &.item {
      width: 90%;
      margin: 20px auto;
      padding: 20px 0;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      text-align: center;

      .title {
        margin: 10px 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e90ff;
      }
      .image {
        width: 80%;
        height: 50%;
        border-radius: 10px;
        -webkit-box-shadow: 0 0 5px rgba(0,0,0,.4);
        box-shadow: 0 0 5px rgba(0,0,0,.4);
      }
      .used_language {
        padding: 0;
        margin: 10px 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: grey;
      }
      .info {
        margin: 10px 0;
      }
    }
  }
}
</style>

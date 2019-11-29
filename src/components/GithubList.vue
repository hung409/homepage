<template>
  <div class="github_list">
    <ul>
      <li class="item" v-for="entry in repos_list" :key="entry.title">
        <div class="title">{{ entry.title }}</div>
        <a :href="entry.image"
          target="_blank">
          <b-img :src="entry.image" fluid :alt="entry.title"></b-img>
        </a>
        <div class="tag">{{ entry.tag }}</div>
        <div class="info" v-html="entry.info"></div>
        <b-link :href="entry.link" target="_blank">
          <b-button class="more" size="sm" variant="info">{{ $t('more') }}</b-button>
        </b-link>
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
          title: 'OverCam',
          image: require('@/assets/OverCam.png'),
          tag: '#Android #Kotlin',
          info: 'Before & after photos application',
          link: 'https://github.com/shyuni4u/serialTest2.git'
        },
        {
          title: 'docker_webserver',
          image: require('@/assets/docker.jpg'),
          tag: '#Docker #PHP #Nginx #MariaDB',
          info: 'Docker Server Setting',
          link: 'https://github.com/shyuni4u/docker_webserver.git'
        },
        {
          title: 'Gantt.js',
          image: require('@/assets/gantt.js.png'),
          tag: '#HTML #vanilla-js #CSS',
          info: 'Gantt chart used vanilla-js',
          link: 'https://github.com/shyuni4u/gantt.js.git'
        },
        {
          title: 'homepage',
          image: require('@/assets/logo.png'),
          tag: '#HTML #Vuejs #CSS #Javascript',
          info: 'Github Page used vue-cli 3',
          link: 'https://github.com/shyuni4u/homepage.git'
        },
        {
          title: 'QuizPlus',
          image: require('@/assets/QuizPlus.png'),
          tag: '#JSP #Phonegap',
          info: '2012. Dongguk Univ. Software Engineering Project<br/>Quiz Application',
          link: 'https://github.com/shyuni4u/QuizPlus.git'
        },
        {
          title: 'temp_server',
          image: require('@/assets/temp_server.png'),
          tag: '#Docker #Vuejs #Golang #MariaDB',
          info: 'Golang Test Server',
          link: 'https://github.com/shyuni4u/temp_server.git'
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
      .tag {
        padding: 0;
        margin: 10px 0;
        font-size: 1.2rem;
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

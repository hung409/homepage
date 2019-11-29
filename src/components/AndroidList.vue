<template>
  <div class="smart_factory_work">
    <div class="go_direct">
      {{ $t('shortcut') }}: 
      <a
        v-for="entry in projects"
        :key="entry.title"
        :href="'#' + entry.title">
        <b-button
          class="jump"
          size="sm"
          variant="outline-primary">
          {{ '#' + entry.title }}
        </b-button>
      </a>
    </div>
    <div class="work_list">
      <b-card
          v-for="entry in projects"
          :key="entry.title"
          :id="entry.title"
          :title="entry.title"
          :img-src="entry.image"
          img-alt="ScreenShot"
          img-top
          tag="article"
          style="margin: 10px; max-width: 20rem; padding: 5px;">
        <b-card-text v-html="entry.info"></b-card-text>
      </b-card>
    </div>
    <div class="go_top" :style="{ display: checkScroll() }" @click="goTop()">Top</div>
  </div>
</template>

<script>
export default {
  name: "smart_factory_work",
  data: () => {
    return {
      pos: 0,
      projects: [
        {
          slide: 0,
          title: 'KPOP Diary',
          image: require('@/assets/android/kpopdiary_2012.png'),
          info: `KPOP 아이돌 일정 보기`
        },
        {
          slide: 0,
          title: 'OverCam',
          image: require('@/assets/android/overcam_2019.png'),
          info: `Before / After 사진을 일반인도 전문가처럼 !!
            <br/>항목을 지정하여 사진 촬영시 이전 사진을 오버레이하여 구도를 잡는 것을 도와줍니다.`
        }
      ]
    }
  },
  methods: {
    handleScroll() {
      this.pos = window.scrollY;
    },
    checkScroll() {
      if (this.pos > 100) return 'block';
      else return 'none';
    },
    goTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
.work_list {
  display: flex;
  flex-flow: row wrap;
}
.go_direct {
  padding: 10px;

  .jump {
    margin: 2px 5px;
  }
}
.go_top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
}
</style>
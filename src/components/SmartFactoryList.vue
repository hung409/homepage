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
          tag="article"
          style="margin: 20px;">
        <b-card-text>
          <b-carousel
            v-model="entry.slide"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 2px 2px 4px #333;"
          >
            <a
              v-for="sub_entry in entry.images"
              :key="sub_entry.image"
              :href="sub_entry.image"
              target="_blank"
              >
              <b-carousel-slide
                :caption="sub_entry.company + ', ' + sub_entry.date"
                :text="sub_entry.description"
                :img-src="sub_entry.image"
              ></b-carousel-slide>
            </a>
          </b-carousel>
        </b-card-text>
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
          title: 'Gantt Chart',
          images: [
            { company: '탑아이엔디', date: '2018', description: '', image: require('@/assets/smart_factory/gantt_2018_top.png') },
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/gantt_2018_sungam.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/gantt_2017_ijs.png') }
          ]
        },
        {
          slide: 0,
          title: 'Statistics',
          images: [
            { company: '청주폴리텍', date: '2018', description: '', image: require('@/assets/smart_factory/static_2018_cj.png') },
            { company: '주강로보테크', date: '2017', description: '', image: require('@/assets/smart_factory/static_2017_jrt2.png') },
            { company: '주강로보테크', date: '2017', description: '', image: require('@/assets/smart_factory/static_2017_jrt.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/static_2017_ijs3.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/static_2017_ijs2.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/static_2017_ijs.png') }
          ]
        },
        {
          slide: 0,
          title: 'Monitoring',
          images: [
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/monitoring_2018_sungam.png') },
            { company: '청주폴리텍', date: '2018', description: '', image: require('@/assets/smart_factory/monitoring_2018_cj.png') },
            { company: 'NEDEC', date: '2017', description: '', image: require('@/assets/smart_factory/monitoring_2017_nedec.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/monitoring_2017_ijs.png') }
          ]
        },
        {
          slide: 0,
          title: 'Progress',
          images: [
            { company: 'SMA', date: '2017', description: '', image: require('@/assets/smart_factory/progress_2017_sma3.png') },
            { company: 'SMA', date: '2017', description: '', image: require('@/assets/smart_factory/progress_2017_sma2.png') },
            { company: 'SMA', date: '2017', description: '', image: require('@/assets/smart_factory/progress_2017_sma.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/progress_2017_ijs.png') }
          ]
        },
        {
          slide: 0,
          title: 'BOM',
          images: [
            { company: '원풍산업', date: '2018', description: '', image: require('@/assets/smart_factory/bom_2018_wnp.png') },
            { company: '주강로보테크', date: '2017', description: '', image: require('@/assets/smart_factory/bom_2017_jrt.png') }
          ]
        },
        {
          slide: 0,
          title: 'Mobile',
          images: [
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_sungam4.png') },
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_sungam3.png') },
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_sungam2.png') },
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_sungam.png') },
            { company: '펠릭스테크', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_felix.png') },
            { company: '청주폴리텍', date: '2018', description: '', image: require('@/assets/smart_factory/mobile_2018_cj.png') },
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/mobile_2017_ijs.png') }
          ]
        },
        {
          slide: 0,
          title: 'Quality',
          images: [
            { company: '성암기연', date: '2018', description: '', image: require('@/assets/smart_factory/quality_2018_sungam.png') }
          ]
        },
        {
          slide: 0,
          title: 'Storage',
          images: [
            { company: 'DHAC', date: '2017', description: '', image: require('@/assets/smart_factory/storage_2017_dhac.png') }
          ]
        },
        {
          slide: 0,
          title: 'Worklist',
          images: [
            { company: '원풍산업', date: '2018', description: '', image: require('@/assets/smart_factory/worklist_2018_wnp.png') },
            { company: '성암기연', date: '2017', description: '', image: require('@/assets/smart_factory/worklist_2017_sungam.png') },
            { company: '주강로보테크', date: '2017', description: '', image: require('@/assets/smart_factory/worklist_2017_jrt2.png') },
            { company: '주강로보테크', date: '2017', description: '', image: require('@/assets/smart_factory/worklist_2017_jrt.png') },
            { company: 'DHAC', date: '2017', description: '', image: require('@/assets/smart_factory/worklist_2017_dhac.png') }
          ]
        },
        {
          slide: 0,
          title: 'Workplan',
          images: [
            { company: 'IJS', date: '2017', description: '', image: require('@/assets/smart_factory/workplan_2017_ijs.png') },
            { company: '펠릭스테크', date: '2018', description: '', image: require('@/assets/smart_factory/workplan_2018_felix.png') },
            { company: '탑아이엔디', date: '2018', description: '', image: require('@/assets/smart_factory/workplan_2018_top.png') }
          ]
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
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    welcomeMsg: `Welcome to Your Vue.js App`,
    menuAboutMe: `About me`,
    menuProject: `Project`,
    menuProjectSubSmartFactory: `SmartFactory`,
    menuProjectSubAndroid: `Android`,
    menuStudy: `Study`,
    menuEtc: `ETC`,
    menuGithub: `Github`,
    presentName: `Seonu, Kim`,
    presentBirthday: `1988. 11. 11`,
    presentMotto: `Motto: Let's live without regret`,
    presentEducation: `Education`,
    presentEducationMsg: `Dongguk Univ. Computer Engineering`,
    presentCareer: `Career`,
    presentCareerMsg: `2016. 11 ~ 2019. 6 Cubictek`,
    presentProject: `Project`,
    presentProjectMsg:
      `[Android] KPOP-Diary
      <br/>[SmartFactory] SMA
      <br/>[SmartFactory] IJS
      <br/>[SmartFactory] NEDEC
      <br/>[SmartFactory] DHAC
      <br/>[SmartFactory] 원풍
      <br/>[SmartFactory] 청주폴리텍
      <br/>[SmartFactory] 주강로보테크
      <br/>[SmartFactory] 성암기연
      <br/>[SmartFactory] 탑아이엔디
      <br/>[SmartFactory] 펠릭스테크
      <br/>[Android] OverCam`,
  },
  kr: {
    lang: `언어`,
    welcomeMsg: `Vue.js App에 오신 것을 환영합니다`,
    goRepository: `저장소 바로가기`,
    more: `더보기`,
    menuAboutMe: `내 정보`,
    menuProject: `프로젝트`,
    menuProjectSubSmartFactory: `스마트팩토리`,
    menuProjectSubAndroid: `안드로이드`,
    menuStudy: `연구`,
    menuEtc: `기타`,
    menuGithub: `깃허브`,
    presentName: `김선우`,
    presentBirthday: `1988. 11. 11`,
    presentMotto: `좌우명: 후회없이 살자`,
    presentEducation: `학력`,
    presentEducationMsg: `동국대학교. 컴퓨터공학과`,
    presentCareer: `경력`,
    presentCareerMsg: `2016. 11 ~ 2019. 6 큐빅테크`,
    presentProject: `프로젝트`,
    presentProjectMsg:
      `[안드로이드] KPOP-Diary
      <br/>[스마트팩토리] SMA
      <br/>[스마트팩토리] IJS
      <br/>[스마트팩토리] NEDEC
      <br/>[스마트팩토리] DHAC
      <br/>[스마트팩토리] 원풍
      <br/>[스마트팩토리] 청주폴리텍
      <br/>[스마트팩토리] 주강로보테크
      <br/>[스마트팩토리] 성암기연
      <br/>[스마트팩토리] 탑아이엔디
      <br/>[스마트팩토리] 펠릭스테크
      <br/>[안드로이드] 오버캠`,
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});

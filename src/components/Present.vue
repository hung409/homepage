<template>
  <div class="present">
    <ul>
      <li class="h4" v-html="$t('presentName')"></li>
      <li class="pl" v-html="$t('presentBirthday')"></li>
      <li class="pl" v-html="$t('presentMotto')"></li>
      <li><hr/></li>
      <li class="h5" v-html="$t('presentEducation')"></li>
      <li class="pl" v-html="$t('presentEducationMsg')"></li>
      <li><hr/></li>
      <li class="h5" v-html="$t('presentCareer')"></li>
      <li class="pl" v-html="$t('presentCareerMsg')"></li>
      <li><hr/></li>
      <li class="h5" v-html="$t('presentProject')"></li>
      <li class="pl" v-html="$t('presentProjectMsg')"></li>
    </ul>
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  li {
    line-height: 2rem;
    &.pl {
      padding-left: 10px;
      color: #5e5e5e;
    }
  }
}
.h4, .h5 {
  font-weight: bold;
}
</style>

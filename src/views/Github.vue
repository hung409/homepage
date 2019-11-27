<template>
  <div class="github">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="8" class="manual"><Github/></b-col>
        <b-col md="4" class="api"><GithubApi/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Github from "@/components/GithubList.vue";
import GithubApi from "@/components/GithubListApi.vue";

export default {
  name: "github",
  components: {
    Github,
    GithubApi
  }
};
</script>

<style lang="scss">
@media (min-width: 768px) {
  .github {
    .manual {
      border-right: 1px solid #c9c9c9;
    }
  }
}
@media (max-width: 767px) {
  .github {
    .manual {
      border-bottom: 1px solid #c9c9c9;
      margin-bottom: 30px;
    }
  }
}
</style>
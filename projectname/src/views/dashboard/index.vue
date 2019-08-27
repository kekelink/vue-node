<template>
  <div class="dashboard-container">
    <el-card class="box-card">
      功能处于开发阶段
      <!-- <p>功能处于开发阶段</p> -->
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {

   .box-card {
    // width: 100%;
    height: 600px;
    align-content: center;
    text-align: center;
    line-height: 400px;
  }
}
.dashboard {

  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

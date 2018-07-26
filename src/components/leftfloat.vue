<template>
  <div class="card" style="margin-right: 5px!important;box-shadow: 3px 3px 8px #a6acad; text-align: left">
    <div class="card-header mt-5 mb-2 text-muted menuTitle"><img src="../assets/rate.png" alt=""/>Home</div>
    <div class="card-header mt-5 mb-2 text-muted menuTitle"><img src="../assets/rate.png" alt=""/>CM Performance</div>
    <b-list-group>
      <b-list-group-item button @click="handleMenuClick">{{menuText.performanceRating}}</b-list-group-item>
      <b-list-group-item button @click="handleMenuClick">{{menuText.performanceData}}</b-list-group-item>
      <b-list-group-item button @click="handleMenuClick">{{menuText.performanceQuery}}</b-list-group-item>
      <b-list-group-item button @click="handleMenuClick">{{menuText.supplierInput}}</b-list-group-item>
      <b-list-group-item button>{{menuText.performanceRelease}}</b-list-group-item>
    </b-list-group>

    <div class="card-header mt-5 mb-2 text-muted menuTitle"><img src="../assets/performance.png" alt=""/>CM Events</div>
    <b-list-group>
      <b-list-group-item button @click="handleMenuClick">{{menuText.quickNotes}}</b-list-group-item>
      <b-list-group-item button>{{menuText.eventsInsight}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
    export default {
      name: 'LeftFloatComponent',
      data() {
        return {
          menuText: {
            performanceRating: 'Performance Rating',
            performanceData: 'Performance Data',
            performanceQuery: 'Performance Query',
            performanceRelease: 'Performance Release',
            quickNotes: 'Quick Notes',
            eventsInsight: 'Events Insight',
            supplierInput: ' supplier input',
          }
        }
      },
      methods: {
        handleMenuClick(e) {
          switch (e.target.textContent) {
            case this.menuText.performanceRating:
              this.$router.push("/home/supplierscoreinput");
              break;
            case this.menuText.performanceData:
              this.$router.push("/home/performancedata");
              break;
            case this.menuText.quickNotes:
              this.$router.push("/home/performanceRecord");
              break;
            case this.menuText.performanceQuery:
              this.$router.push("/home/scorequery");
              break;
            case this.menuText.supplierInput:
              this.$router.push("/home/supplierInput");
              break;
          }
        },
      }
    }
</script>

<style scoped>
  .menuTitle {
    font-weight: 700;
  }
</style>

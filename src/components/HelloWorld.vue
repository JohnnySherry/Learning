<template>
   <div class="bodycontainer">
     <b-card-group deck style="height: 100%;width: 100%;background-color: rgb(231, 249, 255);">
       <div v-if="!leftMenuOpened" class="leftMenuCloseDiv">
         <div class="triangle_border_right" @click="handleMenuSwitch"></div>
       </div>
       <div v-else class="leftMenuOpenDiv">
         <div style="width: 95%;display: inline-flex">
           <leftfloat/>
         </div>
         <div style="width: 5%;display: inline-flex">
           <div class="triangle_border_left" @click="handleMenuSwitch"></div>
         </div>
       </div>
       <div :class="rightContainerClass">
         <div class="container-fluid fullHeight">
           <router-view></router-view>
         </div>
       </div>
     </b-card-group>
   </div>
</template>

<script>
  import leftfloat from "@/components/leftfloat";

  export default {
      name: 'HelloWorld',
      components:{leftfloat},
    data() {
      return {
        rightContainerClass: 'rightContainerWhileLeftMenuOpen',
        leftMenuOpened: true,
        userContent: ""
      };
    },
    methods: {
      handleMenuSwitch() {
        this.leftMenuOpened = !this.leftMenuOpened;
        if(this.leftMenuOpened){
          this.rightContainerClass='rightContainerWhileLeftMenuOpen';
        }else{
          this.rightContainerClass='rightContainerWhileLeftMenuClose';
        }
      },
      getUserContent() {
        this.$http.get("/user/getuser").then(res => {
          this.userContent = res.bodyText;
      });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftMenuCloseDiv {
    width: 3%;
    margin-left: 5px;
    height: 98%;
  }

  .leftMenuOpenDiv {
    width: 20%;
    height: 98%;
    padding-left: 10px;
    display: flex;
  }

  .rightContainerWhileLeftMenuOpen {
    width: 80%;
    height: 99%;
  }

  .rightContainerWhileLeftMenuClose {
    width: 96%;
    height: 99%;
  }

  .triangle_border_left {
    width: 0;
    height: 0;
    border-width: 60px 15px 60px 0;
    border-style: solid;
    border-color: transparent lightgrey transparent transparent; /*透明 灰 透明 透明 */
    position: absolute;
    top: 40%;
  }

  .triangle_border_right {
    width: 0;
    height: 0;
    border-width: 60px 0 60px 15px;
    border-style: solid;
    border-color: transparent lightgrey transparent lightgrey; /*透明 透明 透明 灰*/
    margin: 40px auto;
    position: relative;
    top: 35%;
  }
</style>

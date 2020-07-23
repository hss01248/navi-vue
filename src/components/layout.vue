<template>
  <div>
    <div>header</div>
    <div class="app-content">content
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
    <div>footer</div>
  </div>


</template>

<script>
    export default {
        name: "layout",
      data () {
        return {
          msg: 'struct'
        }
      }
    }
</script>

<style scoped>

</style>

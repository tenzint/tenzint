<template>
  <div class="home">
    <Name></Name>
  </div>
</template>

<script>
// @ is an alias to /src
import Name from '@/components/Name.vue';

export default {
  name: 'Home',
  components: {
    Name,
  },
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .tenz-block {
    display: block;
    height: 100vh;
    text-align: center;
  }
</style>

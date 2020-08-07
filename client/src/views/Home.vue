<template>
  <div class="home">
    <Name></Name>
    <Skills></Skills>
    <Volunteer></Volunteer>
  </div>
</template>

<script>
// @ is an alias to /src
import Name from '@/components/Name.vue';
import Skills from '@/components/Skills.vue';
import Volunteer from '@/components/Volunteer.vue';

export default {
  name: 'Home',
  components: {
    Name,
    Skills,
    Volunteer,
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

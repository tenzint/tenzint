<template>
  <div class="home">
    <Name class="compItem"></Name>
    <Skills class="compItem"></Skills>
    <Experience class="compItem"></Experience>
    <PersonalProjects class="compItem"></PersonalProjects>
    <Hobby class="compItem"></Hobby>
  </div>
</template>

<script>
const Name = () => import('@/components/Name.vue');
const Skills = () => import('@/components/Skills.vue');
const Experience = () => import('@/components/Experience.vue');
const PersonalProjects = () => import('@/components/PersonalProjects.vue');
const Hobby = () => import('@/components/Hobby.vue');
export default {
  name: 'Home',
  components: {
    Name,
    Skills,
    Experience,
    PersonalProjects,
    Hobby,
  },
};
</script>

<style lang="scss">
  @import '@/sass/variables.scss';

</style>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .compItem {
    min-height: 100vh;
  }
</style>

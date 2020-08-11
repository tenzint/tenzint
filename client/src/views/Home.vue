<template>
  <div class="home">
    <Name></Name>
    <Skills></Skills>
    <Volunteer></Volunteer>
    <SchoolExp></SchoolExp>
    <PersonalProjects></PersonalProjects>
  </div>
</template>

<script>
// @ is an alias to /src
// const Foo = () => import('./Foo.vue')
// lazy loading - async component loading
const Name = () => import('@/components/Name.vue');
const Skills = () => import('@/components/Skills.vue');
const Volunteer = () => import('@/components/Volunteer.vue');
const SchoolExp = () => import('@/components/SchoolExp.vue');
const PersonalProjects = () => import('@/components/PersonalProjects.vue');

export default {
  name: 'Home',
  components: {
    Name,
    Skills,
    Volunteer,
    SchoolExp,
    PersonalProjects,
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

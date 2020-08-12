<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        class="text-center
        mt-8
        mb-0
        pb-0
        "
      >
        <v-avatar
          size="164"
        >
          <v-img
            src="https://d2l0wy9lsui5uy.cloudfront.net/c/u/f67894297b6134a6b759b3a9ec15b6cb/2018/11/20102541/8-acspicious-symbols-in-one-art.jpg"
            alt="Tibetan Auspicious Symbol"
            width="250"
            contain
            aspect-ratio="1"
          >
          </v-img>
        </v-avatar>
        <h1 id="nav-profile" class="text-md-h1
          text-h2
          font-weight-bold
          pt-8
          mb-0 pb-0
          "
        >Tenzin Thabkhae</h1>
      </v-col>
      <v-col class="text-center
        mt-0 pt-0
      " cols="12">
        <h6 class="text-subtitle-2 text-md-body-1 display-1">
          University of Toronto, Software Engineering
        </h6>
        <h4 class="text-body-2 text-md-body-1 font-weight-thin">
          <span class="font-weight-bold">contact: </span>
          <a href="mailto: tenzin.thabkhae@mail.utoronto.ca">tenzin.thabkhae@mail.utoronto.ca</a>
          <span class="mx-4">|</span> <span class="font-weight-bold">github: </span>
          <a href="https://github.com/tenzint"
            target="_blank"
          >github.com/tenzint</a>
          <span class="mx-4">|</span> <span class="font-weight-bold">linkedin: </span>
          <a href="https://www.linkedin.com/in/tenzin-thabkhae-54a37069/"
            target="_blank"
          >www.linkedin.com/in/tenzin-thabkhae-54a37069/</a>
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {

};
</script>

<style scoped>
  a, a:link, a:visited {
    color: #ffffff;
    text-decoration: none;
  }
  a:hover {
    color: #D8B027;
    background-color: #274FD8;
    text-decoration: underline;
    font-weight: bold;
  }
  .roundImg {
    border-radius: 50%;
  }
</style>

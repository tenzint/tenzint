<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="auto" class="text-body-2 text-md-body-1 font-weight-thin">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="mailto: tenzin.thabkhae@mail.utoronto.ca"
              target="_blank"
              icon
              :color="themeColorClass"
              x-large
              text
              tile
              ripple
              rounded
            >
              <v-icon
                :color="counterThemeColorClass"
                x-large
                class="mIcon"
                v-bind="attrs"
                v-on="on"
                >mdi-email</v-icon
              >
            </v-btn>
          </template>
          <span class="font-weight-light"
            >tenzin [ DOT ] thabkhae [ AT ] mail [ DOT ] utoronto [ DOT ]
            ca</span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="auto" class="text-body-2 text-md-body-1 font-weight-thin">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://github.com/tenzint"
              target="_blank"
              icon
              :color="themeColorClass"
              x-large
              text
              ripple
              rounded
              v-bind="attrs"
              v-on="on"
            >
              <v-icon :color="counterThemeColorClass" x-large class="mIcon"
                >mdi-github</v-icon
              >
            </v-btn>
          </template>
          <span class="font-weight-light"
            >github [ DOT ] com [ SLASH ] tenzint</span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="auto" class="text-body-2 text-md-body-1 font-weight-thin">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://www.linkedin.com/in/tenzin-thabkhae-54a37069/"
              target="_blank"
              icon
              :color="themeColorClass"
              x-large
              text
              ripple
              rounded
            >
              <v-icon
                :color="counterThemeColorClass"
                x-large
                class="mIcon"
                v-bind="attrs"
                v-on="on"
                >mdi-linkedin</v-icon
              >
            </v-btn>
          </template>
          <span class="font-weight-light"
            >linkedin [ DOT ] com [ SLASH ] in [ SLASH ] tenzin [ DASH ]
            thabkhae [ DASH ] 54a37069</span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="auto" class="text-body-2 text-md-body-1 font-weight-thin">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://freecodecamp.org/tenzint"
              target="_blank"
              icon
              :color="themeColorClass"
              x-large
              text
              ripple
              rounded
            >
              <v-icon
                :color="counterThemeColorClass"
                x-large
                class="mIcon"
                v-bind="attrs"
                v-on="on"
                >mdi-fire</v-icon
              >
            </v-btn>
          </template>
          <span class="font-weight-light"
            >freecodecamp [ DOT ] org [ SLASH ] tenzint</span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="auto" class="text-body-2 text-md-body-1 font-weight-thin">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="counterThemeColorClass"
              fab
              ripple
              v-bind="attrs"
              v-on="on"
              @click.prevent="downloadResumePdf"
            >
              <v-icon :color="themeColorClass" x-large class="mIcon"
                >mdi-file-account-outline</v-icon
              >
            </v-btn>
          </template>
          <span class="font-weight-light">Download resume</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import * as firebase from 'firebase/app';
import 'firebase/storage';

export default {
  computed: {
    ...mapState(['counterThemeColorClass', 'themeColorClass']),
  },
  methods: {
    downloadResumePdf() {
      const resumeRef = firebase.storage().ref('tenzin_resume.pdf');
      resumeRef
        .getDownloadURL()
        .then((url) => {
          // This can be downloaded directly:
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function () {
            const blob = xhr.response;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'tenzin_resume';
            link.click();
            URL.revokeObjectURL(link.href);
          };
          xhr.open('GET', url);
          xhr.send();
        })
        .catch((error) => {
          // Handle any errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;

            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
            default:
              break;
          }
        });
    },
  },
};
</script>
<style scoped>
a,
a:link,
a:visited {
  color: #fce4ec;
  text-decoration: none;
}
a:hover {
  color: #ab47bc;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20px;
}
#name-two {
  min-height: 70vh;
}
</style>

*to be edited*

This project is the personal website of Tenzin Thabkhae.

https://tenzint.web.app


Steps taken/problems faced while making this website.

* I had old version of NodeJS (8.x.x), so I downloaded the LTS version (v12.18.3 at the time)
* I installed and set up firebase first for web hosting purposes but `firebase init` causes an error, which is understandable since I don't have a skeleton for web app yet.
* I installed vue-cli and created my client folder with it. However, since I was using VSCode IDE and powershell was the default terminal, I encountered an error due to vue.ps1 (.ps1 is powershell file), I deleted this file hastily to get over this error. However, later on during Vuetify installation, I'm unable to use powershell or git bash due to the error "Missing file extension 'vue' for '.../HelloWorld', I later on changed terminal to use `git bash` since I have that vue file. I restored the vue.ps1 file. 
* If I face this again in future, do this: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser`. Source: https://github.com/vuejs/vue-cli/issues/3424
* After installing vuetify using `vue add vuetify`, there was an error due to missing 'vuetify/lib', the documentation didn't tell us to do `npm install` under client directory. Doing `npm install` solved this error.
* Regarding that error during firebase init, turns out I need to reauthenticate myself, so I did `firebase login --reauth`, which redirected me to login to my gmail on browser and solved this issue.
* During init, I'm using hosting and real-time database. I'm planning to get feedbacks from people and store it in db. 
* Vue cli doc tells me to name the firebase public folder as 'dist', as public is already used by vue/vuetify. I remember once keeping it as public and I had to reinstall everything in the past.

* deleted firebase init results in root directory, and redid firebase init in client directory. During `npm run build`, the old error regarding vue.ps1 resurfaced. I ran `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser` in root directory via powershell to fix this. Now dist is ready to be deployed!

* when changing color of `a` links, it's important to also change color of `a:visited`, especially if the background color of link is blue (default color)
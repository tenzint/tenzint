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

-------------------------------------------------

* Added a color theme. Made sure to only use color theme, black, white, or shades of grey. Got rid of other colors like blue etc

* Made web app spacious. Every major components have a min-height of 100vh. For certain elements, I gave them grid-col of 4 instead of 6 for laptops+
and grid-col of 8 instead of 12 for mobiles. Of course with justify="center" on grid-row.

* Made lazy loading for body of components, excluding the titles. Went beyond the default settings and made components to vanish off-screen.
Reference: <Stack Overflow Page>

* Updated navigation drawer list links. These links will no longer use router via `to` prop.
Instead, they will use `goTo` prop on ID'ed elements. I also used v-intersect, vuex and v-list-item to highlight the right link based on scroll position.
Reference: <https://stackoverflow.com/questions/59614413/update-selected-item-in-vuetify-navigation-drawer-while-scrolling-vertical/63554705#63554705>

* Used transitions on components, mode="out-in". Check out Hobby 'More/Less Details' buttons.

Also, made a simple animation (actually, nested transitions) on the first page. Added delay for human intimacy.

* Changed wordy links of contact info into icon buttons with tooltips on hover. Now using a button to download resume pdf from firebase storage. Not done yet.

* Fixed the bug on 'more/less-details' button of Hobby/TableTennis. My data var was 'tabletennisSummary', and I was misusing 'tableTennisSummary' here and there. I'm surprised the UX was working after a first unproductive click.
Now, the bug is fixed.

-------------------------------------
<template>
  <div class="mProject">
    <v-card
      class="mobileProjectCard"
      style="color: white; margin-left: auto; margin-right: auto"
      max-width="350"
      color="#3680d0"
    >
      <div class="mProjectCardDetails">
        <iframe
          style="margin-left: auto; margin-right: auto"
          v-if="isVideo"
          :src="project.url"
          width="320"
          height="200"
        ></iframe>
        <v-img
          v-else
          style="margin-left: auto; margin-right: auto"
          :src="getImg"
          width="300"
          height="200"
        ></v-img>
        <p class="mProjectCardText">
          <span class="bolder">{{ project.name }}</span>
          {{ project.date }}
          <br />
          <a class="importantLinks" :href="project.gitHub" target="_blank"
            >Github Repository</a
          >
          <br />
          Language: <span class="bold">{{ project.language }}</span>
          <br />
          <span class="bold">Fun Fact:</span> {{ project.funFact }}
          <br />
          <a
            class="importantLinks"
            :href="project.externalLink"
            target="_blank"
            v-if="isExternal"
            >PLAY!</a
          >
          <br v-if="isExternal" />
          <span class="bold">Biggest Challenge: </span
          >{{ project.biggestChallenge }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "mProjectCard",
  data() {
    return {
      imgURL: "../../../assests",
    };
  },
  props: {
    project: Object,
    default() {
      return {
        name: "N/A",
        date: "start date - end date",
        gitHub: "https://github.com/gpetty002",
        language: "N/A",
        funFact: "There is an error",
        biggestChallenge: "fixing this error ;)",
        media: "img",
        url: "/Users/gissellepetty/Desktop/my_website/src/assets/Squidward-Looking-Out-Window-Meme.png",
        externalLink: "N/A",
      };
    },
  },
  computed: {
    isVideo() {
      if (this.project.media == "video") {
        return true;
      }
      return false;
    },
    getImg() {
      return require("@/assets" + this.project.url);
    },
    isExternal() {
      if (this.project.media == "game") {
        return true;
      } else if (this.project.media == "mobile") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
.mobileProjectCard {
  color: white;
}
.mProjectCardDetails {
  padding-top: 2vh;
  text-align: left;
  margin-left: 1.5vh;
  margin-right: 1.5vh;
  padding-bottom: 1.5vh;
}
.mProjectCardText {
  margin-top: 1.5vh;
}
</style>

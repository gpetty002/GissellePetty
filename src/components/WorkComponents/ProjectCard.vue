<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card class="projectCard" :elevation="hover ? 15 : 4" color="#3680d0">
        <br />
        <p class="projectCardTitle">
          <span class="bolder">{{ project.name }}</span
          >, {{ project.date }}
        </p>

        <div class="projectCardText">
          <a :href="project.gitHub" target="_blank" class="importantLinks"
            >Github Repository</a
          >

          <p>
            Language:
            <span class="bold">{{ project.language }}</span>
          </p>

          <p><span class="bold">Fun Fact: </span>{{ project.funFact }}</p>

          <a
            :href="project.externalLink"
            target="_blank"
            v-if="isExternal"
            class="gitHublink importantLinks"
            >PLAY!</a
          >

          <br v-if="isExternal" />
          <p>
            <span class="bold">Biggest Challenge: </span
            >{{ project.biggestChallenge }}
          </p>

          <!-- <a
            v-if="isHistoricalStories"
            href="/historicalStories"
            class="gitHublink importantLinks"
            target="_blank"
            >Learn more about Historical Stories</a
          > -->
        </div>

        <iframe
          class="projectCardVideo"
          v-if="isVideo"
          :src="project.url"
          width="480"
          height="320"
        ></iframe>
        <v-img
          class="projectCardImg"
          v-else
          :src="getImg"
          width="480"
          height="320"
        ></v-img>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      imgURL: "../../assets",
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
        funFact: "there is an error",
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
    isHistoricalStories() {
      if (this.project.externalLink == "newPage") {
        return true;
      }
      return false;
    },
  },
  mounted() {},
};
</script>

<style>
.projectCard {
  position: relative;
  background-color: #006ac75b;
  height: 500px;
  width: 1100px;
  margin-bottom: 50px;
}
.projectCardTitle {
  padding-left: 50px;
  font-size: 30px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 15px;
}
.projectCardText {
  /* padding-top: 40px; */
  font-size: 17px;
  width: 50%;
  padding-left: 50px;
  padding-right: 30px;
  color: white;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.projectCardImg {
  position: absolute;
  top: 12vh;
  left: 50.5%;
  border: 5px solid black;
}
.projectCardVideo {
  position: absolute;
  border: 5px solid black;
  top: 12vh;
  left: 50.5%;
}
</style>

<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card class="projectCard" :elevation="hover ? 15 : 4" color="#3680d0">
        <br />
        <p class="projectCardTitle">
          <span class="bolder">{{ project.name }}</span
          >, {{ project.date }}
        </p>

        <a
          :href="project.gitHub"
          target="_blank"
          class="gitHublink projectCardText"
          >GitHub Repository</a
        >
        <br />

        <p class="projectCardText">
          Programming Language:
          <span class="bold">{{ project.language }}</span>
        </p>

        <p class="projectCardText">
          <span class="bold">Fun Fact: </span>{{ project.funFact }}
        </p>

        <a
          :href="project.externalLink"
          target="_blank"
          v-if="isExternal"
          class="gitHublink projectCardText"
          >PLAY!</a
        >

        <p class="projectCardText">
          <span class="bold">Biggest Challenge: </span
          >{{ project.biggestChallenge }}
        </p>
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
  },
  mounted() {},
};
</script>

<style>
.projectCard {
  position: relative;
  background-color: #006ac75b;
  height: 500px;
  width: 70%;
  top: 150px;
  left: 15%;
}
.projectCardTitle {
  padding-left: 20px;
  font-size: 30px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.projectCardText {
  /* padding-top: 40px; */
  font-size: 17px;
  width: 50%;
  padding-left: 20px;
  color: white;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.projectCardImg {
  position: absolute;
  top: 22%;
  left: 50.5%;
}
.projectCardVideo {
  position: absolute;
  border: 1px solid #006ac7ce;
  top: 22%;
  left: 50.5%;
}
.gitHublink:link {
  font-weight: bold;
  color: white;
}
.gitHublink:visited {
  font-weight: bold;
  color: white;
}
</style>

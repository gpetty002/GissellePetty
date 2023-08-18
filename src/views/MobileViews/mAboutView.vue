<template>
  <div class="mobileAbout" id="mAbout">
    <v-img
      class="mobileAboutMePicture"
      src="../../assets/FlowerPicture.png"
    ></v-img>
    <div class="mobileAboutText">
      <h3 class="mTitle">About Me.</h3>
      <h3 class="mName">
        Welcome to my website, I'm
        <span class="bold luckyBlueText">Gisselle Petty</span>.
      </h3>
      <br />
      <p class="mBio">
        I'm a <span class="bold luckyBlueText">software engineer</span> with
        experience in
        <span class="bold luckyBlueText"
          >fullstack development, web and mobile development, and game
          development</span
        >. <br />
        <br />
        I'm most familiar with the languages and frameworks
        <span class="bold luckyBlueText"
          >Javascript, Vue.js, React, C/C++, ImGui, Swift</span
        >. <br />
        <br />
        I'm currently a fourth-year studying Computer Science at the
        <span class="bold luckyBlueText">University of California, Davis</span>.
        <br />
        <br />

        As a software engineer, my main mission to
        <span class="bold luckyBlueText">creatively code</span>. What does this
        mean? While I have passion to grow and explore as much as possible
        through my experience and projects, I love to focus and embrace Computer
        Science as an art. Just as a painter uses their paintbrush to paint a
        beautiful painting on a canvas, a programmer uses their keyboard to
        develop a powerful application on a laptop. Every decision whether its
        the color of a notification, or where to store an application's API GET
        request routes is an artistic choice made by the artist. However,
        creatively coding isn't only dependent on the artist, but also an
        application's community - the other artists collarborating on the app
        and the people who will use application part of their daily routine.

        <br />
        <br />
        Connect with me on my socials!
        <br />
        <button class="mobileIconBtn" @click="goToLinkedIn()">
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            size="2x"
            color="#006ac7"
          />
        </button>
        <button class="mobileIconBtn" @click="goToGithub()">
          <font-awesome-icon
            icon="fa-brands fa-github"
            size="2x"
            color="#006ac7"
          />
        </button>

        <button class="mobileIconBtn" @click="goToYoutube()">
          <font-awesome-icon
            icon="fa-brands fa-youtube"
            size="2x"
            color="#006ac7"
          />
        </button>

        <a href="mailto:gissellepetty@gmail.com?Subject=Hello%20User">
          <button class="mobileIconBtn">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              size="2x"
              color="#006ac7"
            />
          </button>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mAboutView",
  components: {},
  methods: {
    goToLinkedIn() {
      window.open("https://www.linkedin.com/in/gisselle-petty/");
    },
    goToGithub() {
      window.open("https://github.com/gpetty002");
    },
    goToYouTube() {
      window.open("https://www.youtube.com/channel/UCpo10L6qcl8SYIs93cce3yQ");
    },
  },
};
</script>

<style>
.mobileAbout {
  padding-top: 15vh;
  padding-bottom: 10vh;
}
.mobileAboutMePicture {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3vh;
  width: 70%;
}

.mobileAboutText {
  text-align: left;
  margin-left: 3vh;
  margin-right: 2vh;
}

.mTitle {
  font-size: 28px;
}

.mName {
  font-size: 18px;
}

.mobileIconBtn {
  margin-right: 2vh;
  margin-top: 1vh;
}
</style>

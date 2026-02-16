<template>
  <div class="mobileAbout" id="mAbout">
    <v-img
      class="mobileAboutMePicture"
      src="../../assets/aboutPicture.jpg"
    ></v-img>
    <div class="mobileAboutText">
      <h3 class="mTitle">About Me.</h3>
      <h3 class="mName">
        Welcome to my website, I'm
        <span class="bold luckyBlueText">Gisselle Petty</span>.
      </h3>
      <br />
      <p class="mBio">
        I'm a
        <span class="bold luckyBlueText">software engineer at Microsoft</span>
        based in <span class="bold luckyBlueText">New York City</span> with
        experience in
        <span class="bold luckyBlueText">full-stack development</span>.
        <br /><br />

        I'm most familiar with the languages and frameworks
        <span class="bold luckyBlueText"
          >JavaScript, TypeScript, Vuejs, C/C++, React, Swift, and Jest</span
        >. <br /><br />

        As a software engineer, my main mission is to
        <span class="bold luckyBlueText">creatively code</span>. To me, computer
        science is an art form. A painter uses a brush to shape color on canvas
        — a programmer uses a keyboard to shape behavior, interaction, and
        experience. Every decision — from the color of a notification to the
        structure of an API — is an intentional design choice. Creative coding
        also extends beyond the individual developer. It lives in collaboration:
        the engineers building together and the people who integrate the
        application into their daily lives. Software becomes meaningful when it
        becomes part of someone's routine. <br /><br />

        Explore my projects to see where I creatively code!

        <br /><br />

        When I'm not coding, you can find me on a morning run, near an ocean, or
        listening to LL Cool J.

        <br /><br />

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
  padding-bottom: 5vh;
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

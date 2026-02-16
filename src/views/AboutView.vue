<template>
  <div class="about">
    <v-img class="aboutMe-Picture" src="../assets/aboutPicture.jpg"></v-img>
    <h3 class="aboutMe-Title">About Me.</h3>
    <h3 class="aboutMe-Name">
      Welcome to my website, I'm
      <span class="bold luckyBlueText">Gisselle Petty</span>.
    </h3>
    <p class="bio">
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
      science is an art form. A painter uses a brush to shape color on canvas —
      a programmer uses a keyboard to shape behavior, interaction, and
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

      <button class="iconBtn" @click="goToLinkedIn()">
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          size="2x"
          class="icons one"
          color="#006ac7"
        />
      </button>
      <button class="iconBtn" @click="goToGithub()">
        <font-awesome-icon
          icon="fa-brands fa-github"
          size="2x"
          class="icons two"
          color="#006ac7"
        />
      </button>
      <button class="iconBtn" @click="goToYoutube()">
        <font-awesome-icon
          icon="fa-brands fa-youtube"
          size="2x"
          class="icons three"
          color="#006ac7"
        />
      </button>
      <a href="mailto:gissellepetty@gmail.com?Subject=Hello%20User"
        ><button
          class="iconBtn"
          href="mailto:gissellepetty@gmail.com?Subject=Hello%20User"
        >
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            size="2x"
            class="icons four"
            color="#006ac7"
          /></button
      ></a>
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  methods: {
    goToLinkedIn() {
      window.open("https://www.linkedin.com/in/gisselle-petty/");
    },
    goToGithub() {
      window.open("https://github.com/gpetty002");
    },
    goToYoutube() {
      window.open("https://www.youtube.com/channel/UCpo10L6qcl8SYIs93cce3yQ");
    },
  },
};
</script>

<style>
.about {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
  background-color: white;
}

.aboutMe-Picture {
  position: absolute;
  width: 33%;
  top: 20%;
  left: 8%;
  border: 5px solid rgba(0, 0, 0, 0.207);
}

.aboutMe-Title {
  position: absolute;
  top: 15%;
  left: 48%;
  font-weight: normal;
  font-size: 35px;
}

.aboutMe-Name {
  position: absolute;
  top: 23%;
  left: 48%;
  font-weight: normal;
  font-size: 28px;
}

.bio {
  position: absolute;
  width: 48.5%;
  top: 30%;
  left: 48%;
  font-size: 18px;
}

.icons {
  position: absolute;
  top: 98%;
}

.icons:hover {
  color: black;
}
.icons.one {
  left: 0.5%;
}
.icons.two {
  left: 10%;
}

.icons.three {
  left: 20%;
}

.icons.four {
  left: 31%;
}
</style>

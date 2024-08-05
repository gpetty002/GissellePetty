<template>
  <div class="about">
    <v-img class="aboutMe-Picture" src="../assets/AboutPicture.JPG"></v-img>
    <h3 class="aboutMe-Title">About Me.</h3>
    <h3 class="aboutMe-Name">
      Welcome to my website, I'm
      <span class="bold luckyBlueText">Gisselle Petty</span>.
    </h3>
    <p class="bio">
      I'm a <span class="bold luckyBlueText">software engineer</span> with
      experience in
      <span class="bold luckyBlueText"
        >fullstack development,web development and mobile development</span
      >. <br /><br />
      I'm most familiar with the languages and frameworks
      <span class="bold luckyBlueText"
        >Javascript, Vuejs, C/C++, React, and Swift</span
      >. <br /><br />
      I'm currently studying Computer Science at the
      <span class="bold luckyBlueText">University of California, Davis</span>. I
      am graduating <span class="bold luckyBlueText">June 2025</span>.
      <br /><br />

      As a software engineer, my main mission is to
      <span class="bold luckyBlueText">creatively code</span>. What does this
      mean? While I have a passion to grow and explore as much as possible
      through my experience and projects, I love to focus and embrace Computer
      Science as an art. Just as a painter uses their paintbrush to paint a
      beautiful painting on a canvas, a programmer uses their keyboard to
      develop a powerful application on a laptop. Every decision whether its the
      color of a notification, or where to store an application's API GET
      request routes is an artistic choice made by the artist. However,
      creatively coding isn't only dependent on the artist, but also an
      application's community - the other artists collaborating on the app and
      the people who will use the application part of their daily routine.

      <br /><br />

      Explore my projects to see where I creatively code!

      <br /><br />

      When I'm not creatively coding, I love to spend my time cooking meals,
      such as my famous tofu and brocolli bowl, going out for morning runs, and
      spending time with close friends at the beach. There's nothing like
      listening to the ocean!

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
  height: 120vh;
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

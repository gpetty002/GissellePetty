<template>
  <div class="homeTextLayout">
    <h3 class="welcomeText slideLeft">Hello,<br />I'm Gisselle.</h3>
    <h4 class="homeTagline slideLeft">
      Fullstack Developer | Software Enthusiast | Creative Mind
    </h4>
    <v-img class="homeSelfie slideLeft" src="@/assets/santaMonica.png"></v-img>
    <v-btn
      elevation="15"
      class="homeResumeBtn slideLeft"
      href="GissellePettyResume.pdf"
      download
      >Resume</v-btn
    >
    <h3 class="scrollLabel">Scroll to Explore</h3>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: "HomeText",
};
</script>

<style>
.homeSelfie {
  position: absolute;
  width: 30%;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.215);
  overflow-y: hidden;
}
.welcomeText {
  position: absolute;
  font-size: 50px;
  width: 80%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  overflow-x: hidden;
  text-shadow: 10px 10px 12px rgba(0, 0, 0, 0.343);
}
.homeTagline {
  position: absolute;
  font-size: 20px;
  width: 100%;
  top: 56%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: white;
  overflow-x: hidden;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.343);
}
.homeResumeBtn {
  position: absolute;
  font-size: 20px;
  width: 10%;
  top: 62%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: white;
}
.homeResumeBtn:hover {
  color: #006ac7;
}
.scrollLabel {
  position: absolute;
  font-size: 20px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.dot {
  background: white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  animation: pulse 2s infinite;
  position: absolute;
  top: 93%;
  left: 49%;
  transform: translate(-50%, -50%) scale(1);
}

.slideLeft {
  animation: slideLeft 1s linear forwards;
}

.homeResumeBtn.slideLeft {
  animation: slideBtn 1s linear forwards;
}

.homeSelfie.slideLeft {
  animation: slideSelfie 1s linear forwards;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes slideLeft {
  0% {
    transform: translate(-25%, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

@keyframes slideBtn {
  0% {
    transform: translate(100%, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

@keyframes slideSelfie {
  0% {
    transform: translate(50%, -50%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
</style>

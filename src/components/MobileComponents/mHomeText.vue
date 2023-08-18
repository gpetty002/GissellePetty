<template>
  <div class="mHomeTextLayout center">
    <v-img class="mobileSelfie" src="@/assets/santaMonica.png"></v-img>
    <h3 style="font-size: 30px">Hello, I'm Gisselle</h3>
    <h4>Software Engineer | Creative Mind</h4>
    <v-btn
      class="mobileResumeBtn"
      elevation="2"
      href="GissellePettyResume.pdf"
      download
      >Resume</v-btn
    >

    <h3 class="mobileScroll">Scroll to Explore</h3>
    <div class="mobileDot"></div>
  </div>
</template>

<script>
export default {
  name: "mHomeText",
};
</script>

<style>
.mHomeTextLayout {
  color: white;
  font-size: 16px;
  font-weight: bolder;
  padding-top: 20vh;
  text-align: center;
}

.mobileSelfie {
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2vh;
}

.mobileResumeBtn {
  margin-top: 1.5vh;
  color: white;
}

.mobileScroll {
  font-size: 17px;
  padding-top: 20vh;
  padding-bottom: 1vh;
}

.mobileDot {
  background: white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  animation: pulse 2s infinite;
  margin-left: auto;
  margin-right: auto;
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
</style>

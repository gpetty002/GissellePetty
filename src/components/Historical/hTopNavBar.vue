<template>
  <v-app-bar elevation="0" color="#171A23" app>
    <v-btn plain :style="{ color: hover ? '#171A23' : 'white' }"
      >Historical Stories</v-btn
    >
    <v-spacer></v-spacer>
    <v-btn plain :style="{ color: hover ? '#171A23' : 'white' }">About</v-btn>
    <v-btn plain :style="{ color: hover ? '#171A23' : 'white' }"
      >Contribute</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "hTopNavBar",
  data: () => ({}),
};
</script>

<style></style>

<template>
  <v-footer class="mFooter" dark padless>
    <v-hover>
      <v-card
        flat
        tile
        style="width: 100%"
        class="black lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            @click="goToSite(icon.iconLink)"
          >
            <font-awesome-icon
              :icon="icon.iconName"
              size="2x"
              class="mmFooterIcons"
              color="#006ac7"
            />
          </v-btn>
        </v-card-text>
        <br />

        <v-card-text class="white--text pt-0"> Creatively Code </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Gisselle Petty</strong>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-footer>
</template>

<script>
export default {
  name: "mFooterBar",
  data: () => ({
    icons: [
      {
        iconName: "fa-brands fa-linkedin",
        iconLink: "https://www.linkedin.com/in/gisselle-petty/",
      },
      {
        iconName: "fa-brands fa-github",
        iconLink: "https://github.com/gpetty002",
      },
      {
        iconName: "fa-brands fa-youtube",
        iconLink: "https://www.youtube.com/channel/UCpo10L6qcl8SYIs93cce3yQ",
      },
      {
        iconName: "fa-solid fa-envelope",
        iconLink: "mailto:gissellepetty@gmail.com?Subject=Hello%20User",
      },
    ],
  }),
  methods: {
    goToSite(link) {
      window.open(link);
    },
  },
};
</script>

<style>
.mFooter {
  top: 10vh;
}
</style>

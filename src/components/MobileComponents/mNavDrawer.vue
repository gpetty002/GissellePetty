<template>
  <div class="navDrawer">
    <v-navigation-drawer
      class="navDrawer"
      absolute
      height="100vh"
      :v-model="{ drawer }"
    >
      <v-list-item title="Gisselle Petty">
        <v-list-item-avatar>
          <img src="../../assets/santaMonica.png" />
        </v-list-item-avatar>
        Gisselle Petty
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item title="About Me">About Me</v-list-item>
        <v-list-item title="Work Experience">Work Experience</v-list-item>
        <v-list-item title="Projects">Projects</v-list-item>
        <v-list-item title="Resume">Resume</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "mNavDrawer",
  props: {
    drawer: {
      default: null,
      type: Boolean,
    },
  },
};
</script>

<style>
.navDrawer {
  color: black;
  font-size: large;
}
</style>

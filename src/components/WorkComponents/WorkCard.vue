<template>
  <div class="workCard">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 15 : 4" max-width="400">
        <div class="cardBackground">
          <font-awesome-icon
            class="cardIcon justify-center"
            :icon="job.fontIcon"
            color="white"
            size="5x"
            :style="{ left: cardIcon }"
          />

          <v-card-title class="cardTitle" v-bind:style="{ left: titlePos }">{{
            job.company
          }}</v-card-title>
          <div class="cardDetails" v-if="hover">
            <h4 class="cardDetails-Title">
              <span class="luckyBlueText bolder">{{ job.role }}</span> @
              <span class="normal">{{ job.company }}</span>
            </h4>
            <p class="cardDetails-Dates normal">
              {{ job.startDate }} - {{ job.endDate }}
            </p>
            <template v-for="(index, i) in job.details">
              <v-col
                class="cardDetails-Details"
                max-width="100"
                :key="i"
                cols="20"
                md="20"
              >
                <p>- {{ index }}</p>
              </v-col>
            </template>
          </div>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  data() {
    return {
      titlePos: "25%",
      cardIcon: "38%",
    };
  },
  props: {
    job: Object,
    default() {
      return {
        role: "N/A",
        company: "N/A",
        startDate: "start Date",
        endDate: "end Date",
        details: "Missing details",
        fontIcon: "fa-solid fa-loader",
      };
    },
  },
  methods: {
    changePos() {
      if (this.job.company.length < 10) {
        this.titlePos = "30.5%";
        this.cardIcon = "36.5%"; // 38
      }
    },
  },
  mounted() {
    this.changePos();
  },
};
</script>

<style>
.cardBackground {
  position: relative;
  background-color: rgb(0, 106, 199, 0.855);
  height: 350px;
  transition: 0.5s ease-in-out;
}
.cardBackground:hover {
  background-color: rgba(255, 255, 255, 0.398);
  transition: 0.5s;
}
.cardBackground:hover .cardDetails {
  opacity: 1;
}
.cardIcon {
  position: absolute;
  top: 34%;
  left: 38%;
}
.cardTitle {
  position: absolute;
  font-weight: 800;
  font-size: 28px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  top: 60%;
  left: 25%;
  translate: (-50%, 50%);
}
.cardDetails {
  opacity: 1;
  position: relative;
  background-color: rgba(0, 0, 0, 0.109);
  height: 350px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  opacity: 0;
}

.cardDetails-Title {
  /* position: absolute; */
  font-size: 18px;
  padding-top: 20px;
  /* left: 3%; */
  text-align: center;
}
.cardDetails-Dates {
  text-align: center;
  font-weight: bold;
}

.cardDetails-Details {
  /* position: absolute; */
  font-size: 16px;
  /* top: 20%; */
  /* left: 3%; */
  padding-left: 10px;
  font-weight: 600;
}
</style>

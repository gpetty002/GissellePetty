<template>
  <div class="workCard">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 15 : 4" max-width="450">
        <div class="cardBackground">
          <div class="iconContainer">
            <font-awesome-icon
              class="cardIcon"
              :icon="job.fontIcon"
              color="white"
              size="5x"
            />
          </div>

          <v-card-title class="cardTitle">{{ job.company }}</v-card-title>

          <div class="cardDetails" v-if="hover">
            <h4 class="cardDetails-Title">
              <span class="luckyBlueText bolder">{{ job.role }}</span> @
              <span class="normal">{{ job.company }}</span>
            </h4>
            <p class="cardDetails-Dates normal">
              {{ job.startDate }} - {{ job.endDate }}
            </p>
            <template v-for="(index, i) in job.details">
              <div :key="i" class="cardDetails-Details">
                <p>- {{ index }}</p>
              </div>
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
  background-color: rgb(0, 106, 199, 0.855);
  height: 450px;
  width: 450px;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.cardBackground:hover {
  background-color: rgba(255, 255, 255, 0.398);
  transition: 0.5s;
}
.cardBackground:hover .cardDetails {
  opacity: 1;
}
.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
}
.cardTitle {
  font-weight: 800;
  font-size: 28px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
}
.cardDetails {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.109);
  height: 450px;
  width: 450px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  opacity: 0;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  position: absolute; /* Position it on top of the card */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.5s ease-in-out;
}

.cardDetails-Title {
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
}
.cardDetails-Dates {
  text-align: center;
  font-weight: bold;
}

.cardDetails-Details {
  font-size: 18px;
}
</style>

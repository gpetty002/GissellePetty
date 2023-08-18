<template>
  <div class="mobileWorkCard">
    <v-card
      :elevation="4"
      style="margin-left: auto; margin-right: auto"
      max-width="350"
    >
      <div class="mWorkCardDetails">
        <h4 class="mWorkCardDetails-Title">
          <span class="luckyBlueText bolder">{{ job.role }}</span> @
          <span class="luckyBlueText bold">{{ job.company }}</span>
        </h4>
        <p class="mWorkCardDetails-Dates normal">
          {{ job.startDate }} - {{ job.endDate }}
        </p>
        <template v-for="(index, i) in job.details">
          <v-col class="mWorkCardDetails-Details" :key="i" cols="20" md="13">
            <p>- {{ index }}</p>
          </v-col>
        </template>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "mWorkCard",
  props: {
    job: Object,
    default() {
      return {
        role: "N/A",
        company: "N/A",
        startDate: "start date",
        endDate: "end date",
        details: "Missing details",
        fontIcon: "fa-solid fa-loader",
      };
    },
  },
};
</script>

<style>
.mobileWorkCard {
  padding-top: 2.5vh;
}

.mWorkCardDetails {
  text-align: center;
  background-color: rgba(196, 196, 196, 0.398);
}
.mWorkCardDetails-Title {
  padding-top: 1vh;
}
.mWorkCardDetails-Details {
  text-align: left;
  padding-left: 1.5vh;
  padding-right: 1.5vh;
  padding-bottom: 1vh;
}
</style>

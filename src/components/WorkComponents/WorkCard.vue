<template>
  <div class="workCard">
    <v-card class="jobCard" :class="{ expanded: hover }" elevation="6">
      <div
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @focusin="hover = true"
        @focusout="hover = false"
      >
        <!-- Header -->
        <div class="cardHeader">
          <font-awesome-icon class="cardIcon" :icon="job.fontIcon" size="4x" />
          <div class="headerText">
            <h3 class="company">{{ job.company }}</h3>
            <p class="dates">{{ job.startDate }} - {{ job.endDate }}</p>
          </div>
        </div>

        <!-- Details -->
        <transition name="expand">
          <div v-if="hover" class="details">
            <h4 class="role">
              {{ job.role }}
            </h4>

            <ul class="bulletList">
              <li v-for="(detail, i) in job.details" :key="i">
                {{ detail }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </v-card>
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
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.workCard {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

/* Base Card */
.jobCard.v-card {
  width: 420px;
  max-width: 90vw;
  padding: 20px;
  transition: all 0.35s ease;
  background: rgb(0, 106, 199, 0.85);
  color: white;
}

/* Hover expansion */
.jobCard.expanded {
  background: rgba(196, 196, 196, 0.398);
}

.jobCard.expanded .cardIcon {
  color: rgb(0, 106, 199, 0.85);
}

.jobCard.expanded .company {
  color: rgb(0, 106, 199, 0.85);
}

.jobCard.expanded .dates {
  color: black;
}

/* Header */
.cardHeader {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cardIcon {
  flex-shrink: 0;
}

.headerText {
  display: flex;
  flex-direction: column;
}

.company {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
}

.dates {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Details Section */
.details {
  margin-top: 20px;
}

.role {
  text-align: center;
  margin-bottom: 10px;
  color: rgb(0, 106, 199, 0.85);
}

/* Bullets */
.bulletList {
  padding-left: 18px;
  line-height: 1.6;
  color: black;
}

.bulletList li {
  margin-bottom: 8px;
}

/* Animation */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

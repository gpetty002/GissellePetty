<template>
  <div class="projects" id="projectView">
    <h3 class="projectsTitle">
      <span class="bold luckyBlueText">Projects</span>
    </h3>
    <hr class="projectBorder" />
    <v-row class="projectList">
      <template v-for="(index, i) in myProjects">
        <div :key="i">
          <ProjectCard :project="index"></ProjectCard>
        </div>
      </template>
    </v-row>
  </div>
</template>

<script>
import enums from "../../server/enums/enums";
import ProjectCard from "@/components/WorkComponents/ProjectCard.vue";
export default {
  name: "ProjectView",
  data() {
    return {
      myProjects: enums.PROJECTS,
    };
  },
  components: { ProjectCard },
};
</script>

<style>
.projects {
  position: relative;
  width: 100%;
  height: 530vh;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
}
.projectsTitle {
  font-size: 50px;
  text-align: center;
}
.projectBorder {
  display: block;
  width: 500px;
  height: 3px;
  margin: 0 auto;
  margin-bottom: 100px;
  border-bottom: 4px solid #006ac7;
}
.projectList {
  align-content: center;
  justify-content: center;
}
</style>

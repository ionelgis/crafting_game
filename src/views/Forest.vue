<template>
  <div class="about">
    <h1>This is the forest</h1>
    <h2>Actions</h2>
    <div class="action-group">
      <button @click="doWork('wood', actions.wood.duration)" :disabled="isBusy">Chop a tree</button>
      <progress-bar v-if="actions.wood.progress > 0" :progress="actions.wood.progress"/>
    </div>
    <div class="action-group">
      <button @click="doWork('berries', actions.berries.duration)" :disabled="isBusy">Gather beries</button>
      <progress-bar v-if="actions.berries.progress > 0" :progress="actions.berries.progress"/>
    </div>
    <div class="action-group">
      <button @click="doWork('mushrooms', actions.mushrooms.duration)" :disabled="isBusy">Gather mushrooms</button>
      <progress-bar v-if="actions.mushrooms.progress > 0" :progress="actions.mushrooms.progress"/>
    </div>
  </div>
</template>

<script>
import { auth, db } from "@/helpers/firebase.service.js";
import ProgressBar from "../components/ProgressBar.vue";

export default {
  data() {
    return {
      resources: null,
      isBusy: false,
      actions: {
        wood: {
          workYield: 12,
          progress: 0,
          duration: 10
        },
        berries: {
          workYield: 22,
          progress: 0,
          duration: 20
        },
        mushrooms: {
          workYield: 5,
          progress: 0,
          duration: 30
        }
      }
    };
  },
  methods: {
    doWork: function(resource, duration) {
      this.isBusy = true;
      this.handleProgressAndUpdate(resource, duration);
    },
    handleProgressAndUpdate(resource, duration) {
      let timeLeft = duration;
      let work = setInterval(() => {
        timeLeft--;
        // eslint-disable-next-line
        this.actions[resource].progress =
          100 * (duration - timeLeft) / duration;
        if (timeLeft === 0) {
          clearInterval(work);
          this.updateResource(resource, this.actions[resource].workYield);
          this.isBusy = false;
        }
      }, 1000);
    },
    updateResource(resource, workYield) {
      let updateObj = new Object();
      updateObj[resource] = this.resources[resource] + workYield;
      // eslint-disable-next-line
      db
        .ref("resources")
        .child(auth.currentUser.uid)
        .update(updateObj);
    }
  },
  created() {
    // eslint-disable-next-line
    db
      .ref("resources")
      .child(auth.currentUser.uid)
      .on("value", snapshot => {
        this.resources = snapshot.val();
      });
  },
  components: { ProgressBar }
};
</script>
<style scoped>
.action-group {
  margin: 30px;
}
.action-group button {
  margin-bottom: 20px;
}
</style>

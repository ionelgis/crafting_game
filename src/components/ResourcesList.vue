<template>
    <ul v-if="resources" class="resourcesList">
        <li>
            <img alt="" src="../assets/icons/strawberry-icon.png" width="14">      
            {{resources.berries}}
        </li>
        <li>
            <img alt="" src="../assets/icons/forest-mushroom-icon.png" width="14"> 
            {{resources.mushrooms}}
        </li>
        <li>
            <img alt="" src="../assets/icons/Wood-Axe-icon.png" width="14"> 
            {{resources.wood}}
        </li>
        <li>
            <img alt="" src="../assets/icons/board-icon.png" width="14"> 
            {{resources.boards}}
        </li>
    </ul>
</template>

<script>
import { auth, db } from "../helpers/firebase.service.js";

export default {
  data() {
    return {
      resources: null
    };
  },
  created() {
    // eslint-disable-next-line
    db
      .ref("resources")
      .child(auth.currentUser.uid)
      .on("value", snapshot => {
        this.resources = snapshot.val();
      });
  }
};
</script>
<style scoped lang="scss">
.resourcesList {
  //   display: inline;
  margin-top: 20px;

  li {
    display: inline;
    padding: 0 10px;
  }
}
</style>

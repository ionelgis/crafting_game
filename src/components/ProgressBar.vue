<template>
    <div class="outer">
        <div class="inner"></div>
        <div class="progress" :style="{width: `${progress}%`}"></div>
    </div>    
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped >
.outer {
  height: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.progress {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: blue;
}
.inner {
  height: 4px;
  background-color: silver;
}
</style>

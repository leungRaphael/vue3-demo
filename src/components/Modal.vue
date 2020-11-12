<template>
  <teleport to="#modal">
    <div id="center">
      <h2>Teleport之弹窗组件</h2>
    </div>
  </teleport>
</template>
<script lang="ts">
export default {};
</script>
<style>
#center {
  width: 400px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -100px;
}
</style>
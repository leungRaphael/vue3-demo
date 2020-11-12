<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <RefReactiveToRefs /> -->
  <!-- <CurrentTime /> -->
  <!-- <Modal /> -->
  <Suspense>
    <template #default>
      <AsyncShow />
    </template>
    <template #fallback>
      <h1>Loading</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
/**
 * ref 函数的使用 数据的初始化包装
 * reactive 函数(方法) 接收一个object对象
 * toRefs 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应
 */
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
} from 'vue';
import RefReactiveToRefs from './components/refReactiveToRefs.vue';
// import CurrentTime from './components/CurrentTime.vue';
import Modal from './components/Modal.vue';
import AsyncShow from './components/AsyncShow.vue';
interface DataProps {
  dataList: string[];
  selectData: string;
  selectDataFn: (index: number) => void;
}

export default defineComponent({
  name: 'App',
  components: {
    // RefReactiveToRefs,
    // CurrentTime,
    // Modal,
    AsyncShow
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

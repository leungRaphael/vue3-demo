<template>
  <div>
    <div>{{ nowTime }}</div>
    <div><button @click="getNowTime">显示时间</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { nowTime, getNowTime } from  '../hooks/useNowTime'

interface DataProps {
  time: string;
  getNowTime: () => void;
}

export default defineComponent({
  name: 'currentTime',
  setup() {
    // 初实现功能
    // const data = reactive({
    //   nowTime: '00:00:00',
    //   getNowTime: () => {
    //     const now = new Date();
    //     const hour = `${ now.getHours() < 10 ? '0': ''}${now.getHours()}`
    //     const min = `${ now.getMinutes() < 10 ? '0': ''}${now.getMinutes()}`
    //     const sec = `${ now.getSeconds() < 10 ? '0': ''}${now.getSeconds()}`
    //     data.nowTime = `${hour}:${min}:${sec}`
    //     setTimeout(data.getNowTime, 1000);   //每一秒执行一次这个方法
    //   }
    // })


    return {
      // ...toRefs(data)
      // 利用模块化开发导出
      nowTime,
      getNowTime
    }
  }
})
</script>
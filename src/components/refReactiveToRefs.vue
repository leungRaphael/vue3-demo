<template>
  <div>
    <h2>欢迎光临</h2>
    <div>请选择你要的数据类型</div>
    <button
      v-for="(item, index) in dataList"
      :key="index"
      @click="selectDataFn(index)"
    >
     {{index}}:{{item}}
    </button>
    <div>你选择了 {{selectData}} </div>
    <button @click="editTittle">修改web标题</button>
    <div>{{title}}</div>
  </div>
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

interface DataProps {
  dataList: string[];
  selectData: string;
  selectDataFn: (index: number) => void;
}

export default defineComponent({
  name: 'RefReactiveToRefs',
  components: {},
  setup() {
    const data: DataProps = reactive({
      dataList: ['字符串', '数组', '数字', '布尔类型'],
      selectData: '',
      selectDataFn: (index: number) => {
        data.selectData = data.dataList[index]
        document.title = data.dataList[index]
      }
    })

    const title = ref('xixi')
    const editTittle = () => {
      title.value = `${title.value} hhhh`;
      // document.title = title.value
    }

    watch([title, () => data.selectData], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });

    return {
      // data // reactive的使用
      title,
      editTittle,
      ...toRefs(data) // toRefs的使用
    }
  }
});
</script>

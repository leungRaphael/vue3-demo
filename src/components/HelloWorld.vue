<template>
  <div class="hello" v-loading="loading">
    <url>
      <li v-for="(item, index) in data.list" :key="index">{{item.name}}</li>
    </url>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useURLAxios from '../hooks/useURLAxios';

const url = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      rows: [
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 },
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 },
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 },
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 },
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 },
        { name: 'aa', type: 'mongodb', createTime: '2018-10-10', format: 500 }
      ],
      total: 100
    })
  }, 500)
})

export default defineComponent({
  name: 'HelloWorld',
  props: {},
  setup() {
    const { data, loading, error } = useURLAxios('')

    return {
      data,
      loading,
      error
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

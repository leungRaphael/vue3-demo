import { ref } from 'vue';
import axios from 'axios';

function useUrlAxios(url: string) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  axios.get(url).then(res => {
    loading.value = false
    data.value = res.data
  }).catch(e => {
    loading.value = false
    error.value = e
  })

  return {
    data,
    loading,
    error
  }
}

export default useUrlAxios
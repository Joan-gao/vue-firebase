import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const postCollection = collection(projectFirestore, 'posts')
      const q = query(postCollection, orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      
      // 将文档数据转换为你想要的格式
      posts.value = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
  }
  catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts
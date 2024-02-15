import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'


const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const postRef = doc(projectFirestore, 'posts', id);
      const postSnapshot = await getDoc(postRef);
      
      if (!postSnapshot.exists()) {
        throw Error('data not available');
      }
      
      post.value = { ...postSnapshot.data(), id: postSnapshot.id };
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost
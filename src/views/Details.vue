<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const { error, post, load } = getPost(route.params.id)

    load()

    const handleClick = async () => {
      // get doc
      const postDoc = doc(projectFirestore, 'posts', props.id)
      // delete doc  
      await deleteDoc(postDoc)

      router.push({ name: 'Home' })
    }

    return { error, post, handleClick }
  }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  .button.delete {
    margin: 10px auto;
  }
</style>
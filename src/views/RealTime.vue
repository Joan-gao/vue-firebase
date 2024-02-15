<template>
    <h1>Real-time data</h1>
    <div v-for="post in posts" :key="post.id">
        <div>{{ post.title }}</div>
    </div>
</template>

<script>
import { ref, onUnmounted } from 'vue'
import { projectFirestore } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default {
    setup() {
        const posts = ref([])

        const postCollection = collection(projectFirestore, 'posts');
        const q = query(postCollection, orderBy('createdAt', 'desc'));

          // 设置快照监听
        const unsubscribe = onSnapshot(q, (snapshot) => {
            posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
  
        // 在组件卸载时取消快照监听，防止内存泄漏
        onUnmounted(unsubscribe);
  
        return { posts }
    }
}
</script>

<style>

</style>
<script setup>
import { posts } from '@/data/posts.js'
import { colors } from '@/data/colors.js'


</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <div
      v-for="(post, index) in posts"
      :key="post.id"
      :class="['shadow-md rounded-lg p-6 hover:shadow-xl relative transition-shadow duration-300', colors[index % colors.length]]"
      >
      <button @click="deletePost(post.id)" class="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">x</button>

      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p>{{ post.description }}</p>

      <div class="flex justify-between gap-2">
        <router-link :to="`/view/${post.id}`" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-center w-full">View</router-link>
        <router-link :to="`/edit/${post.id}`" class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-center w-full">Edit</router-link>
      </div>
    </div>
  </div>
</template>

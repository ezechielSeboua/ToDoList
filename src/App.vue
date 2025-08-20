<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div>
    <nav class="bg-white border-gray-200 px-4 sm:px-6 lg:px-16 py-4 flex flex-wrap items-center justify-between shadow">
      <div class="flex items-center cursor-pointer text-2xl font-semibold text-slate-800">
        <span class="text-blue-500">Po</span>st<span class="text-red-500">It</span>
      </div>

      <button @click="isOpen = !isOpen"
              class="inline-flex items-center p-2 text-gray-700 md:hidden hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 z-10">
        <img src="@/assets/icons/menu.png" alt="Menu" class="w-6 h-6" />
      </button>

      <div :class="['w-full md:flex md:items-center md:w-auto', isOpen ? 'block' : 'hidden']">
        <div class="flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 w-full justify-center">
          <form class="relative flex justify-center w-full md:w-1/2">
              <input type="search" placeholder="Search your posts..."
                    class="block w-full p-3 ps-10 text-sm border border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              <button type="submit"
                      class="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-3 rounded-r-lg">
                Search
              </button>
            </form>
          <div class="flex justify-between items-center gap-4">
            <router-link to="/add" class="bg-green-500 hover:bg-green-700 text-white text-l rounded-xl p-2 inline-block mt-2 md:mt-0">Create</router-link>
            <router-link to="/" class="bg-green-500 hover:bg-green-700 text-white text-l rounded-xl p-2 inline-block mt-2 md:mt-0">Posts List</router-link>
          </div>

        </div>
      </div>
    </nav>

    <main class="p-6">
      <router-view />
    </main>

    <footer class="bg-gray-100 p-4 mt-6 text-center text-gray-600">
      &copy; 2025 SLASE To-Do
    </footer>
  </div>
</template>

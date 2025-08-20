<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Update your post</h1>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div>
        <label for="title" class="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="Entrez le titre du post"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="description" class="block text-gray-700 font-medium mb-1">Description</label>
        <textarea
          id="description"
          v-model="description"
          placeholder="Entrez la description"
          rows="4"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-green-500 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Update
      </button>
    </form>
  </div>
</template>

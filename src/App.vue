<script setup lang="ts">
  import { ref } from 'vue'
  import { TaskList } from '../FoodData.ts'

  const tasks = ref(TaskList)
  const doubleClick = ref(false)

  const addTask = () => {
    console.log('追加処理です')
  }
  const deleteTask = () => {
    console.log('削除処理です')
  }

</script>

<template>
  <div className="input-form">
    <div className="inner">
      <input type="text" className="input" placeholder="TODOを入力してください。" />
      <button @click="addTask" className="btn is-primary">追加</button>
    </div>
  </div>
  <div className="inner">
    <ul className="task-list">
      <li v-for="task in tasks" :key="task.name">
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" />
          <span v-if="doubleClick === false">{{ task.name }}</span>
        </label>
        <button @click="deleteTask" className="btn is-delete">削除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  import { ref } from 'vue'
  import { TaskList } from '../FoodData.ts'

  const tasks = ref(TaskList)
  const newTask = ref('')

  const clickHandler = (id: number) => {
    console.log(tasks.value[id].isDone)
    tasks.value[id].isDone = !tasks.value[id].isDone
  }

  const addTask = () => {
    // タスクの入力されていないなら何もしない
    if(newTask.value === '') return

    // 後ろの要素を取得し、返り値が配列のためスカラー値として[0]を指定
    const lastId = tasks.value.slice(-1)[0].id

    tasks.value.push({
      id: lastId + 1,
      name: newTask.value,
      isDone: false
    });
    // 追加するタスクを初期化
    newTask.value = ''
  }
  const deleteTask = (deleteId: number) => {
    tasks.value = tasks.value.filter((task) => {
      return task.id !== deleteId
    })
  }

</script>

<template>
  <div class="input-form">
    <div class="inner">
      <input type="text" name="add" v-model="newTask" @keypress.enter="addTask" class="input" placeholder="TODOを入力してください。" />
      <button @click="addTask" class="btn is-primary">追加</button>
    </div>
  </div>
  <div class="inner">
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.name">
        <input type="checkbox" class="checkbox-input" :checked="task.isDone" />
        <label class="checkbox-label" @click="clickHandler(task.id)" :class="{ 'done': task.isDone, 'not-done': !task.isDone }">
          <span>{{ task.name }}</span>
        </label>
        <button @click="deleteTask(task.id)" class="btn is-delete">削除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

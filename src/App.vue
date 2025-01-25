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

    tasks.value.push({
      name: newTask.value,
      isDone: false
    });
    // 追加するタスクを初期化
    newTask.value = ''
  }

  const deleteTask = (deleteId: number) => {
    // spliceの第一引数で削除したい配列のインデックスを指定し、第二引数に取り除く要素の個数を指定
    tasks.value.splice(deleteId, 1);
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
      <li v-for="(task, index) in tasks" :key="task.name">
        <input type="checkbox" class="checkbox-input" :checked="task.isDone" />
        <label class="checkbox-label" @click="clickHandler(index)" :class="{ 'done': task.isDone, 'not-done': !task.isDone }">
          <span>{{ task.name }}</span>
        </label>
        <button @click="deleteTask(index)" class="btn is-delete">削除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

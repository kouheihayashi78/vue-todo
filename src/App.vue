<script setup lang="ts">
  import { ref } from 'vue'
  import { TaskList } from '../FoodData.ts'

  const tasks = ref(TaskList)
  const newTask = ref('')

  // タスクのチェック状態を切り替える
  const clickHandler = (id: number) => {
    tasks.value[id].isDone = !tasks.value[id].isDone
  }

  // 新しいタスクを追加する
  const addTask = () => {
    // タスクの入力されていないなら何もしない
    if (newTask.value === '') return

    tasks.value.push({
      name: newTask.value,
      isDone: false,
      isEdit: false,
    });
    // 追加するタスクを初期化
    newTask.value = ''
  }

  // タスクを削除する
  const deleteTask = (deleteId: number) => {
    // spliceの第一引数で削除したい配列のインデックスを指定し、第二引数に取り除く要素の個数を指定
    tasks.value.splice(deleteId, 1);
  }

  // タスクを編集する
  const editTask = (id: number, newName: string) => {
    // 新しいタスクが空白じゃなければ編集する
    if(newName.trim() !== '') {
      tasks.value[id].name = newName.trim()
    }
    // 編集モード終了
    tasks.value[id].isEdit = false
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
        <input type="checkbox" class="checkbox-input" @change="clickHandler(index)" :checked="task.isDone" />
        <label
          v-if="task.isEdit === false"
          @dblclick="task.isEdit = !task.isEdit"
          class="checkbox-label"
          :class="{ 'done': task.isDone, 'not-done': !task.isDone }"
        >
          <span>{{ task.name }}</span>
        </label>
        <input
          v-else
          type="text"
          v-model="task.name"
          @keydown.enter="editTask(index, task.name)"
          class="checkbox-label"
        />
        <button @click="deleteTask(index)" class="btn is-delete">削除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

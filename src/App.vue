<script setup lang="ts"></script>

<template>
  <div className="input-form">
    <div className="inner">
      <input type="text" className="input" placeholder="TODOを入力してください。" />
      <button className="btn is-primary">追加</button>
    </div>
  </div>
  <div className="inner">
    <ul className="task-list">
      <li>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox-input" />
        </label>
        <div><span></span></div>
        <button className="btn is-delete">削除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

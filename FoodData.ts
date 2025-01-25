export interface Task {
  name: string,
  isDone: boolean,
  isEdit: boolean,
}

export const TaskList:Task[] = [
  {
    name: 'Vue学習',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'Laravel学習',
    isDone: false,
    isEdit: false,
  },
  {
    name: '要件定義学習',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'ジャーナル',
    isDone: true,
    isEdit: false,
  },
  {
    name: '瞑想',
    isDone: true,
    isEdit: false,
  },
  {
    name: '書籍学習',
    isDone: true,
    isEdit: false,
  },
];

export interface Task {
  name: string,
  isDone: boolean,
}

export const TaskList:Task[] = [
  {
    name: 'Vue学習',
    isDone: false,
  },
  {
    name: 'Laravel学習',
    isDone: false,
  },
  {
    name: '要件定義学習',
    isDone: false,
  },
  {
    name: 'ジャーナル',
    isDone: true,
  },
  {
    name: '瞑想',
    isDone: true,
  },
  {
    name: '書籍学習',
    isDone: true,
  },
];

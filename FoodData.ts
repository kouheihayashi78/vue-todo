export interface Task {
  id: number,
  name: string,
  isDone: boolean,
}

export const TaskList:Task[] = [
  {
    id: 0,
    name: 'Vue学習',
    isDone: false,
  },
  {
    id: 1,
    name: 'Laravel学習',
    isDone: false,
  },
  {
    id: 2,
    name: '要件定義学習',
    isDone: false,
  },
  {
    id: 3,
    name: 'ジャーナル',
    isDone: true,
  },
  {
    id: 4,
    name: '瞑想',
    isDone: true,
  },
  {
    id: 5,
    name: '書籍学習',
    isDone: true,
  },
];

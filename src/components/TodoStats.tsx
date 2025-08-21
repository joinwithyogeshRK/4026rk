interface TodoStatsProps {
  completed: number;
  active: number;
}

export function TodoStats({ completed, active }: TodoStatsProps) {
  return (
    <div className="todo-stats">
      <div>{active} active tasks</div>
      <div>{completed} completed</div>
    </div>
  );
}

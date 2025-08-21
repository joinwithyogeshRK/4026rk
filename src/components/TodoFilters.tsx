import { Button } from '@/components/ui/button';
import { FilterType } from '@/types';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TodoFilters({ filter, onFilterChange }: TodoFiltersProps) {
  return (
    <div className="todo-filters">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFilterChange('all')}
        className={`todo-filter-button ${filter === 'all' ? 'todo-filter-button-active' : ''}`}
      >
        All
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFilterChange('active')}
        className={`todo-filter-button ${filter === 'active' ? 'todo-filter-button-active' : ''}`}
      >
        Active
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFilterChange('completed')}
        className={`todo-filter-button ${filter === 'completed' ? 'todo-filter-button-active' : ''}`}
      >
        Completed
      </Button>
    </div>
  );
}

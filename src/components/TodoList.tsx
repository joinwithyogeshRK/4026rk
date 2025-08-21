import { useState } from 'react';
import { Check, Trash, Edit, X, Save } from 'lucide-react';
import { Todo } from '@/types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editingId && editText.trim()) {
      onEdit(editingId, editText);
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMM d');
    } catch (error) {
      return 'Today';
    }
  };

  if (todos.length === 0) {
    return (
      <div className="todo-empty-state">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item group ${todo.completed ? 'todo-completed' : ''}`}
        >
          {editingId === todo.id ? (
            <div className="flex w-full items-center gap-2">
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button
                size="icon"
                variant="ghost"
                onClick={handleSave}
                className="text-primary hover:bg-primary/10"
              >
                <Save className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleCancel}
                className="text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <span className="todo-date">{formatDate(todo.date)}</span>
              <div className="todo-actions opacity-0 group-hover:opacity-100 transition-opacity">
                {!todo.completed && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEdit(todo)}
                    className="todo-action-button todo-edit-button"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onDelete(todo.id)}
                  className="todo-action-button todo-delete-button"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function Header() {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="border-b border-border py-4">
      <div className="todo-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">ComplexTodo</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}

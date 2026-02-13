'use client';

import { sampleTasks } from '@/lib/data';
import { Plus } from 'lucide-react';

const statusLabels = {
  backlog: 'Backlog',
  todo: 'К выполнению', 
  'in-progress': 'В работе',
  done: 'Готово'
};

const statusClasses = {
  backlog: 'kanban-header-backlog',
  todo: 'kanban-header-todo',
  'in-progress': 'kanban-header-progress', 
  done: 'kanban-header-done'
};

export default function TasksPage() {
  const columns = ['backlog', 'todo', 'in-progress', 'done'] as const;
  
  const getTasksByStatus = (status: string) => {
    return sampleTasks.filter(task => task.status === status);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
          ✅ Задачи
        </h1>
        <button className="btn-primary">
          <Plus style={{ width: '16px', height: '16px' }} />
          Новая задача
        </button>
      </div>

      {/* Kanban Board */}
      <div className="kanban-container">
        {columns.map((status) => {
          const tasks = getTasksByStatus(status);
          return (
            <div key={status} className="kanban-column">
              <div className={`kanban-header ${statusClasses[status]}`}>
                <span>{statusLabels[status]}</span>
                <span style={{ 
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  opacity: 0.7
                }}>
                  {tasks.length}
                </span>
              </div>
              
              <div>
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`kanban-card priority-${task.priority}`}
                  >
                    <div style={{ marginBottom: '0.5rem' }}>
                      <h3 style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        margin: '0 0 0.25rem 0',
                        lineHeight: '1.3'
                      }}>
                        {task.title}
                      </h3>
                      
                      {task.description && (
                        <p style={{ 
                          fontSize: '0.8rem', 
                          color: 'var(--text-secondary)',
                          margin: '0 0 0.5rem 0',
                          lineHeight: '1.4'
                        }}>
                          {task.description}
                        </p>
                      )}
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span className={`badge badge-${task.priority}`}>
                        {task.priority === 'high' ? 'Высокий' : 
                         task.priority === 'medium' ? 'Средний' : 'Низкий'}
                      </span>
                      
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        fontWeight: '500'
                      }}>
                        {new Date(task.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                ))}
                
                {tasks.length === 0 && (
                  <div style={{ 
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Нет задач
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile hint */}
      <div style={{ 
        marginTop: '1rem',
        padding: '0.75rem 1rem',
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        display: 'block'
      }}>
        💡 На мобильном устройстве прокрутите горизонтально для просмотра всех колонок
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-hint {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
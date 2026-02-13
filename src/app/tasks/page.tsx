'use client';

import { useState } from 'react';
import { CheckSquare, Plus, MoreHorizontal, Clock, AlertCircle, CheckCircle, Inbox } from 'lucide-react';
import { sampleTasks, type Task } from '@/lib/data';

const statusConfig = {
  backlog: {
    title: 'Backlog',
    icon: Inbox,
    color: 'text-gray-400',
    bgColor: 'bg-gray-600',
  },
  todo: {
    title: 'К выполнению',
    icon: AlertCircle,
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
  },
  'in-progress': {
    title: 'В работе',
    icon: Clock,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-600',
  },
  done: {
    title: 'Готово',
    icon: CheckCircle,
    color: 'text-green-400',
    bgColor: 'bg-green-600',
  },
};

const priorityConfig = {
  high: { label: 'Высокий', class: 'badge-high' },
  medium: { label: 'Средний', class: 'badge-medium' },
  low: { label: 'Низкий', class: 'badge-low' },
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  
  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
    });
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <div className={`kanban-card group priority-${task.priority}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-white text-sm line-clamp-2">
          {task.title}
        </h3>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity min-h-6 min-w-6">
          <MoreHorizontal className="h-4 w-4 text-gray-400 hover:text-white" />
        </button>
      </div>

      {task.description && (
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <span className={priorityConfig[task.priority].class}>
          {priorityConfig[task.priority].label}
        </span>
        <span className="text-xs text-gray-400">
          {task.completedAt ? formatDate(task.completedAt) : formatDate(task.createdAt)}
        </span>
      </div>
    </div>
  );

  const KanbanColumn = ({ status }: { status: Task['status'] }) => {
    const config = statusConfig[status];
    const columnTasks = getTasksByStatus(status);

    return (
      <div className="kanban-column">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`p-1.5 rounded ${config.bgColor}`}>
              <config.icon className="h-4 w-4 text-white" />
            </div>
            <h2 className="font-semibold text-white">{config.title}</h2>
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
              {columnTasks.length}
            </span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          {columnTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          
          {columnTasks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <config.icon className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Нет задач</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <CheckSquare className="h-8 w-8 text-yellow-400" />
          <h1 className="text-3xl font-bold text-white">Задачи</h1>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            className="btn-primary flex items-center space-x-2"
            onClick={() => setShowNewTaskModal(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Новая задача</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(statusConfig).map(([status, config]) => {
          const count = getTasksByStatus(status as Task['status']).length;
          return (
            <div key={status} className="card">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-gray-800`}>
                  <config.icon className={`h-6 w-6 ${config.color}`} />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-400">{config.title}</p>
                  <p className="text-2xl font-bold text-white">{count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="kanban-container md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {Object.keys(statusConfig).map((status) => (
          <KanbanColumn key={status} status={status as Task['status']} />
        ))}
      </div>

      {/* Task Summary */}
      <div className="card">
        <h2 className="text-lg font-semibold text-white mb-4">Сводка</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {tasks.filter(t => t.status !== 'done').length}
            </div>
            <div className="text-sm text-gray-400">Активных задач</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {tasks.filter(t => t.status === 'done').length}
            </div>
            <div className="text-sm text-gray-400">Завершено</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {tasks.filter(t => t.priority === 'high' && t.status !== 'done').length}
            </div>
            <div className="text-sm text-gray-400">Высокий приоритет</div>
          </div>
        </div>
      </div>
    </div>
  );
}
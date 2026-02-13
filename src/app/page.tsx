'use client';

import { BarChart3, Calendar, CheckSquare, FileText, Brain, Clock, TrendingUp } from 'lucide-react';
import { sampleMemories, sampleDocuments, sampleTasks } from '@/lib/data';
import Link from 'next/link';

export default function Dashboard() {
  const recentMemories = sampleMemories.slice(0, 3);
  const recentDocuments = sampleDocuments.slice(0, 3);
  const activeTasks = sampleTasks.filter(task => task.status !== 'done');
  const completedTasks = sampleTasks.filter(task => task.status === 'done');
  const inProgressTasks = sampleTasks.filter(task => task.status === 'in-progress');

  const stats = [
    {
      name: 'Всего записей',
      value: sampleMemories.length.toString(),
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
    },
    {
      name: 'Документов',
      value: sampleDocuments.length.toString(),
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
    },
    {
      name: 'Активных задач',
      value: activeTasks.length.toString(),
      icon: CheckSquare,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
    },
    {
      name: 'Выполнено',
      value: completedTasks.length.toString(),
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <BarChart3 className="h-8 w-8 text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Дашборд</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Memories */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Brain className="h-5 w-5 mr-2 text-blue-400" />
              Последние записи памяти
            </h2>
            <Link 
              href="/memory"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Все записи →
            </Link>
          </div>
          <div className="space-y-4">
            {recentMemories.map((memory) => (
              <div key={memory.id} className="border-l-2 border-blue-500 pl-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{memory.title}</h3>
                  <span className="text-xs text-gray-400">{memory.date}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                  {memory.content.substring(0, 120)}...
                </p>
                {memory.tags && (
                  <div className="flex space-x-2 mt-2">
                    {memory.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="badge bg-blue-900 text-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Tasks */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-yellow-400" />
              Активные задачи
            </h2>
            <Link 
              href="/tasks"
              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
            >
              Канбан →
            </Link>
          </div>
          <div className="space-y-3">
            {inProgressTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                <div className="flex-1">
                  <h3 className="font-medium text-white">{task.title}</h3>
                  {task.description && (
                    <p className="text-sm text-gray-400 mt-1">{task.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`badge-${task.priority}`}>
                    {task.priority === 'high' ? 'Высокий' : 
                     task.priority === 'medium' ? 'Средний' : 'Низкий'}
                  </span>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            ))}
            {inProgressTasks.length === 0 && (
              <p className="text-gray-400 text-sm italic">Нет задач в работе</p>
            )}
          </div>
        </div>

        {/* Recent Documents */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <FileText className="h-5 w-5 mr-2 text-green-400" />
              Последние документы
            </h2>
            <Link 
              href="/documents"
              className="text-green-400 hover:text-green-300 text-sm font-medium"
            >
              Все документы →
            </Link>
          </div>
          <div className="space-y-4">
            {recentDocuments.map((doc) => (
              <div key={doc.id} className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{doc.title}</h3>
                  <span className="text-xs text-gray-400">{doc.createdAt}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                  {doc.content.substring(0, 120)}...
                </p>
                {doc.tags && (
                  <div className="flex space-x-2 mt-2">
                    {doc.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="badge bg-green-900 text-green-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-purple-400" />
              Быстрые действия
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Link 
              href="/memory"
              className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group"
            >
              <Brain className="h-5 w-5 text-blue-400 mr-3" />
              <span className="text-white group-hover:text-blue-300">Новая запись памяти</span>
            </Link>
            <Link 
              href="/documents"
              className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group"
            >
              <FileText className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-white group-hover:text-green-300">Создать документ</span>
            </Link>
            <Link 
              href="/tasks"
              className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group"
            >
              <CheckSquare className="h-5 w-5 text-yellow-400 mr-3" />
              <span className="text-white group-hover:text-yellow-300">Добавить задачу</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
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
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
    },
    {
      name: 'Документов',
      value: sampleDocuments.length.toString(),
      icon: FileText,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/10 to-green-600/5',
    },
    {
      name: 'Активных задач',
      value: activeTasks.length.toString(),
      icon: CheckSquare,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
    },
    {
      name: 'Выполнено',
      value: completedTasks.length.toString(),
      icon: TrendingUp,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/10 to-orange-600/5',
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className={`card bg-gradient-to-br ${stat.bgGradient} hover:scale-105`}>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
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
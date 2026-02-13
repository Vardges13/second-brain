'use client';

import { useState, useMemo } from 'react';
import { Search, Brain, FileText, CheckSquare, Calendar, Tag, Clock } from 'lucide-react';
import { searchContent } from '@/lib/data';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'memories' | 'documents' | 'tasks'>('all');

  const searchResults = useMemo(() => {
    if (!query.trim()) return { memories: [], documents: [], tasks: [] };
    return searchContent(query);
  }, [query]);

  const totalResults = searchResults.memories.length + searchResults.documents.length + searchResults.tasks.length;

  const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return text;
    
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-500 bg-opacity-30 text-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const filters = [
    { key: 'all', label: 'Все', count: totalResults },
    { key: 'memories', label: 'Память', count: searchResults.memories.length },
    { key: 'documents', label: 'Документы', count: searchResults.documents.length },
    { key: 'tasks', label: 'Задачи', count: searchResults.tasks.length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Search className="h-8 w-8 text-purple-400" />
        <h1 className="text-3xl font-bold text-white">Поиск</h1>
      </div>

      {/* Search Input */}
      <div className="card">
        <div className="relative">
          <Search className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Поиск по всему контенту..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field pl-12 text-lg h-14 w-full"
            autoFocus
          />
        </div>
        
        {query && (
          <div className="mt-4 text-sm text-gray-400">
            Найдено результатов: <span className="font-medium text-white">{totalResults}</span>
          </div>
        )}
      </div>

      {query && (
        <>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Memory Results */}
            {(activeFilter === 'all' || activeFilter === 'memories') && searchResults.memories.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-blue-400" />
                  Записи памяти ({searchResults.memories.length})
                </h2>
                <div className="space-y-3">
                  {searchResults.memories.map((memory) => (
                    <Link key={memory.id} href="/memory" className="block">
                      <div className="card hover:bg-gray-800/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-white">
                            {highlightText(memory.title, query)}
                          </h3>
                          <div className="flex items-center text-xs text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(memory.date)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                          {highlightText(
                            memory.content.replace(/#{1,6}\s+/g, '').substring(0, 200) + '...',
                            query
                          )}
                        </p>
                        {memory.tags && (
                          <div className="flex space-x-2">
                            {memory.tags.map((tag) => (
                              <span key={tag} className="badge bg-blue-900 text-blue-200">
                                {highlightText(tag, query)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Document Results */}
            {(activeFilter === 'all' || activeFilter === 'documents') && searchResults.documents.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-400" />
                  Документы ({searchResults.documents.length})
                </h2>
                <div className="space-y-3">
                  {searchResults.documents.map((doc) => (
                    <Link key={doc.id} href="/documents" className="block">
                      <div className="card hover:bg-gray-800/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-white">
                            {highlightText(doc.title, query)}
                          </h3>
                          <div className="flex items-center text-xs text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(doc.createdAt)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                          {highlightText(
                            doc.content.replace(/#{1,6}\s+/g, '').substring(0, 200) + '...',
                            query
                          )}
                        </p>
                        {doc.tags && (
                          <div className="flex space-x-2">
                            {doc.tags.map((tag) => (
                              <span key={tag} className="badge bg-green-900 text-green-200">
                                {highlightText(tag, query)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Task Results */}
            {(activeFilter === 'all' || activeFilter === 'tasks') && searchResults.tasks.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <CheckSquare className="h-5 w-5 mr-2 text-yellow-400" />
                  Задачи ({searchResults.tasks.length})
                </h2>
                <div className="space-y-3">
                  {searchResults.tasks.map((task) => (
                    <Link key={task.id} href="/tasks" className="block">
                      <div className="card hover:bg-gray-800/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-white">
                            {highlightText(task.title, query)}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className={`badge-${task.priority}`}>
                              {task.priority === 'high' ? 'Высокий' : 
                               task.priority === 'medium' ? 'Средний' : 'Низкий'}
                            </span>
                            <div className="flex items-center text-xs text-gray-400">
                              <Clock className="h-4 w-4 mr-1" />
                              {formatDate(task.createdAt)}
                            </div>
                          </div>
                        </div>
                        {task.description && (
                          <p className="text-sm text-gray-300">
                            {highlightText(task.description, query)}
                          </p>
                        )}
                        <div className="mt-2">
                          <span className={`badge ${
                            task.status === 'done' ? 'bg-green-900 text-green-200' :
                            task.status === 'in-progress' ? 'bg-yellow-900 text-yellow-200' :
                            task.status === 'todo' ? 'bg-blue-900 text-blue-200' :
                            'bg-gray-700 text-gray-300'
                          }`}>
                            {task.status === 'done' ? 'Готово' :
                             task.status === 'in-progress' ? 'В работе' :
                             task.status === 'todo' ? 'К выполнению' :
                             'Backlog'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {totalResults === 0 && query && (
              <div className="card">
                <div className="text-center py-12">
                  <Search className="h-16 w-16 mx-auto mb-6 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-400 mb-2">
                    Ничего не найдено
                  </h2>
                  <p className="text-gray-500">
                    Попробуйте изменить поисковый запрос или использовать другие ключевые слова
                  </p>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Empty State */}
      {!query && (
        <div className="card">
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto mb-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Универсальный поиск
            </h2>
            <p className="text-gray-500 mb-6">
              Найдите любую информацию среди записей памяти, документов и задач
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Brain className="h-4 w-4 mr-2 text-blue-400" />
                Записи памяти: {searchResults.memories.length || 2}
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-green-400" />
                Документы: {searchResults.documents.length || 3}
              </div>
              <div className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-yellow-400" />
                Задачи: {searchResults.tasks.length || 5}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Brain, Search, Calendar, Tag, ChevronDown, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sampleMemories, type MemoryEntry } from '@/lib/data';

export default function MemoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<MemoryEntry | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredMemories = sampleMemories.filter(
    entry =>
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedMemories = filteredMemories.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleCard = (entryId: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(entryId)) {
      newExpanded.delete(entryId);
    } else {
      newExpanded.add(entryId);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <Brain className="h-8 w-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Память</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Поиск по записям..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-10 w-full sm:w-80"
          />
        </div>
      </div>

      {/* Desktop: Split layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {/* Memory List */}
        <div className="space-y-4">
          <div className="card">
            <h2 className="text-lg font-semibold text-white mb-4">
              Записи ({sortedMemories.length})
            </h2>
            <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
              {sortedMemories.map((entry) => (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedEntry?.id === entry.id
                      ? 'bg-indigo-900/30 border border-indigo-400'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-white text-sm line-clamp-2">
                      {entry.title}
                    </h3>
                    <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-2">
                    {formatDate(entry.date)}
                  </p>
                  
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {entry.content.replace(/#{1,6}\s+/g, '').substring(0, 150)}...
                  </p>
                  
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {entry.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge bg-blue-900 text-blue-200 text-xs">
                          {tag}
                        </span>
                      ))}
                      {entry.tags.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{entry.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {sortedMemories.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Записи не найдены</p>
                  {searchQuery && (
                    <p className="text-sm mt-2">
                      Попробуйте изменить поисковый запрос
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Memory Content */}
        <div className="col-span-2">
          {selectedEntry ? (
            <div className="card">
              <div className="border-b border-gray-700 pb-4 mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-2xl font-bold text-white">
                    {selectedEntry.title}
                  </h1>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(selectedEntry.date)}</span>
                  </div>
                  
                  {selectedEntry.tags && selectedEntry.tags.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <div className="flex space-x-1">
                        {selectedEntry.tags.map((tag) => (
                          <span key={tag} className="badge bg-indigo-900 text-indigo-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose-dark">
                <ReactMarkdown>
                  {selectedEntry.content}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="text-center py-12">
                <Brain className="h-16 w-16 mx-auto mb-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-400 mb-2">
                  Выберите запись для просмотра
                </h2>
                <p className="text-gray-500">
                  Кликните на любую запись из списка слева, чтобы посмотреть её содержимое
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Full-width accordion cards */}
      <div className="md:hidden space-y-4">
        {sortedMemories.map((entry) => {
          const isExpanded = expandedCards.has(entry.id);
          return (
            <div key={entry.id} className="card">
              <div
                onClick={() => toggleCard(entry.id)}
                className="cursor-pointer flex items-center justify-between"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white text-base line-clamp-2 pr-4">
                      {entry.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(entry.date)}</span>
                    </div>
                  </div>

                  {!isExpanded && (
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {entry.content.replace(/#{1,6}\s+/g, '').substring(0, 150)}...
                    </p>
                  )}

                  {entry.tags && entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="badge bg-indigo-900 text-indigo-200 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="ml-4 flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="prose-dark">
                    <ReactMarkdown>
                      {entry.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {sortedMemories.length === 0 && (
          <div className="card text-center py-8 text-gray-400">
            <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Записи не найдены</p>
            {searchQuery && (
              <p className="text-sm mt-2">
                Попробуйте изменить поисковый запрос
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
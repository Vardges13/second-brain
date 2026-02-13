'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { searchContent, MemoryEntry, Document, Task } from '@/lib/data';
import Link from 'next/link';

const statusLabels = {
  backlog: 'Backlog',
  todo: 'К выполнению', 
  'in-progress': 'В работе',
  done: 'Готово'
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{
    memories: MemoryEntry[];
    documents: Document[];
    tasks: Task[];
  }>({ memories: [], documents: [], tasks: [] });

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const searchResults = searchContent(searchQuery);
      setResults(searchResults);
    } else {
      setResults({ memories: [], documents: [], tasks: [] });
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} style={{ 
          background: 'var(--accent-yellow)', 
          padding: '0.1rem 0.2rem',
          borderRadius: '3px'
        }}>
          {part}
        </mark>
      ) : part
    );
  };

  const totalResults = results.memories.length + results.documents.length + results.tasks.length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 1.5rem 0' }}>
          🔍 Поиск
        </h1>
        
        {/* Large Search Input */}
        <div style={{ position: 'relative', maxWidth: '800px' }}>
          <Search 
            style={{ 
              position: 'absolute', 
              left: '1.5rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              width: '24px',
              height: '24px',
              color: 'var(--text-muted)'
            }} 
          />
          <input
            type="text"
            placeholder="Поиск по всему контенту..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: '100%',
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1rem 1rem 1rem 4rem',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent-blue)';
              e.target.style.boxShadow = '0 0 0 3px rgba(47,198,246,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'var(--shadow)';
            }}
          />
        </div>
        
        {query && (
          <p style={{ 
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            Найдено результатов: <strong>{totalResults}</strong>
          </p>
        )}
      </div>

      {/* Search Results */}
      {query && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Memory Results */}
          {results.memories.length > 0 && (
            <div>
              <h2 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🧠 Записи памяти ({results.memories.length})
              </h2>
              <div>
                {results.memories.map((memory) => (
                  <div key={memory.id} className="card" style={{ marginBottom: '0.75rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <span className="badge badge-blue">
                        {new Date(memory.date).toLocaleDateString('ru-RU')}
                      </span>
                      <Link 
                        href="/memory" 
                        style={{ 
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                          fontSize: '0.85rem'
                        }}
                      >
                        Перейти →
                      </Link>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {highlightText(memory.title, query)}
                    </h3>
                    
                    <p style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {highlightText(memory.content.substring(0, 200), query)}
                      {memory.content.length > 200 && '...'}
                    </p>
                    
                    {memory.tags && (
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        flexWrap: 'wrap',
                        marginTop: '0.75rem'
                      }}>
                        {memory.tags.map((tag) => (
                          <span key={tag} className="badge badge-blue">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Document Results */}
          {results.documents.length > 0 && (
            <div>
              <h2 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📄 Документы ({results.documents.length})
              </h2>
              <div>
                {results.documents.map((doc) => (
                  <div key={doc.id} className="card" style={{ marginBottom: '0.75rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <span className="badge badge-green">
                        {new Date(doc.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                      <Link 
                        href="/documents" 
                        style={{ 
                          color: 'var(--accent-green)',
                          textDecoration: 'none',
                          fontSize: '0.85rem'
                        }}
                      >
                        Перейти →
                      </Link>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {highlightText(doc.title, query)}
                    </h3>
                    
                    <p style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {highlightText(doc.content.substring(0, 200), query)}
                      {doc.content.length > 200 && '...'}
                    </p>
                    
                    {doc.tags && (
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        flexWrap: 'wrap',
                        marginTop: '0.75rem'
                      }}>
                        {doc.tags.map((tag) => (
                          <span key={tag} className="badge badge-green">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Task Results */}
          {results.tasks.length > 0 && (
            <div>
              <h2 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ✅ Задачи ({results.tasks.length})
              </h2>
              <div>
                {results.tasks.map((task) => (
                  <div key={task.id} className="card" style={{ marginBottom: '0.75rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <span className={`badge ${
                        task.status === 'backlog' ? 'badge-gray' :
                        task.status === 'todo' ? 'badge-blue' :
                        task.status === 'in-progress' ? 'badge-yellow' : 'badge-green'
                      }`}>
                        {statusLabels[task.status]}
                      </span>
                      <Link 
                        href="/tasks" 
                        style={{ 
                          color: 'var(--accent-purple)',
                          textDecoration: 'none',
                          fontSize: '0.85rem'
                        }}
                      >
                        Перейти →
                      </Link>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {highlightText(task.title, query)}
                    </h3>
                    
                    {task.description && (
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        margin: '0 0 0.75rem 0'
                      }}>
                        {highlightText(task.description, query)}
                      </p>
                    )}
                    
                    <div style={{ 
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <span className={`badge badge-${task.priority}`}>
                        {task.priority === 'high' ? 'Высокий' : 
                         task.priority === 'medium' ? 'Средний' : 'Низкий'}
                      </span>
                      <span style={{ 
                        fontSize: '0.8rem', 
                        color: 'var(--text-muted)',
                        fontWeight: '500'
                      }}>
                        {new Date(task.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {totalResults === 0 && query && (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1rem',
                margin: 0
              }}>
                Ничего не найдено по запросу &quot;{query}&quot;
              </p>
            </div>
          )}
        </div>
      )}

      {/* Initial State */}
      {!query && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <Search style={{ 
            width: '48px', 
            height: '48px', 
            color: 'var(--text-muted)',
            margin: '0 auto 1rem auto'
          }} />
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 0.5rem 0'
          }}>
            Поиск по всему контенту
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.9rem',
            margin: 0
          }}>
            Начните вводить запрос для поиска в записях памяти, документах и задачах
          </p>
        </div>
      )}
    </div>
  );
}
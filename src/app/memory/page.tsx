'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { sampleMemories } from '@/lib/data';

export default function MemoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredMemories = sampleMemories.filter(
    memory => 
      memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (expandedCards.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 1.5rem 0' }}>
          🧠 Память
        </h1>
        
        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '600px' }}>
          <Search 
            style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              color: 'var(--text-muted)'
            }} 
          />
          <input
            type="text"
            placeholder="Поиск по записям памяти..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '3rem' }}
          />
        </div>
      </div>

      {/* Memory Entries */}
      <div>
        {filteredMemories.map((memory) => {
          const isExpanded = expandedCards.has(memory.id);
          return (
            <div
              key={memory.id}
              className="entry-card"
              onClick={() => toggleCard(memory.id)}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '0.5rem'
              }}>
                <span className="badge badge-blue entry-date">
                  {new Date(memory.date).toLocaleDateString('ru-RU')}
                </span>
                <svg 
                  style={{
                    width: '16px',
                    height: '16px',
                    color: 'var(--text-muted)',
                    transition: 'transform 0.2s',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <h3 className="entry-title">{memory.title}</h3>
              
              {!isExpanded && (
                <p className="entry-preview">
                  {memory.content.length > 150 
                    ? memory.content.substring(0, 150) + '...'
                    : memory.content
                  }
                </p>
              )}

              {isExpanded && (
                <div style={{ 
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <div 
                    className="prose"
                    style={{ 
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {memory.content}
                  </div>
                </div>
              )}
              
              {memory.tags && memory.tags.length > 0 && (
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  flexWrap: 'wrap',
                  marginTop: '0.75rem'
                }}>
                  {memory.tags.map((tag) => (
                    <span key={tag} className="badge badge-purple">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        
        {filteredMemories.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1rem',
              margin: 0
            }}>
              {searchQuery ? 'Записи не найдены' : 'Нет записей памяти'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
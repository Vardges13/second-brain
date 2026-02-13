'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { sampleDocuments } from '@/lib/data';

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const filteredDocuments = sampleDocuments.filter(
    doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
          📄 Документы
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
            placeholder="Поиск документов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '3rem' }}
          />
        </div>
      </div>

      {/* Desktop Table View */}
      <div style={{ display: 'none' }} className="hidden md:block">
        <div className="table-wrap">
          {filteredDocuments.map((doc, index) => {
            const isExpanded = expandedCards.has(doc.id);
            return (
              <div key={doc.id}>
                <div 
                  className="table-row"
                  onClick={() => toggleCard(doc.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ flex: '2' }}>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.25rem 0'
                    }}>
                      {doc.title}
                    </h3>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {doc.content.substring(0, 100)}...
                    </p>
                  </div>
                  
                  <div style={{ flex: '1' }}>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-muted)',
                      fontWeight: '500'
                    }}>
                      {new Date(doc.createdAt).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  
                  <div style={{ flex: '1' }}>
                    {doc.tags && (
                      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                        {doc.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="badge badge-green">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ marginLeft: '0.5rem' }}>
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
                </div>

                {isExpanded && (
                  <div style={{
                    padding: '1.5rem',
                    background: '#f8fafc',
                    borderTop: '1px solid var(--border)'
                  }}>
                    <div 
                      className="prose"
                      style={{ 
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      {doc.content}
                    </div>
                    {doc.tags && doc.tags.length > 2 && (
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        flexWrap: 'wrap',
                        marginTop: '1rem'
                      }}>
                        {doc.tags.map((tag) => (
                          <span key={tag} className="badge badge-green">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden">
        {filteredDocuments.map((doc) => {
          const isExpanded = expandedCards.has(doc.id);
          return (
            <div
              key={doc.id}
              className="entry-card"
              onClick={() => toggleCard(doc.id)}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '0.5rem'
              }}>
                <span className="badge badge-green entry-date">
                  {new Date(doc.createdAt).toLocaleDateString('ru-RU')}
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
              
              <h3 className="entry-title">{doc.title}</h3>
              
              {!isExpanded && (
                <p className="entry-preview">
                  {doc.content.length > 150 
                    ? doc.content.substring(0, 150) + '...'
                    : doc.content
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
                    {doc.content}
                  </div>
                </div>
              )}
              
              {doc.tags && doc.tags.length > 0 && (
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
          );
        })}
        
        {filteredDocuments.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1rem',
              margin: 0
            }}>
              {searchQuery ? 'Документы не найдены' : 'Нет документов'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
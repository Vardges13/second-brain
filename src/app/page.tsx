'use client';

import { sampleMemories, sampleDocuments, sampleTasks } from '@/lib/data';
import Link from 'next/link';

export default function Dashboard() {
  const recentMemories = sampleMemories.slice(0, 3);
  const activeTasks = sampleTasks.filter(task => task.status !== 'done');
  const completedTasks = sampleTasks.filter(task => task.status === 'done');
  const inProgressTasks = sampleTasks.filter(task => task.status === 'in-progress');

  const stats = [
    {
      name: 'Записей памяти',
      value: '2',
      className: 'stat-blue',
    },
    {
      name: 'Документов',
      value: '3',
      className: 'stat-green',
    },
    {
      name: 'Активных задач',
      value: '3',
      className: 'stat-purple',
    },
    {
      name: 'Выполнено',
      value: '2',
      className: 'stat-orange',
    },
  ];

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
          📊 Дашборд
        </h1>
      </div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {stats.map((stat) => (
          <div key={stat.name} className={`stat-card ${stat.className}`}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem'
      }}>
        {/* Последние записи */}
        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h2 style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              color: 'var(--text-primary)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🧠 Последние записи
            </h2>
            <Link 
              href="/memory"
              style={{ 
                color: 'var(--accent-blue)', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Все записи →
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {recentMemories.map((memory) => (
              <div 
                key={memory.id} 
                style={{
                  borderLeft: '3px solid var(--accent-blue)',
                  paddingLeft: '1rem',
                  padding: '0.75rem 0 0.75rem 1rem'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.25rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: '1.3'
                  }}>
                    {memory.title}
                  </h3>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    marginLeft: '1rem'
                  }}>
                    {memory.date}
                  </span>
                </div>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  margin: '0 0 0.5rem 0'
                }}>
                  {memory.content.substring(0, 120)}...
                </p>
                {memory.tags && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {memory.tags.slice(0, 2).map((tag) => (
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

        {/* Активные задачи */}
        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h2 style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              color: 'var(--text-primary)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ✅ Активные задачи
            </h2>
            <Link 
              href="/tasks"
              style={{ 
                color: 'var(--accent-purple)', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Канбан →
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {activeTasks.slice(0, 4).map((task) => (
              <div 
                key={task.id} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {task.title}
                  </h3>
                  {task.description && (
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--text-secondary)',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      {task.description}
                    </p>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className={`badge badge-${task.priority}`}>
                    {task.priority === 'high' ? 'Высокий' : 
                     task.priority === 'medium' ? 'Средний' : 'Низкий'}
                  </span>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: task.status === 'in-progress' ? '#f59e0b' : 
                               task.status === 'todo' ? '#3b82f6' : '#64748b'
                  }}></div>
                </div>
              </div>
            ))}
            {activeTasks.length === 0 && (
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.9rem',
                fontStyle: 'italic',
                textAlign: 'center',
                padding: '1rem 0',
                margin: 0
              }}>
                Нет активных задач
              </p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .content-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
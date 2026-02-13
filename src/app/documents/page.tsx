'use client';

import { useState } from 'react';
import { FileText, Search, Calendar, Tag, Edit, Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sampleDocuments, type Document } from '@/lib/data';

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const filteredDocuments = sampleDocuments.filter(
    doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedDocuments = filteredDocuments.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDocumentPreview = (content: string) => {
    // Remove markdown headers and get first paragraph
    return content
      .replace(/#{1,6}\s+/g, '')
      .split('\n\n')[0]
      .substring(0, 200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8 text-green-400" />
          <h1 className="text-3xl font-bold text-white">Документы</h1>
        </div>

        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск документов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 w-full sm:w-80"
            />
          </div>

          {/* Add Document Button */}
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Создать</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Documents List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">
                Документы ({sortedDocuments.length})
              </h2>
            </div>
            
            <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
              {sortedDocuments.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocument(doc)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedDocument?.id === doc.id
                      ? 'bg-green-900/30 border border-green-500'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-white text-sm">
                      {doc.title}
                    </h3>
                    <Edit className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-2">
                    {formatDate(doc.createdAt)}
                  </p>
                  
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {getDocumentPreview(doc.content)}...
                  </p>
                  
                  {doc.tags && doc.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {doc.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge bg-green-900 text-green-200 text-xs">
                          {tag}
                        </span>
                      ))}
                      {doc.tags.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{doc.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {sortedDocuments.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Документы не найдены</p>
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

        {/* Document Content */}
        <div className="lg:col-span-2">
          {selectedDocument ? (
            <div className="card">
              <div className="border-b border-gray-700 pb-4 mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-2xl font-bold text-white">
                    {selectedDocument.title}
                  </h1>
                  <button className="btn-secondary flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Редактировать</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Создан {formatDate(selectedDocument.createdAt)}</span>
                  </div>
                  
                  {selectedDocument.tags && selectedDocument.tags.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <div className="flex space-x-1">
                        {selectedDocument.tags.map((tag) => (
                          <span key={tag} className="badge bg-green-900 text-green-200">
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
                  {selectedDocument.content}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="text-center py-12">
                <FileText className="h-16 w-16 mx-auto mb-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-400 mb-2">
                  Выберите документ для просмотра
                </h2>
                <p className="text-gray-500 mb-6">
                  Кликните на любой документ из списка слева, чтобы посмотреть его содержимое
                </p>
                <button className="btn-primary flex items-center space-x-2 mx-auto">
                  <Plus className="h-4 w-4" />
                  <span>Создать новый документ</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
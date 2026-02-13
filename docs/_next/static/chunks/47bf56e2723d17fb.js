(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16148,e=>{"use strict";let t=[{id:"2026-02-13",date:"2026-02-13",title:"Планирование Second Brain проекта",content:`# Планирование Second Brain проекта

Сегодня получил задачу создать приложение "Second Brain" для управления памятью, документами и задачами.

## Ключевые требования:
- Next.js 14+ с App Router
- Темная тема, современный UI
- Русский интерфейс
- Статический экспорт для GitHub Pages

## Секции:
- 🧠 **Память** — записи из файлов memory/
- 📄 **Документы** — файлы из drafts/
- ✅ **Задачи** — канбан-доска
- 🔍 **Поиск** — по всему контенту
- 📊 **Дашборд** — общий обзор

Буду использовать TypeScript, Tailwind CSS и react-markdown для рендеринга.`,tags:["проект","разработка","планирование"]},{id:"2026-02-12",date:"2026-02-12",title:"Анализ требований к интерфейсу",content:`# Анализ требований к интерфейсу

Изучал современные подходы к созданию dashboard-интерфейсов.

## Вдохновение:
- **Notion** — чистый дизайн, sidebar навигация
- **Obsidian** — темная тема, граф связей
- **Linear** — канбан доски, минимализм

## Технические решения:
- Использовать Tailwind CSS для быстрой стилизации
- Lucide React для иконок
- react-markdown для отображения контента
- Адаптивный дизайн для мобильных устройств

## Цветовая схема:
- Основной фон: темно-серый (#1a1a1a)
- Карточки: #2a2a2a
- Акцентный цвет: синий (#3b82f6)
- Текст: белый/светло-серый`,tags:["дизайн","ui","анализ"]}],s=[{id:"positioning",title:"Позиционирование",createdAt:"2026-02-10",content:`# Позиционирование компании

## Миссия
Мы помогаем людям организовать свои знания и повысить продуктивность через технологии ИИ.

## Видение
Стать лидером в области персональных систем управления знаниями в русскоязычном сегменте.

## Ценности
- **Простота** — сложные задачи решаем просто
- **Эффективность** — каждая функция приносит пользу
- **Приватность** — данные пользователя под его контролем

## Целевая аудитория
- Знаниевые работники
- Предприниматели
- Исследователи и студенты
- Менеджеры проектов

## Конкурентные преимущества
- Русский интерфейс "из коробки"
- Интеграция с популярными российскими сервисами
- Простота использования
- Открытый исходный код`,tags:["стратегия","позиционирование"]},{id:"utp",title:"УТП",createdAt:"2026-02-09",content:`# Уникальное торговое предложение

## Основное УТП
"Первая система управления знаниями, созданная специально для русскоязычных пользователей с поддержкой их рабочих процессов"

## Дополнительные УТП

### 1. Локализация на 100%
- Интерфейс полностью на русском
- Понимание российской специфики работы
- Интеграция с российскими сервисами

### 2. Простота внедрения
- Работает из коробки без настройки
- Интуитивно понятный интерфейс
- Быстрое освоение (до 30 минут)

### 3. Гибкость
- Подходит для разных типов работы
- Настраиваемые шаблоны
- Экспорт в популярные форматы

### 4. Приватность
- Данные остаются у пользователя
- Возможность локального развертывания
- Шифрование данных`,tags:["маркетинг","уtp"]},{id:"ai-company",title:"ИИ Компания",createdAt:"2026-02-08",content:`# Стратегия ИИ компании

## Направления развития

### 1. Персональные ассистенты
- Помощники для повседневных задач
- Интеграция с календарем и почтой
- Умное планирование времени

### 2. Корпоративные решения
- Системы управления знаниями для команд
- Автоматизация рутинных процессов
- Аналитика продуктивности

### 3. Образовательные продукты
- ИИ-репетиторы по разным предметам
- Системы адаптивного обучения
- Инструменты для преподавателей

## Технологический стек
- **Frontend**: Next.js, React, TypeScript
- **Backend**: Python, FastAPI, PostgreSQL
- **ИИ**: OpenAI API, локальные модели
- **Деплой**: Vercel, AWS, Docker

## Бизнес-модель
- Freemium для частных пользователей
- Подписка для команд и организаций
- Enterprise решения с кастомизацией

## Метрики успеха
- MAU (месячная активная аудитория)
- Retention rate
- Customer satisfaction (NPS)
- Время до первой ценности`,tags:["стратегия","ии","технологии"]}],a=[{id:"landing-ai-company",title:"Лендинг ИИ-компании",description:"Создать посадочную страницу для ИИ-компании с современным дизайном",status:"in-progress",priority:"high",createdAt:"2026-02-13"},{id:"company-name",title:"Название компании",description:"Придумать и зарегистрировать название для ИИ-компании",status:"todo",priority:"high",createdAt:"2026-02-12"},{id:"travel-agency-case",title:"Кейс турагентство",description:"Написать кейс-стади для проекта автоматизации турагентства",status:"backlog",priority:"medium",createdAt:"2026-02-10"},{id:"market-research",title:"Исследование рынка",description:"Провести анализ конкурентов в сфере ИИ-решений",status:"done",priority:"medium",createdAt:"2026-02-05",completedAt:"2026-02-11"},{id:"tech-stack-selection",title:"Выбор технологий",description:"Определить технический стек для разработки MVP",status:"done",priority:"high",createdAt:"2026-02-01",completedAt:"2026-02-08"}];function i(e){let i=e.toLowerCase(),l=t.filter(e=>e.title.toLowerCase().includes(i)||e.content.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i)));return{memories:l,documents:s.filter(e=>e.title.toLowerCase().includes(i)||e.content.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i))),tasks:a.filter(e=>e.title.toLowerCase().includes(i)||e.description?.toLowerCase().includes(i))}}e.s(["sampleDocuments",0,s,"sampleMemories",0,t,"sampleTasks",0,a,"searchContent",()=>i])},87316,e=>{"use strict";let t=(0,e.i(75254).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],87316)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},85503,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(78583),i=e.i(55436),l=e.i(87316),c=e.i(51975);let r=(0,e.i(75254).default)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var n=e.i(7233),d=e.i(18789),o=e.i(16148);function m(){let[e,m]=(0,s.useState)(""),[x,h]=(0,s.useState)(null),p=o.sampleDocuments.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.content.toLowerCase().includes(e.toLowerCase())||t.tags?.some(t=>t.toLowerCase().includes(e.toLowerCase()))).sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),g=e=>new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"});return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)(a.FileText,{className:"h-8 w-8 text-green-400"}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Документы"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.Search,{className:"h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"}),(0,t.jsx)("input",{type:"text",placeholder:"Поиск документов...",value:e,onChange:e=>m(e.target.value),className:"input-field pl-10 w-full sm:w-80"})]}),(0,t.jsxs)("button",{className:"btn-primary flex items-center space-x-2",children:[(0,t.jsx)(n.Plus,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"hidden sm:inline",children:"Создать"})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[(0,t.jsx)("div",{className:"lg:col-span-1 space-y-4",children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,t.jsxs)("h2",{className:"text-lg font-semibold text-white",children:["Документы (",p.length,")"]})}),(0,t.jsxs)("div",{className:"space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto",children:[p.map(e=>(0,t.jsxs)("div",{onClick:()=>h(e),className:`p-4 rounded-lg cursor-pointer transition-colors ${x?.id===e.id?"bg-green-900/30 border border-green-500":"bg-gray-800 hover:bg-gray-700"}`,children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-2",children:[(0,t.jsx)("h3",{className:"font-medium text-white text-sm",children:e.title}),(0,t.jsx)(r,{className:"h-4 w-4 text-gray-400 flex-shrink-0 ml-2"})]}),(0,t.jsx)("p",{className:"text-xs text-gray-400 mb-2",children:g(e.createdAt)}),(0,t.jsxs)("p",{className:"text-sm text-gray-300 line-clamp-3",children:[e.content.replace(/#{1,6}\s+/g,"").split("\n\n")[0].substring(0,200),"..."]}),e.tags&&e.tags.length>0&&(0,t.jsxs)("div",{className:"flex flex-wrap gap-1 mt-3",children:[e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"badge bg-green-900 text-green-200 text-xs",children:e},e)),e.tags.length>3&&(0,t.jsxs)("span",{className:"text-xs text-gray-400",children:["+",e.tags.length-3]})]})]},e.id)),0===p.length&&(0,t.jsxs)("div",{className:"text-center py-8 text-gray-400",children:[(0,t.jsx)(a.FileText,{className:"h-12 w-12 mx-auto mb-4 opacity-50"}),(0,t.jsx)("p",{children:"Документы не найдены"}),e&&(0,t.jsx)("p",{className:"text-sm mt-2",children:"Попробуйте изменить поисковый запрос"})]})]})]})}),(0,t.jsx)("div",{className:"lg:col-span-2",children:x?(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"border-b border-gray-700 pb-4 mb-6",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-3",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-white",children:x.title}),(0,t.jsxs)("button",{className:"btn-secondary flex items-center space-x-2",children:[(0,t.jsx)(r,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:"Редактировать"})]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-4 text-sm text-gray-400",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,t.jsx)(l.Calendar,{className:"h-4 w-4"}),(0,t.jsxs)("span",{children:["Создан ",g(x.createdAt)]})]}),x.tags&&x.tags.length>0&&(0,t.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,t.jsx)(c.Tag,{className:"h-4 w-4"}),(0,t.jsx)("div",{className:"flex space-x-1",children:x.tags.map(e=>(0,t.jsx)("span",{className:"badge bg-green-900 text-green-200",children:e},e))})]})]})]}),(0,t.jsx)("div",{className:"prose-dark",children:(0,t.jsx)(d.default,{children:x.content})})]}):(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"text-center py-12",children:[(0,t.jsx)(a.FileText,{className:"h-16 w-16 mx-auto mb-6 text-gray-600"}),(0,t.jsx)("h2",{className:"text-xl font-semibold text-gray-400 mb-2",children:"Выберите документ для просмотра"}),(0,t.jsx)("p",{className:"text-gray-500 mb-6",children:"Кликните на любой документ из списка слева, чтобы посмотреть его содержимое"}),(0,t.jsxs)("button",{className:"btn-primary flex items-center space-x-2 mx-auto",children:[(0,t.jsx)(n.Plus,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:"Создать новый документ"})]})]})})})]})]})}e.s(["default",()=>m],85503)}]);
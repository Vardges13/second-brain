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
- Время до первой ценности`,tags:["стратегия","ии","технологии"]}],i=[{id:"landing-ai-company",title:"Лендинг ИИ-компании",description:"Создать посадочную страницу для ИИ-компании с современным дизайном",status:"in-progress",priority:"high",createdAt:"2026-02-13"},{id:"company-name",title:"Название компании",description:"Придумать и зарегистрировать название для ИИ-компании",status:"todo",priority:"high",createdAt:"2026-02-12"},{id:"travel-agency-case",title:"Кейс турагентство",description:"Написать кейс-стади для проекта автоматизации турагентства",status:"backlog",priority:"medium",createdAt:"2026-02-10"},{id:"market-research",title:"Исследование рынка",description:"Провести анализ конкурентов в сфере ИИ-решений",status:"done",priority:"medium",createdAt:"2026-02-05",completedAt:"2026-02-11"},{id:"tech-stack-selection",title:"Выбор технологий",description:"Определить технический стек для разработки MVP",status:"done",priority:"high",createdAt:"2026-02-01",completedAt:"2026-02-08"}];function a(e){let a=e.toLowerCase(),l=t.filter(e=>e.title.toLowerCase().includes(a)||e.content.toLowerCase().includes(a)||e.tags?.some(e=>e.toLowerCase().includes(a)));return{memories:l,documents:s.filter(e=>e.title.toLowerCase().includes(a)||e.content.toLowerCase().includes(a)||e.tags?.some(e=>e.toLowerCase().includes(a))),tasks:i.filter(e=>e.title.toLowerCase().includes(a)||e.description?.toLowerCase().includes(a))}}e.s(["sampleDocuments",0,s,"sampleMemories",0,t,"sampleTasks",0,i,"searchContent",()=>a])},3116,e=>{"use strict";let t=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>t],3116)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},8412,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(56272),a=e.i(7233),l=e.i(75254);let c=(0,l.default)("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);var r=e.i(3116);let n=(0,l.default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),d=(0,l.default)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),o=(0,l.default)("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);var m=e.i(16148);let x={backlog:{title:"Backlog",icon:o,color:"text-gray-400",bgColor:"bg-gray-600"},todo:{title:"К выполнению",icon:n,color:"text-blue-400",bgColor:"bg-blue-600"},"in-progress":{title:"В работе",icon:r.Clock,color:"text-yellow-400",bgColor:"bg-yellow-600"},done:{title:"Готово",icon:d,color:"text-green-400",bgColor:"bg-green-600"}},h={high:{label:"Высокий",class:"badge-high"},medium:{label:"Средний",class:"badge-medium"},low:{label:"Низкий",class:"badge-low"}};function p(){let[e,l]=(0,s.useState)(m.sampleTasks),[r,n]=(0,s.useState)(!1),d=t=>e.filter(e=>e.status===t),o=e=>new Date(e).toLocaleDateString("ru-RU",{day:"numeric",month:"short"}),p=({task:e})=>(0,t.jsxs)("div",{className:"kanban-card group",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-2",children:[(0,t.jsx)("h3",{className:"font-medium text-white text-sm line-clamp-2",children:e.title}),(0,t.jsx)("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:(0,t.jsx)(c,{className:"h-4 w-4 text-gray-400 hover:text-white"})})]}),e.description&&(0,t.jsx)("p",{className:"text-sm text-gray-300 mb-3 line-clamp-2",children:e.description}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:h[e.priority].class,children:h[e.priority].label}),(0,t.jsx)("span",{className:"text-xs text-gray-400",children:e.completedAt?o(e.completedAt):o(e.createdAt)})]})]}),g=({status:e})=>{let s=x[e],i=d(e);return(0,t.jsxs)("div",{className:"kanban-column",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("div",{className:`p-1.5 rounded ${s.bgColor}`,children:(0,t.jsx)(s.icon,{className:"h-4 w-4 text-white"})}),(0,t.jsx)("h2",{className:"font-semibold text-white",children:s.title}),(0,t.jsx)("span",{className:"bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full",children:i.length})]}),(0,t.jsx)("button",{className:"text-gray-400 hover:text-white",children:(0,t.jsx)(a.Plus,{className:"h-4 w-4"})})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[i.map(e=>(0,t.jsx)(p,{task:e},e.id)),0===i.length&&(0,t.jsxs)("div",{className:"text-center py-8 text-gray-500",children:[(0,t.jsx)(s.icon,{className:"h-8 w-8 mx-auto mb-2 opacity-50"}),(0,t.jsx)("p",{className:"text-sm",children:"Нет задач"})]})]})]})};return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)(i.CheckSquare,{className:"h-8 w-8 text-yellow-400"}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Задачи"})]}),(0,t.jsx)("div",{className:"flex items-center space-x-3",children:(0,t.jsxs)("button",{className:"btn-primary flex items-center space-x-2",onClick:()=>n(!0),children:[(0,t.jsx)(a.Plus,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:"Новая задача"})]})})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:Object.entries(x).map(([e,s])=>{let i=d(e).length;return(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"p-3 rounded-lg bg-gray-800",children:(0,t.jsx)(s.icon,{className:`h-6 w-6 ${s.color}`})}),(0,t.jsxs)("div",{className:"ml-3",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-400",children:s.title}),(0,t.jsx)("p",{className:"text-2xl font-bold text-white",children:i})]})]})},e)})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Object.keys(x).map(e=>(0,t.jsx)(g,{status:e},e))}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold text-white mb-4",children:"Сводка"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-yellow-400",children:e.filter(e=>"done"!==e.status).length}),(0,t.jsx)("div",{className:"text-sm text-gray-400",children:"Активных задач"})]}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-green-400",children:e.filter(e=>"done"===e.status).length}),(0,t.jsx)("div",{className:"text-sm text-gray-400",children:"Завершено"})]}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-red-400",children:e.filter(e=>"high"===e.priority&&"done"!==e.status).length}),(0,t.jsx)("div",{className:"text-sm text-gray-400",children:"Высокий приоритет"})]})]})]})]})}e.s(["default",()=>p],8412)}]);
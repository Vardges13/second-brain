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
- Время до первой ценности`,tags:["стратегия","ии","технологии"]}],a=[{id:"landing-ai-company",title:"Лендинг ИИ-компании",description:"Создать посадочную страницу для ИИ-компании с современным дизайном",status:"in-progress",priority:"high",createdAt:"2026-02-13"},{id:"company-name",title:"Название компании",description:"Придумать и зарегистрировать название для ИИ-компании",status:"todo",priority:"high",createdAt:"2026-02-12"},{id:"travel-agency-case",title:"Кейс турагентство",description:"Написать кейс-стади для проекта автоматизации турагентства",status:"backlog",priority:"medium",createdAt:"2026-02-10"},{id:"market-research",title:"Исследование рынка",description:"Провести анализ конкурентов в сфере ИИ-решений",status:"done",priority:"medium",createdAt:"2026-02-05",completedAt:"2026-02-11"},{id:"tech-stack-selection",title:"Выбор технологий",description:"Определить технический стек для разработки MVP",status:"done",priority:"high",createdAt:"2026-02-01",completedAt:"2026-02-08"}];function i(e){let i=e.toLowerCase(),r=t.filter(e=>e.title.toLowerCase().includes(i)||e.content.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i)));return{memories:r,documents:s.filter(e=>e.title.toLowerCase().includes(i)||e.content.toLowerCase().includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i))),tasks:a.filter(e=>e.title.toLowerCase().includes(i)||e.description?.toLowerCase().includes(i))}}e.s(["sampleDocuments",0,s,"sampleMemories",0,t,"sampleTasks",0,a,"searchContent",()=>i])},3116,e=>{"use strict";let t=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>t],3116)},52683,e=>{"use strict";var t=e.i(43476),s=e.i(17923),a=e.i(56272),i=e.i(78583),r=e.i(55711),l=e.i(3116);let c=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);var n=e.i(16148),d=e.i(22016);function o(){let e=n.sampleMemories.slice(0,3),o=n.sampleDocuments.slice(0,3),m=n.sampleTasks.filter(e=>"done"!==e.status),x=n.sampleTasks.filter(e=>"done"===e.status),h=n.sampleTasks.filter(e=>"in-progress"===e.status),g=[{name:"Всего записей",value:n.sampleMemories.length.toString(),icon:r.Brain,gradient:"from-blue-500 to-blue-600",bgGradient:"from-blue-500/10 to-blue-600/5"},{name:"Документов",value:n.sampleDocuments.length.toString(),icon:i.FileText,gradient:"from-green-500 to-green-600",bgGradient:"from-green-500/10 to-green-600/5"},{name:"Активных задач",value:m.length.toString(),icon:a.CheckSquare,gradient:"from-purple-500 to-purple-600",bgGradient:"from-purple-500/10 to-purple-600/5"},{name:"Выполнено",value:x.length.toString(),icon:c,gradient:"from-orange-500 to-orange-600",bgGradient:"from-orange-500/10 to-orange-600/5"}];return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsx)(s.BarChart3,{className:"h-8 w-8 text-blue-400"}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-white",children:"Дашборд"})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",children:g.map(e=>(0,t.jsx)("div",{className:`card bg-gradient-to-br ${e.bgGradient} hover:scale-105`,children:(0,t.jsxs)("div",{className:"flex flex-col items-center text-center space-y-3",children:[(0,t.jsx)("div",{className:`p-3 rounded-xl bg-gradient-to-r ${e.gradient} shadow-lg`,children:(0,t.jsx)(e.icon,{className:"h-6 w-6 text-white"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-2xl font-bold text-white mb-1",children:e.value}),(0,t.jsx)("p",{className:"text-sm font-medium text-gray-400",children:e.name})]})]})},e.name))}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsxs)("h2",{className:"text-xl font-semibold text-white flex items-center",children:[(0,t.jsx)(r.Brain,{className:"h-5 w-5 mr-2 text-blue-400"}),"Последние записи памяти"]}),(0,t.jsx)(d.default,{href:"/memory",className:"text-blue-400 hover:text-blue-300 text-sm font-medium",children:"Все записи →"})]}),(0,t.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,t.jsxs)("div",{className:"border-l-2 border-blue-500 pl-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("h3",{className:"font-medium text-white",children:e.title}),(0,t.jsx)("span",{className:"text-xs text-gray-400",children:e.date})]}),(0,t.jsxs)("p",{className:"text-sm text-gray-300 mt-1 line-clamp-2",children:[e.content.substring(0,120),"..."]}),e.tags&&(0,t.jsx)("div",{className:"flex space-x-2 mt-2",children:e.tags.slice(0,2).map(e=>(0,t.jsx)("span",{className:"badge bg-blue-900 text-blue-200",children:e},e))})]},e.id))})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsxs)("h2",{className:"text-xl font-semibold text-white flex items-center",children:[(0,t.jsx)(a.CheckSquare,{className:"h-5 w-5 mr-2 text-yellow-400"}),"Активные задачи"]}),(0,t.jsx)(d.default,{href:"/tasks",className:"text-yellow-400 hover:text-yellow-300 text-sm font-medium",children:"Канбан →"})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[h.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between p-3 bg-gray-800 rounded-md",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h3",{className:"font-medium text-white",children:e.title}),e.description&&(0,t.jsx)("p",{className:"text-sm text-gray-400 mt-1",children:e.description})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("span",{className:`badge-${e.priority}`,children:"high"===e.priority?"Высокий":"medium"===e.priority?"Средний":"Низкий"}),(0,t.jsx)("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"})]})]},e.id)),0===h.length&&(0,t.jsx)("p",{className:"text-gray-400 text-sm italic",children:"Нет задач в работе"})]})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-header",children:[(0,t.jsxs)("h2",{className:"text-xl font-semibold text-white flex items-center",children:[(0,t.jsx)(i.FileText,{className:"h-5 w-5 mr-2 text-green-400"}),"Последние документы"]}),(0,t.jsx)(d.default,{href:"/documents",className:"text-green-400 hover:text-green-300 text-sm font-medium",children:"Все документы →"})]}),(0,t.jsx)("div",{className:"space-y-4",children:o.map(e=>(0,t.jsxs)("div",{className:"border-l-2 border-green-500 pl-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("h3",{className:"font-medium text-white",children:e.title}),(0,t.jsx)("span",{className:"text-xs text-gray-400",children:e.createdAt})]}),(0,t.jsxs)("p",{className:"text-sm text-gray-300 mt-1 line-clamp-2",children:[e.content.substring(0,120),"..."]}),e.tags&&(0,t.jsx)("div",{className:"flex space-x-2 mt-2",children:e.tags.slice(0,2).map(e=>(0,t.jsx)("span",{className:"badge bg-green-900 text-green-200",children:e},e))})]},e.id))})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsxs)("h2",{className:"text-xl font-semibold text-white flex items-center",children:[(0,t.jsx)(l.Clock,{className:"h-5 w-5 mr-2 text-purple-400"}),"Быстрые действия"]})}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-3",children:[(0,t.jsxs)(d.default,{href:"/memory",className:"flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group",children:[(0,t.jsx)(r.Brain,{className:"h-5 w-5 text-blue-400 mr-3"}),(0,t.jsx)("span",{className:"text-white group-hover:text-blue-300",children:"Новая запись памяти"})]}),(0,t.jsxs)(d.default,{href:"/documents",className:"flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group",children:[(0,t.jsx)(i.FileText,{className:"h-5 w-5 text-green-400 mr-3"}),(0,t.jsx)("span",{className:"text-white group-hover:text-green-300",children:"Создать документ"})]}),(0,t.jsxs)(d.default,{href:"/tasks",className:"flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors group",children:[(0,t.jsx)(a.CheckSquare,{className:"h-5 w-5 text-yellow-400 mr-3"}),(0,t.jsx)("span",{className:"text-white group-hover:text-yellow-300",children:"Добавить задачу"})]})]})]})]})]})}e.s(["default",()=>o],52683)}]);
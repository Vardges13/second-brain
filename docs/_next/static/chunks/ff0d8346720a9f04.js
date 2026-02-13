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
- Время до первой ценности`,tags:["стратегия","ии","технологии"]}],i=[{id:"landing-ai-company",title:"Лендинг ИИ-компании",description:"Создать посадочную страницу для ИИ-компании с современным дизайном",status:"in-progress",priority:"high",createdAt:"2026-02-13"},{id:"company-name",title:"Название компании",description:"Придумать и зарегистрировать название для ИИ-компании",status:"todo",priority:"high",createdAt:"2026-02-12"},{id:"travel-agency-case",title:"Кейс турагентство",description:"Написать кейс-стади для проекта автоматизации турагентства",status:"backlog",priority:"medium",createdAt:"2026-02-10"},{id:"market-research",title:"Исследование рынка",description:"Провести анализ конкурентов в сфере ИИ-решений",status:"done",priority:"medium",createdAt:"2026-02-05",completedAt:"2026-02-11"},{id:"tech-stack-selection",title:"Выбор технологий",description:"Определить технический стек для разработки MVP",status:"done",priority:"high",createdAt:"2026-02-01",completedAt:"2026-02-08"}];function r(e){let r=e.toLowerCase(),n=t.filter(e=>e.title.toLowerCase().includes(r)||e.content.toLowerCase().includes(r)||e.tags?.some(e=>e.toLowerCase().includes(r)));return{memories:n,documents:s.filter(e=>e.title.toLowerCase().includes(r)||e.content.toLowerCase().includes(r)||e.tags?.some(e=>e.toLowerCase().includes(r))),tasks:i.filter(e=>e.title.toLowerCase().includes(r)||e.description?.toLowerCase().includes(r))}}e.s(["sampleDocuments",0,s,"sampleMemories",0,t,"sampleTasks",0,i,"searchContent",()=>r])},16015,(e,t,s)=>{},98547,(e,t,s)=>{var i=e.i(47167);e.r(16015);var r=e.r(71645),n=r&&"object"==typeof r&&"default"in r?r:{default:r},a=void 0!==i.default&&i.default.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,r=t.optimizeForSpeed,n=void 0===r?a:r;l(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",l("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var c="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=c?c.getAttribute("content"):null}var t,s=e.prototype;return s.setOptimizeForSpeed=function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"==typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(l(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!=typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var s="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];l(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},s.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},s.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},s.makeStyleTag=function(e,t,s){t&&l(o(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return s?r.insertBefore(i,s):r.appendChild(i),i},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();function l(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0},u={};function h(e,t){if(!t)return"jsx-"+e;var s=String(t),i=e+s;return u[i]||(u[i]="jsx-"+d(e+"-"+s)),u[i]}function m(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var s=e+t;return u[s]||(u[s]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[s]}var p=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,r=t.optimizeForSpeed,n=void 0!==r&&r;this._sheet=i||new c({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),i&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var n=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=n,this._instancesCounts[i]=1},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return s[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,s;return t=this.cssRules(),void 0===(s=e)&&(s={}),t.map(function(e){var t=e[0],i=e[1];return n.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,s=e.dynamic,i=e.id;if(s){var r=h(i,s);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return m(r,e)}):[m(r,t)]}}return{styleId:h(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),f=r.createContext(null);function y(){return new p}function g(){return r.useContext(f)}f.displayName="StyleSheetContext";var v=n.default.useInsertionEffect||n.default.useLayoutEffect,x="u">typeof window?y():void 0;function S(e){var t=x||g();return t&&("u"<typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}S.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},s.StyleRegistry=function(e){var t=e.registry,s=e.children,i=r.useContext(f),a=r.useState(function(){return i||t||y()})[0];return n.default.createElement(f.Provider,{value:a},s)},s.createStyleRegistry=y,s.style=S,s.useStyleRegistry=g},37902,(e,t,s)=>{t.exports=e.r(98547).style},52683,e=>{"use strict";var t=e.i(43476),s=e.i(37902),i=e.i(16148),r=e.i(22016);function n(){let e=i.sampleMemories.slice(0,3),n=i.sampleTasks.filter(e=>"done"!==e.status);return i.sampleTasks.filter(e=>"done"===e.status),i.sampleTasks.filter(e=>"in-progress"===e.status),(0,t.jsxs)("div",{style:{paddingBottom:"2rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("div",{style:{marginBottom:"2rem"},className:"jsx-ec7e397b5c5a9de4",children:(0,t.jsx)("h1",{style:{fontSize:"1.75rem",fontWeight:"700",color:"var(--text-primary)",margin:0},className:"jsx-ec7e397b5c5a9de4",children:"📊 Дашборд"})}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginBottom:"2rem"},className:"jsx-ec7e397b5c5a9de4",children:[{name:"Записей памяти",value:"2",className:"stat-blue"},{name:"Документов",value:"3",className:"stat-green"},{name:"Активных задач",value:"3",className:"stat-purple"},{name:"Выполнено",value:"2",className:"stat-orange"}].map(e=>(0,t.jsxs)("div",{className:`jsx-ec7e397b5c5a9de4 stat-card ${e.className}`,children:[(0,t.jsx)("div",{className:"jsx-ec7e397b5c5a9de4 stat-number",children:e.value}),(0,t.jsx)("div",{className:"jsx-ec7e397b5c5a9de4 stat-label",children:e.name})]},e.name))}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsxs)("div",{className:"jsx-ec7e397b5c5a9de4 card",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("h2",{style:{fontSize:"1.2rem",fontWeight:"600",color:"var(--text-primary)",margin:0,display:"flex",alignItems:"center",gap:"0.5rem"},className:"jsx-ec7e397b5c5a9de4",children:"🧠 Последние записи"}),(0,t.jsx)(r.default,{href:"/memory",style:{color:"var(--accent-blue)",textDecoration:"none",fontSize:"0.9rem",fontWeight:"500"},children:"Все записи →"})]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},className:"jsx-ec7e397b5c5a9de4",children:e.map(e=>(0,t.jsxs)("div",{style:{borderLeft:"3px solid var(--accent-blue)",paddingLeft:"1rem",padding:"0.75rem 0 0.75rem 1rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.25rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("h3",{style:{fontSize:"1rem",fontWeight:"600",color:"var(--text-primary)",margin:0,lineHeight:"1.3"},className:"jsx-ec7e397b5c5a9de4",children:e.title}),(0,t.jsx)("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:"500",whiteSpace:"nowrap",marginLeft:"1rem"},className:"jsx-ec7e397b5c5a9de4",children:e.date})]}),(0,t.jsxs)("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",lineHeight:"1.5",margin:"0 0 0.5rem 0"},className:"jsx-ec7e397b5c5a9de4",children:[e.content.substring(0,120),"..."]}),e.tags&&(0,t.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},className:"jsx-ec7e397b5c5a9de4",children:e.tags.slice(0,2).map(e=>(0,t.jsx)("span",{className:"jsx-ec7e397b5c5a9de4 badge badge-blue",children:e},e))})]},e.id))})]}),(0,t.jsxs)("div",{className:"jsx-ec7e397b5c5a9de4 card",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("h2",{style:{fontSize:"1.2rem",fontWeight:"600",color:"var(--text-primary)",margin:0,display:"flex",alignItems:"center",gap:"0.5rem"},className:"jsx-ec7e397b5c5a9de4",children:"✅ Активные задачи"}),(0,t.jsx)(r.default,{href:"/tasks",style:{color:"var(--accent-purple)",textDecoration:"none",fontSize:"0.9rem",fontWeight:"500"},children:"Канбан →"})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},className:"jsx-ec7e397b5c5a9de4",children:[n.slice(0,4).map(e=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem",background:"#f8fafc",borderRadius:"8px",border:"1px solid var(--border)"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsxs)("div",{style:{flex:1},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("h3",{style:{fontSize:"0.9rem",fontWeight:"600",color:"var(--text-primary)",margin:"0 0 0.25rem 0"},className:"jsx-ec7e397b5c5a9de4",children:e.title}),e.description&&(0,t.jsx)("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:0,lineHeight:"1.4"},className:"jsx-ec7e397b5c5a9de4",children:e.description})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},className:"jsx-ec7e397b5c5a9de4",children:[(0,t.jsx)("span",{className:`jsx-ec7e397b5c5a9de4 badge badge-${e.priority}`,children:"high"===e.priority?"Высокий":"medium"===e.priority?"Средний":"Низкий"}),(0,t.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"in-progress"===e.status?"#f59e0b":"todo"===e.status?"#3b82f6":"#64748b"},className:"jsx-ec7e397b5c5a9de4"})]})]},e.id)),0===n.length&&(0,t.jsx)("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",fontStyle:"italic",textAlign:"center",padding:"1rem 0",margin:0},className:"jsx-ec7e397b5c5a9de4",children:"Нет активных задач"})]})]})]}),(0,t.jsx)(s.default,{id:"ec7e397b5c5a9de4",children:"@media (width>=768px){.stats-grid.jsx-ec7e397b5c5a9de4{grid-template-columns:repeat(4,1fr)!important}.content-grid.jsx-ec7e397b5c5a9de4{grid-template-columns:repeat(2,1fr)!important}}"})]})}e.s(["default",()=>n])}]);
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
- Текст: белый/светло-серый`,tags:["дизайн","ui","анализ"]}],r=[{id:"positioning",title:"Позиционирование",createdAt:"2026-02-10",content:`# Позиционирование компании

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
- Время до первой ценности`,tags:["стратегия","ии","технологии"]}],i=[{id:"landing-ai-company",title:"Лендинг ИИ-компании",description:"Создать посадочную страницу для ИИ-компании с современным дизайном",status:"in-progress",priority:"high",createdAt:"2026-02-13"},{id:"company-name",title:"Название компании",description:"Придумать и зарегистрировать название для ИИ-компании",status:"todo",priority:"high",createdAt:"2026-02-12"},{id:"travel-agency-case",title:"Кейс турагентство",description:"Написать кейс-стади для проекта автоматизации турагентства",status:"backlog",priority:"medium",createdAt:"2026-02-10"},{id:"market-research",title:"Исследование рынка",description:"Провести анализ конкурентов в сфере ИИ-решений",status:"done",priority:"medium",createdAt:"2026-02-05",completedAt:"2026-02-11"},{id:"tech-stack-selection",title:"Выбор технологий",description:"Определить технический стек для разработки MVP",status:"done",priority:"high",createdAt:"2026-02-01",completedAt:"2026-02-08"}];function s(e){let s=e.toLowerCase(),n=t.filter(e=>e.title.toLowerCase().includes(s)||e.content.toLowerCase().includes(s)||e.tags?.some(e=>e.toLowerCase().includes(s)));return{memories:n,documents:r.filter(e=>e.title.toLowerCase().includes(s)||e.content.toLowerCase().includes(s)||e.tags?.some(e=>e.toLowerCase().includes(s))),tasks:i.filter(e=>e.title.toLowerCase().includes(s)||e.description?.toLowerCase().includes(s))}}e.s(["sampleDocuments",0,r,"sampleMemories",0,t,"sampleTasks",0,i,"searchContent",()=>s])},75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:a="",children:l,iconNode:d,...c},u)=>(0,t.createElement)("svg",{ref:u,...s,width:i,height:i,stroke:e,strokeWidth:o?24*Number(n)/Number(i):n,className:r("lucide",a),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),o=(e,s)=>{let o=(0,t.forwardRef)(({className:o,...a},l)=>(0,t.createElement)(n,{ref:l,iconNode:s,className:r(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...a}));return o.displayName=i(e),o};e.s(["default",()=>o],75254)},16015,(e,t,r)=>{},98547,(e,t,r)=>{var i=e.i(47167);e.r(16015);var s=e.r(71645),n=s&&"object"==typeof s&&"default"in s?s:{default:s},o=void 0!==i.default&&i.default.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,n=void 0===s?o:s;d(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",d("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(d(a(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var r="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];d(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&d(a(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(i,r):s.appendChild(i),i},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},u={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return u[i]||(u[i]="jsx-"+c(e+"-"+r)),u[i]}function p(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return u[r]||(u[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,i=void 0===r?null:r,s=t.optimizeForSpeed,n=void 0!==s&&s;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),i&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),i=r.styleId,s=r.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var n=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=n,this._instancesCounts[i]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var i=this._fromServer&&this._fromServer[r];i?(i.parentNode.removeChild(i),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],i=e[1];return n.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,i=e.id;if(r){var s=h(i,r);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return p(s,e)}):[p(s,t)]}}return{styleId:h(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),f=s.createContext(null);function y(){return new m}function g(){return s.useContext(f)}f.displayName="StyleSheetContext";var v=n.default.useInsertionEffect||n.default.useLayoutEffect,S="u">typeof window?y():void 0;function _(e){var t=S||g();return t&&("u"<typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}_.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},r.StyleRegistry=function(e){var t=e.registry,r=e.children,i=s.useContext(f),o=s.useState(function(){return i||t||y()})[0];return n.default.createElement(f.Provider,{value:o},r)},r.createStyleRegistry=y,r.style=_,r.useStyleRegistry=g},37902,(e,t,r)=>{t.exports=e.r(98547).style},8412,e=>{"use strict";var t=e.i(43476),r=e.i(37902),i=e.i(16148);let s=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),n={backlog:"Backlog",todo:"К выполнению","in-progress":"В работе",done:"Готово"},o={backlog:"kanban-header-backlog",todo:"kanban-header-todo","in-progress":"kanban-header-progress",done:"kanban-header-done"};function a(){return(0,t.jsxs)("div",{className:"jsx-482038bad46821a1",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},className:"jsx-482038bad46821a1",children:[(0,t.jsx)("h1",{style:{fontSize:"1.75rem",fontWeight:"700",color:"var(--text-primary)",margin:0},className:"jsx-482038bad46821a1",children:"✅ Задачи"}),(0,t.jsxs)("button",{className:"jsx-482038bad46821a1 btn-primary",children:[(0,t.jsx)(s,{style:{width:"16px",height:"16px"}}),"Новая задача"]})]}),(0,t.jsx)("div",{className:"jsx-482038bad46821a1 kanban-container",children:["backlog","todo","in-progress","done"].map(e=>{let r=i.sampleTasks.filter(t=>t.status===e);return(0,t.jsxs)("div",{className:"jsx-482038bad46821a1 kanban-column",children:[(0,t.jsxs)("div",{className:`jsx-482038bad46821a1 kanban-header ${o[e]}`,children:[(0,t.jsx)("span",{className:"jsx-482038bad46821a1",children:n[e]}),(0,t.jsx)("span",{style:{fontSize:"0.8rem",fontWeight:"500",opacity:.7},className:"jsx-482038bad46821a1",children:r.length})]}),(0,t.jsxs)("div",{className:"jsx-482038bad46821a1",children:[r.map(e=>(0,t.jsxs)("div",{className:`jsx-482038bad46821a1 kanban-card priority-${e.priority}`,children:[(0,t.jsxs)("div",{style:{marginBottom:"0.5rem"},className:"jsx-482038bad46821a1",children:[(0,t.jsx)("h3",{style:{fontSize:"0.9rem",fontWeight:"600",color:"var(--text-primary)",margin:"0 0 0.25rem 0",lineHeight:"1.3"},className:"jsx-482038bad46821a1",children:e.title}),e.description&&(0,t.jsx)("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:"0 0 0.5rem 0",lineHeight:"1.4"},className:"jsx-482038bad46821a1",children:e.description})]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},className:"jsx-482038bad46821a1",children:[(0,t.jsx)("span",{className:`jsx-482038bad46821a1 badge badge-${e.priority}`,children:"high"===e.priority?"Высокий":"medium"===e.priority?"Средний":"Низкий"}),(0,t.jsx)("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:"500"},className:"jsx-482038bad46821a1",children:new Date(e.createdAt).toLocaleDateString("ru-RU")})]})]},e.id)),0===r.length&&(0,t.jsx)("div",{style:{textAlign:"center",padding:"2rem 1rem",color:"var(--text-muted)",fontSize:"0.9rem"},className:"jsx-482038bad46821a1",children:"Нет задач"})]})]},e)})}),(0,t.jsx)("div",{style:{marginTop:"1rem",padding:"0.75rem 1rem",background:"white",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"0.8rem",color:"var(--text-muted)",display:"block"},className:"jsx-482038bad46821a1",children:"💡 На мобильном устройстве прокрутите горизонтально для просмотра всех колонок"}),(0,t.jsx)(r.default,{id:"482038bad46821a1",children:"@media (width>=768px){.mobile-hint.jsx-482038bad46821a1{display:none}}"})]})}e.s(["default",()=>a],8412)}]);
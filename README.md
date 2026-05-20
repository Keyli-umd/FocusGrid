# FocusGrid 🗂️

> Panel de productividad minimalista para gestión de tareas, construido con React + Vite.

---

## 📌 Descripción

**FocusGrid** es una aplicación web de productividad que permite organizar y gestionar tareas de forma visual. Implementa **persistencia de datos con LocalStorage**, lo que significa que tus tareas se mantienen aunque cierres el navegador. Incluye filtrado dinámico para visualizar tareas según su estado.

---

## ✨ Funcionalidades

- ✅ Crear, editar y eliminar tareas
- 🔍 Filtrado de tareas por estado (pendiente, completada, etc.)
- 💾 Persistencia de datos con `localStorage` — los datos no se pierden al recargar
- ⚛️ Gestión de estado global con React
- 📱 Diseño responsivo y minimalista

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React.js | Librería principal de UI |
| Vite | Bundler y entorno de desarrollo |
| JavaScript (ES6+) | Lógica de la aplicación |
| localStorage API | Persistencia de datos en el navegador |
| CSS | Estilos personalizados |

---

## 🚀 Cómo correr el proyecto localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/Keyli-umd/FocusGrid.git

# 2. Entra al proyecto
cd FocusGrid

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173`

---

## 📂 Estructura del proyecto

```
FocusGrid/
├── src/
│   ├── components/     # Componentes de UI (TaskCard, FilterBar...)
│   ├── context/        # Contexto global si aplica
│   ├── App.jsx         # Componente raíz
│   └── main.jsx        # Punto de entrada
├── public/
├── index.html
└── package.json
```

> Ajusta esta estructura si la tuya es diferente.

---

## 💡 Aprendizajes clave

- Implementación de `localStorage` para persistencia sin backend
- Manejo de estado con `useState` y `useEffect`
- Diseño de componentes reutilizables en React
- Filtrado reactivo de listas en tiempo real

---

## 👩‍💻 Autora

**Keyli Michell Londoño**
Tecnóloga en Análisis y Desarrollo de Sistemas de Información — SENA

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.

# Nerdy Neighbor

A productivity and study companion that combines task management, time tracking, and AI-powered homework assistance into a single web app.
<img width="1366" height="768" alt="Screenshot from 2026-06-17 20-36-41" src="https://github.com/user-attachments/assets/3fb2bf08-52f1-4db4-a0c7-65b2cd1d451e" />


## 🚀 Live Demo

**Try it here:  https://scraxx99.github.io/NerdyNeighbor/

---

## Features

* ✅ Persistent todo list with local storage
* ⏱️ Built-in study timer with pause and reset controls
* 🤖 AI homework assistant powered by Gemini
* 💾 Automatically saves tasks between browser sessions
* 🎨 Modern UI built with React, Tailwind CSS, and glassmorphism styling
* ☁️ Secure AI backend using Cloudflare Workers to protect API keys

---

## Quick Start

### Use Online

Simply visit the live demo:

**https://YOUR_DEPLOY_URL**

No installation required.

---

## Run Locally

### Requirements

* Node.js 20+
* npm

### Clone the repository

```bash
git clone https://github.com/scraxx99/nerdy-neighbor.git
cd nerdy-neighbor
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

---

## Environment Variables

The frontend does **not** store any API keys.

AI requests are securely routed through a Cloudflare Worker that stores the Gemini API key as a secret.

If deploying your own Worker:

```text
GEMINI_API_KEY=your_api_key_here
```

Store it using:

```bash
wrangler secret put GEMINI_API_KEY
```

---

## How It Works

Nerdy Neighbor was designed to reduce context switching while studying. Instead of opening separate apps for timers, notes, task lists, and AI tools, everything is available in one interface.

The todo list uses browser local storage so tasks persist between sessions without requiring an account or database.

The AI assistant is powered by Google's Gemini API, but API keys are never exposed to the client. A Cloudflare Worker acts as a secure backend proxy, handling requests and enforcing CORS and rate limits.

The interface is built with React, TypeScript, Tailwind CSS, and Vite for fast performance and a responsive experience.

---

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Cloudflare Workers
* Google Gemini API

---

## Future Plans

* 📚 Study session analytics
* 📅 Calendar integration
* 📝 AI-generated study guides
* 🔔 Reminder notifications
* 🌙 Additional themes and customization

---

## Credits

* Google Gemini API for AI capabilities
* Cloudflare Workers for secure serverless backend hosting
* React and Vite ecosystems
* Tailwind CSS for styling

Created by **Scrax99** for Hack Club Stardance.

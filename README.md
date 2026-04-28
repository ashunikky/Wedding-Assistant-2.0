
# 💍 Wedding AI Assistant

A personalized AI-powered wedding concierge built for the celebration of **Suraj Kumar Gupta** and **Rani Kumari**. Guests and family members can ask questions about the wedding — events, venue, schedule, people — and get instant answers in Hindi and English.

🌐 **Live App:** [surajraniwedding.vercel.app](https://surajraniwedding.vercel.app)
🔧 **Backend API:** [wedding-ai-rag-assistant-backend.onrender.com](https://wedding-ai-rag-assistant-backend.onrender.com)

---

## ✨ Features

- **Role-based access** — separate experience for Ladkewale (Groom's side) and Ladkiwale (Bride's side)
- **AI-powered Q&A** — RAG (Retrieval Augmented Generation) backend answers wedding-specific questions
- **Personalized greetings** — role-aware welcome message on entry and after switching sides
- **Smart link rendering** — automatically detects and renders Google Maps locations, route directions, and LinkedIn profiles as rich cards
- **Quick suggestion chips** — one-tap queries for Groom, Bride, Developer, and Next Event info
- **Role switching** — seamlessly switch between family sides with a fresh session
- **Fully mobile-first** — designed to fit any phone screen without scrolling
- **Modern Indian Luxe theme** — charcoal black, champagne gold, and coral accents

---

## 🖥️ Tech Stack

### Frontend
| Tech | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Tailwind CSS v4 | Styling |
| Vite | Build tool |
| Vercel | Deployment |

### Backend
| Tech | Purpose |
|---|---|
| Python / FastAPI | REST API server |
| RAG pipeline | Wedding knowledge retrieval |
| Render | Deployment |

---

## 📁 Project Structure

```
frontend/src/
├── components/
│   ├── MessageBubble.jsx     # Chat bubbles with smart URL detection
│   ├── Suggestions.jsx       # Quick-tap query suggestion chips
│   ├── RoleSwitchModal.jsx   # Confirmation modal for switching sides
│
├── pages/
│   ├── Home.jsx              # Landing page with role selector
│   ├── Chat.jsx              # Main chat interface
│
├── services/
│   └── api.js                # Backend API integration
│
├── assets/
│   └── couple.jpg            # Couple photo (round frame on home)
│
├── App.jsx                   # Root component with routing
├── main.jsx                  # Entry point
└── index.css                 # Tailwind import + global utilities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ashunikky/Wedding-Assistant-2.0.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in root:

```env
VITE_API_URL=https://wedding-ai-rag-assistant-backend.onrender.com
```

### Build for Production

```bash
npm run build
```

---

## 🔗 API Integration

The frontend communicates with the backend via `src/services/api.js`. Each message is sent with the user's **role** and **session ID** stored in `localStorage`, allowing the backend to maintain context and provide role-aware responses.

```
POST /chat
{
  "message": "What time does the ceremony start?",
  "role": "ladkewale",
  "session_id": "uuid"
}
```

Response:
```json
{
  "answer": "The ceremony starts at 4:30 PM at...",
  "image": "https://..." // optional
}
```

---

## 📱 Pages & Components

### `Home.jsx`
Landing page with the couple's photo in a round gold frame, wedding date, and two role selector cards — one for each family side.

### `Chat.jsx`
Full-screen chat interface with:
- Premium gold-accented header showing couple name and active side
- Suggestion chips for common queries
- Auto-scrolling message list
- Animated typing indicator
- Role switch with confirmation modal

### `MessageBubble.jsx`
Renders chat messages with smart URL parsing:
- 📍 **Google Maps place** → "View Location" card (gold border)
- 🗺️ **Google Maps route** → "Get Directions" card (rose border)
- 💼 **LinkedIn** → Profile card with `@handle` extracted (blue border)
- 🔗 **Generic URL** → Truncated link card

### `Suggestions.jsx`
Four quick-tap buttons that fire preset queries instantly:
| Button | Query sent |
|---|---|
| Groom 🤵 | Tell me about Suraj Kumar Gupta |
| Bride 👰 | Tell me about Rani Kumari |
| Developer 💻 | Who developed this wedding assistant? |
| Next Event 📅 | What is the upcoming event? |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `neutral-950` (charcoal black) |
| Surface | `neutral-900` |
| Primary accent | `amber-500` (champagne gold) |
| Secondary accent | `rose-400` (coral) |
| Text primary | `amber-100` |
| Text muted | `neutral-500` |
| Border default | `neutral-700` |
| Border hover | `amber-500` / `rose-400` |

---

## 👨‍💻 Developer

Built with love for the wedding of Suraj & Rani.

If you have questions about the project, ask the assistant itself — *"Who developed this wedding assistant?"* 💍

---

## 📄 License

This project is private and built for personal use for the Suraj & Rani wedding celebration.
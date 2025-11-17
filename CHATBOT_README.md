# RLJIT Campus Mate - Production Chat UI

A modern, production-ready chatbot interface with TypeScript, Tailwind CSS, and advanced features.

## 🎨 Design Features

- **Modern Typography**: Inter (body) + Sora (headings) with variable fonts
- **Dark/Light Mode**: Automatic theme persistence in localStorage
- **Responsive Design**: Mobile-first with collapsible sidebar
- **Smooth Animations**: Subtle micro-interactions using CSS transitions
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## 🚀 Features

### Core Functionality
- ✅ Real-time chat interface with message history
- ✅ Typing indicators and loading states
- ✅ Message grouping by date
- ✅ File upload with drag & drop support
- ✅ Message actions (copy, like, share)
- ✅ Chat history persistence (localStorage)
- ✅ Export/Import chat history as JSON

### UI Components
- **ChatSidebar**: Quick access to departments and FAQ
- **MessageBubble**: Beautiful message display with avatars
- **Composer**: Advanced input with file attachments
- **ThemeToggle**: Light/dark mode switcher
- **DateSeparator**: Smart date grouping
- **FileUploader**: Drag & drop file attachments

### Developer Features
- **Dev Panel**: Press `Ctrl+K` (or `Cmd+K` on Mac) to access:
  - Clear chat history
  - Toggle theme
  - Simulate long responses

## 📁 Project Structure

```
src/
├── components/
│   ├── chat/
│   │   ├── ThemeToggle.tsx      # Light/dark mode toggle
│   │   ├── ChatSidebar.tsx      # Collapsible sidebar with FAQ
│   │   ├── MessageBubble.tsx    # Individual message display
│   │   ├── Composer.tsx         # Message input & file upload
│   │   ├── FileUploader.tsx     # File attachment handler
│   │   └── DateSeparator.tsx    # Date group headers
│   ├── WelcomeScreen.tsx        # Empty state screen
│   └── TypingIndicator.tsx      # Loading animation
├── pages/
│   └── Index.tsx                # Main chat page
└── lib/
    └── api.ts                   # API integration (TODO)
```

## 🔧 Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

### Environment Variables
Create a `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

## 🤖 API Integration

### Current Status
The app currently uses a **mock response** for demonstration. To integrate with Botpress or another AI service:

### Option 1: Botpress Integration
Replace the mock API call in `src/pages/Index.tsx` (line 85-105):

```typescript
// Replace the mock implementation with:
const response = await fetch('https://api.botpress.cloud/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-bot-id': 'YOUR_BOT_ID',
    'x-user-id': localStorage.getItem('user-id') || crypto.randomUUID(),
  },
  body: JSON.stringify({
    message: message,
    conversationId: localStorage.getItem('bp-conversation-id'),
  }),
});

const data = await response.json();
if (data.conversationId) {
  localStorage.setItem('bp-conversation-id', data.conversationId);
}

const assistantMessage: Message = {
  role: 'assistant',
  content: data.messages[0].text,
  timestamp: new Date(),
};
```

### Option 2: Gemini AI Integration
Using Google Gemini API (requires API key):

1. **Add Secret** (if using Supabase Edge Functions):
```bash
# Store API key securely
supabase secrets set GEMINI_API_KEY=your_api_key_here
```

2. **Create Edge Function** (`supabase/functions/chat/index.ts`):
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: messages.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
          })),
        }),
      }
    );

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;

    return new Response(
      JSON.stringify({ response: generatedText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

3. **Update Frontend** (`src/pages/Index.tsx`):
```typescript
const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
  },
  body: JSON.stringify({ messages: [...messages, userMessage] }),
});

const data = await response.json();
const assistantMessage: Message = {
  role: 'assistant',
  content: data.response,
  timestamp: new Date(),
};
```

### Option 3: Streaming Responses
For real-time streaming (like ChatGPT):

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages }),
});

const reader = response.body?.getReader();
const decoder = new TextDecoder();
let assistantContent = '';

const assistantMessage: Message = {
  role: 'assistant',
  content: '',
  timestamp: new Date(),
};
setMessages(prev => [...prev, assistantMessage]);

while (true) {
  const { done, value } = await reader!.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  assistantContent += chunk;
  
  // Update the last message
  setMessages(prev => {
    const updated = [...prev];
    updated[updated.length - 1].content = assistantContent;
    return updated;
  });
}
```

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary: 0 84% 55%;        /* Red accent */
  --primary-glow: 0 90% 70%;   /* Lighter red */
  --accent: 340 75% 55%;       /* Pink accent */
}
```

### Fonts
Update `tailwind.config.ts` to change typography:
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui'],
  display: ['Sora', 'Inter'],
}
```

### Layout
Adjust sidebar width in `ChatSidebar.tsx`:
```typescript
className="w-80"  // Change width here
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Other Platforms
- **Netlify**: Connect repository and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` package
- **Docker**: Build with `vite build` and serve with nginx

## 🧪 Testing
```bash
# Run tests (if configured)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 Migration Notes

### From Original Code
- `App.js` → `src/pages/Index.tsx` (TypeScript conversion)
- `App.css` → `src/index.css` + Tailwind utilities
- Simple input form → `Composer` component with file upload
- Basic message list → Advanced `MessageBubble` with actions
- No sidebar → `ChatSidebar` with departments/FAQ
- No theme toggle → `ThemeToggle` with persistence
- No file support → Drag & drop file attachments
- No date grouping → Smart date separators
- No export/import → JSON export/import functionality

### Key Improvements
1. **TypeScript**: Full type safety throughout
2. **Modular Components**: Easy to maintain and test
3. **Design System**: Consistent colors and spacing
4. **Accessibility**: ARIA labels, keyboard navigation
5. **Performance**: Optimized re-renders with proper React patterns
6. **UX Enhancements**: Loading states, error handling, animations
7. **Developer Experience**: Dev panel, export/import, localStorage

## 🐛 Troubleshooting

### Chat history not saving
- Check localStorage is enabled in browser
- Clear cache and reload

### API errors
- Verify environment variables are set
- Check network tab for error details
- Ensure CORS is configured on API endpoint

### Theme not persisting
- Check localStorage permissions
- Verify `dark` class is being toggled on `<html>` element

## 📚 Resources

- [Botpress Documentation](https://botpress.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

This is a production-ready template. Feel free to:
- Add more features
- Improve accessibility
- Optimize performance
- Add tests
- Enhance documentation

## 📄 License

MIT License - feel free to use in your projects!

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and modern web technologies**

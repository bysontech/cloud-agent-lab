# Lottery App Frontend (HonoX)

A simple lottery application built with HonoX (Hono + Vite) featuring participant and host interfaces.

## Features

- **Participant Flow**: Join a lottery room by entering a nickname
- **Host Flow**: Manage lottery rooms, view participants, and start the lottery
- **Real-time Updates**: Status polling to synchronize lottery state across all clients
- **Duplicate Check**: Prevents duplicate nicknames within the same room
- **Island Architecture**: Interactive components using HonoX Islands

## Tech Stack

- **HonoX**: File-based routing and Island architecture
- **Hono**: Ultra-fast web framework
- **TypeScript**: Type-safe development
- **Vite**: Build tool and dev server
- **Vitest**: Unit testing framework

## Project Structure

```
lottery/
├── app/
│   ├── routes/
│   │   ├── join/[roomId].tsx      # Participant page route
│   │   ├── host/[roomId].tsx      # Host page route
│   │   └── _renderer.tsx          # Global layout
│   ├── islands/
│   │   ├── JoinForm.tsx           # Participant registration form
│   │   ├── HostDashboard.tsx      # Host dashboard with controls
│   │   └── LotteryStatusDisplay.tsx # Status display component
│   ├── lib/
│   │   ├── api.ts                 # API client layer
│   │   └── types.ts               # TypeScript type definitions
│   ├── client.ts                  # Client entry point
│   ├── server.ts                  # Server entry point
│   └── global.d.ts                # Global type declarations
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Routes

- `/join/:roomId` - Participant registration and lottery view
- `/host/:roomId` - Host dashboard to manage lottery

## API Integration

The app expects the following API endpoints:

### GET `/api/lottery/rooms/:roomId/entries`
Returns the list of participants.

**Response:**
```json
[
  { "id": "1", "nickname": "Alice" },
  { "id": "2", "nickname": "Bob" }
]
```

### POST `/api/lottery/rooms/:roomId/entries`
Register a new participant.

**Request:**
```json
{ "nickname": "Alice" }
```

**Response:**
```json
{ "id": "1", "nickname": "Alice" }
```

**Error:** Returns 409 if nickname already exists.

### POST `/api/lottery/rooms/:roomId/start`
Start the lottery.

### GET `/api/lottery/rooms/:roomId/status`
Get current lottery status.

**Response:**
```json
{
  "phase": "waiting|running|finished",
  "entries": [
    { "id": "1", "nickname": "Alice" }
  ],
  "result": {
    "winnerId": "1",
    "winnerNickname": "Alice"
  }
}
```

## Configuration

Set the API base URL via environment variable:

```bash
VITE_API_BASE_URL=https://your-api-server.com
```

Default: `/api`

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

## Development

### Install dependencies

```bash
cd lottery
npm install
```

### Run development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm test
```

## HonoX Features Used

### File-based Routing
Routes are automatically generated from the `app/routes/` directory structure.

### Island Architecture
Interactive components in `app/islands/` are hydrated on the client side while the rest of the page is server-rendered.

### SSR (Server-Side Rendering)
Pages are rendered on the server for fast initial load times.

## Implementation Notes

- **Polling Interval**: Status updates are fetched every 3 seconds
- **Error Handling**: User-friendly error messages for network failures and duplicate nicknames
- **TypeScript**: Fully typed API client and components
- **Island Components**: Only interactive parts are hydrated on the client

## Testing

Tests cover:
- API client methods and error handling
- DuplicateNicknameError behavior
- HTTP status code handling (409 for duplicates)

Run tests with:
```bash
npm test
```

## Deployment

This app can be deployed to:
- Cloudflare Pages (recommended for HonoX)
- Vercel
- Netlify
- Any Node.js hosting platform

For Cloudflare Pages:
```bash
npm run build
wrangler pages deploy ./dist
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ support required
- JavaScript must be enabled for Islands to work

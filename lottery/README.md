# Lottery App Frontend

A simple React-based lottery application with participant and host interfaces.

## Features

- **Participant Flow**: Join a lottery room by entering a nickname
- **Host Flow**: Manage lottery rooms, view participants, and start the lottery
- **Real-time Updates**: Status polling to synchronize lottery state across all clients
- **Duplicate Check**: Prevents duplicate nicknames within the same room

## Project Structure

```
lottery/
├── src/
│   ├── api/          # API client layer
│   ├── components/   # Reusable React components
│   ├── hooks/        # Custom React hooks (polling)
│   ├── pages/        # Page components (JoinPage, HostPage)
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Routes

- `/lottery/join/:roomId` - Participant registration and lottery view
- `/lottery/host/:roomId` - Host dashboard to manage lottery

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

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Implementation Notes

- **Polling Interval**: Status updates are fetched every 3 seconds
- **Error Handling**: User-friendly error messages for network failures and duplicate nicknames
- **TypeScript**: Fully typed API client and components
- **Minimal Dependencies**: Uses React, React Router, and Vite

## Testing

Tests cover:
- API client methods and error handling
- DuplicateNicknameError behavior
- HTTP status code handling (409 for duplicates)

Run tests with:
```bash
npm test
```

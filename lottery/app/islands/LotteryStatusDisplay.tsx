import { useState, useEffect } from 'hono/jsx';
import { lotteryApi } from '../lib/api';
import type { LotteryStatus } from '../lib/types';

export default function LotteryStatusDisplay({ roomId }: { roomId: string }) {
  const [status, setStatus] = useState<LotteryStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    try {
      const data = await lotteryApi.getStatus(roomId);
      setStatus(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch status');
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [roomId]);

  if (error) {
    return <div class="error-message">{error}</div>;
  }

  if (!status) {
    return <div>Loading...</div>;
  }

  return (
    <div class="lottery-status">
      <h2>Status: {status.phase}</h2>

      {status.phase === 'waiting' && (
        <p>Waiting for the host to start the lottery...</p>
      )}

      {status.phase === 'running' && (
        <div class="running-animation">
          <p>Drawing...</p>
        </div>
      )}

      {status.phase === 'finished' && status.result && (
        <div class="result-section">
          <h2>🎉 Winner!</h2>
          <p class="winner-name">{status.result.winnerNickname}</p>
        </div>
      )}

      {status.entries.length > 0 && (
        <div class="entries-section">
          <h3>Participants ({status.entries.length})</h3>
          <ul class="entries-list">
            {status.entries.map((entry) => (
              <li key={entry.id}>{entry.nickname}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'hono/jsx';
import { lotteryApi } from '../lib/api';
import type { LotteryStatus } from '../lib/types';

export default function HostDashboard({ roomId }: { roomId: string }) {
  const [status, setStatus] = useState<LotteryStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

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

  const handleStart = async () => {
    setIsStarting(true);
    setError(null);

    try {
      await lotteryApi.startLottery(roomId);
      await fetchStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start lottery');
    } finally {
      setIsStarting(false);
    }
  };

  const canStart = status?.phase === 'waiting' && (status?.entries.length ?? 0) > 0;

  return (
    <div class="host-dashboard">
      <h1>Host Dashboard</h1>
      <p>Room: {roomId}</p>

      {status?.phase === 'waiting' && (
        <div class="host-controls">
          <button
            onClick={handleStart}
            disabled={!canStart || isStarting}
            class="start-button"
          >
            {isStarting ? 'Starting...' : 'Start Lottery'}
          </button>
          {!canStart && status.entries.length === 0 && (
            <p class="info-message">Waiting for participants to join...</p>
          )}
        </div>
      )}

      {error && <div class="error-message">{error}</div>}

      <div class="status-display">
        <h2>Status: {status?.phase || 'Loading...'}</h2>

        {status && status.entries.length > 0 && (
          <div class="entries-section">
            <h3>Participants ({status.entries.length})</h3>
            <ul class="entries-list">
              {status.entries.map((entry) => (
                <li key={entry.id}>{entry.nickname}</li>
              ))}
            </ul>
          </div>
        )}

        {status?.result && (
          <div class="result-section">
            <h2>🎉 Winner!</h2>
            <p class="winner-name">{status.result.winnerNickname}</p>
          </div>
        )}
      </div>
    </div>
  );
}

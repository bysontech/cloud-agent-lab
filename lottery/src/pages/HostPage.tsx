import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { lotteryApi } from '../api/lottery';
import type { LotteryStatus as LotteryStatusType } from '../types/api';
import { LotteryStatus } from '../components/LotteryStatus';
import { usePolling } from '../hooks/usePolling';

export function HostPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [status, setStatus] = useState<LotteryStatusType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarting, setIsStarting] = useState(false);

  const fetchStatus = async () => {
    if (!roomId) return;

    try {
      setIsLoading(true);
      const data = await lotteryApi.getStatus(roomId);
      setStatus(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch status');
    } finally {
      setIsLoading(false);
    }
  };

  usePolling(fetchStatus, 3000, true);

  const handleStart = async () => {
    if (!roomId) return;

    setIsStarting(true);
    setError(null);

    try {
      await lotteryApi.startLottery(roomId);
      // Fetch updated status immediately
      await fetchStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start lottery');
    } finally {
      setIsStarting(false);
    }
  };

  if (!roomId) {
    return <div className="error">Invalid room ID</div>;
  }

  const canStart = status?.phase === 'waiting' && (status?.entries.length ?? 0) > 0;

  return (
    <div className="host-page">
      <h1>Host Dashboard</h1>
      <p>Room: {roomId}</p>

      {status?.phase === 'waiting' && (
        <div className="host-controls">
          <button
            onClick={handleStart}
            disabled={!canStart || isStarting}
            className="start-button"
          >
            {isStarting ? 'Starting...' : 'Start Lottery'}
          </button>
          {!canStart && status.entries.length === 0 && (
            <p className="info-message">Waiting for participants to join...</p>
          )}
        </div>
      )}

      <LotteryStatus status={status} isLoading={isLoading} error={error} />
    </div>
  );
}

import type { LotteryStatus as LotteryStatusType } from '../types/api';

interface LotteryStatusProps {
  status: LotteryStatusType | null;
  isLoading: boolean;
  error: string | null;
}

export function LotteryStatus({ status, isLoading, error }: LotteryStatusProps) {
  if (isLoading && !status) {
    return <div className="status-loading">Loading...</div>;
  }

  if (error) {
    return <div className="status-error">Error: {error}</div>;
  }

  if (!status) {
    return null;
  }

  return (
    <div className="lottery-status">
      <h2>Status: {status.phase}</h2>

      {status.phase === 'waiting' && (
        <p>Waiting for lottery to start...</p>
      )}

      {status.phase === 'running' && (
        <p>Lottery is in progress...</p>
      )}

      {status.phase === 'finished' && status.result && (
        <div className="result">
          <h3>Winner!</h3>
          <p className="winner-name">{status.result.winnerNickname}</p>
        </div>
      )}

      <div className="entries-list">
        <h3>Participants ({status.entries.length})</h3>
        <ul>
          {status.entries.map((entry) => (
            <li key={entry.id}>
              {entry.nickname}
              {status.result?.winnerId === entry.id && ' 🎉'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

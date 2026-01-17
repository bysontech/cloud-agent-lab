import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { lotteryApi } from '../api/lottery';
import { DuplicateNicknameError } from '../types/api';
import type { LotteryStatus as LotteryStatusType } from '../types/api';
import { LotteryStatus } from '../components/LotteryStatus';
import { usePolling } from '../hooks/usePolling';

export function JoinPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [nickname, setNickname] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<LotteryStatusType | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  const fetchStatus = async () => {
    if (!roomId || !isRegistered) return;

    try {
      setIsLoadingStatus(true);
      const data = await lotteryApi.getStatus(roomId);
      setStatus(data);
      setStatusError(null);
    } catch (err) {
      setStatusError(err instanceof Error ? err.message : 'Failed to fetch status');
    } finally {
      setIsLoadingStatus(false);
    }
  };

  usePolling(fetchStatus, 3000, isRegistered);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nickname.trim() || !roomId) {
      setError('Nickname is required');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await lotteryApi.registerEntry(roomId, { nickname: nickname.trim() });
      setIsRegistered(true);
    } catch (err) {
      if (err instanceof DuplicateNicknameError) {
        setError('This nickname is already taken. Please choose another one.');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to register');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!roomId) {
    return <div className="error">Invalid room ID</div>;
  }

  if (isRegistered) {
    return (
      <div className="join-page">
        <h1>Lottery Room: {roomId}</h1>
        <p>Registered as: <strong>{nickname}</strong></p>
        <LotteryStatus
          status={status}
          isLoading={isLoadingStatus}
          error={statusError}
        />
      </div>
    );
  }

  return (
    <div className="join-page">
      <h1>Join Lottery</h1>
      <p>Room: {roomId}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            disabled={isSubmitting}
            autoFocus
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

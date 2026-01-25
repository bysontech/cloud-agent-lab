import { useState } from 'hono/jsx';
import { lotteryApi } from '../lib/api';
import { DuplicateNicknameError } from '../lib/types';

export default function JoinForm({ roomId }: { roomId: string }) {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!nickname.trim()) {
      setError('Please enter a nickname');
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

  if (isRegistered) {
    return (
      <div class="success-message">
        <h2>✓ Registration Complete</h2>
        <p>Welcome, {nickname}!</p>
        <p>Waiting for the lottery to start...</p>
      </div>
    );
  }

  return (
    <div class="join-form">
      <h1>Join Lottery</h1>
      <p>Room: {roomId}</p>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onInput={(e) => setNickname((e.target as HTMLInputElement).value)}
            disabled={isSubmitting}
            placeholder="Enter your nickname"
            required
          />
        </div>

        {error && <div class="error-message">{error}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

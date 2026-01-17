import type {
  Entry,
  LotteryStatus,
  RegisterRequest,
  RegisterResponse,
} from '../types/api';
import { DuplicateNicknameError } from '../types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    if (response.status === 409) {
      throw new DuplicateNicknameError();
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const lotteryApi = {
  async getEntries(roomId: string): Promise<Entry[]> {
    return fetchJSON<Entry[]>(`${API_BASE_URL}/lottery/rooms/${roomId}/entries`);
  },

  async registerEntry(
    roomId: string,
    data: RegisterRequest
  ): Promise<RegisterResponse> {
    return fetchJSON<RegisterResponse>(
      `${API_BASE_URL}/lottery/rooms/${roomId}/entries`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  },

  async startLottery(roomId: string): Promise<void> {
    await fetchJSON(`${API_BASE_URL}/lottery/rooms/${roomId}/start`, {
      method: 'POST',
    });
  },

  async getStatus(roomId: string): Promise<LotteryStatus> {
    return fetchJSON<LotteryStatus>(
      `${API_BASE_URL}/lottery/rooms/${roomId}/status`
    );
  },
};

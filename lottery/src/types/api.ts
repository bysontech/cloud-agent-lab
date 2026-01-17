export type Phase = 'waiting' | 'running' | 'finished';

export interface Entry {
  id: string;
  nickname: string;
}

export interface LotteryStatus {
  phase: Phase;
  entries: Entry[];
  result?: {
    winnerId: string;
    winnerNickname: string;
  };
}

export interface RegisterRequest {
  nickname: string;
}

export interface RegisterResponse {
  id: string;
  nickname: string;
}

export class DuplicateNicknameError extends Error {
  constructor(message: string = 'Nickname already exists') {
    super(message);
    this.name = 'DuplicateNicknameError';
  }
}

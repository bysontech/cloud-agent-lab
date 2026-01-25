export type LotteryPhase = 'waiting' | 'running' | 'finished';

export interface Entry {
  id: string;
  nickname: string;
}

export interface LotteryResult {
  winnerId: string;
  winnerNickname: string;
}

export interface LotteryStatus {
  phase: LotteryPhase;
  entries: Entry[];
  result?: LotteryResult;
}

export interface RegisterRequest {
  nickname: string;
}

export interface RegisterResponse {
  id: string;
  nickname: string;
}

export class DuplicateNicknameError extends Error {
  constructor(message = 'Nickname already exists') {
    super(message);
    this.name = 'DuplicateNicknameError';
  }
}

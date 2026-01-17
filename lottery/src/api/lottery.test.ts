import { describe, it, expect, vi, beforeEach } from 'vitest';
import { lotteryApi } from './lottery';
import { DuplicateNicknameError } from '../types/api';

global.fetch = vi.fn();

describe('lotteryApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getEntries', () => {
    it('should fetch entries for a room', async () => {
      const mockEntries = [
        { id: '1', nickname: 'Alice' },
        { id: '2', nickname: 'Bob' },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockEntries,
      });

      const result = await lotteryApi.getEntries('room123');

      expect(result).toEqual(mockEntries);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room123/entries',
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
    });
  });

  describe('registerEntry', () => {
    it('should register a new entry', async () => {
      const mockResponse = { id: '1', nickname: 'Alice' };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await lotteryApi.registerEntry('room123', { nickname: 'Alice' });

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room123/entries',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ nickname: 'Alice' }),
        })
      );
    });

    it('should throw DuplicateNicknameError on 409 status', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 409,
      });

      await expect(
        lotteryApi.registerEntry('room123', { nickname: 'Alice' })
      ).rejects.toThrow(DuplicateNicknameError);
    });
  });

  describe('startLottery', () => {
    it('should start the lottery', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      await lotteryApi.startLottery('room123');

      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room123/start',
        expect.objectContaining({
          method: 'POST',
        })
      );
    });
  });

  describe('getStatus', () => {
    it('should fetch lottery status', async () => {
      const mockStatus = {
        phase: 'waiting' as const,
        entries: [{ id: '1', nickname: 'Alice' }],
      };

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockStatus,
      });

      const result = await lotteryApi.getStatus('room123');

      expect(result).toEqual(mockStatus);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room123/status',
        expect.any(Object)
      );
    });
  });
});

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { lotteryApi } from './api';
import { DuplicateNicknameError } from './types';

global.fetch = vi.fn();

function createFetchResponse(data: any, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
  };
}

describe('lotteryApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getEntries', () => {
    it('should fetch entries successfully', async () => {
      const mockEntries = [
        { id: '1', nickname: 'Alice' },
        { id: '2', nickname: 'Bob' },
      ];

      (global.fetch as any).mockResolvedValueOnce(
        createFetchResponse(mockEntries)
      );

      const result = await lotteryApi.getEntries('room1');
      expect(result).toEqual(mockEntries);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room1/entries',
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
    });
  });

  describe('registerEntry', () => {
    it('should register entry successfully', async () => {
      const mockResponse = { id: '1', nickname: 'Alice' };

      (global.fetch as any).mockResolvedValueOnce(
        createFetchResponse(mockResponse)
      );

      const result = await lotteryApi.registerEntry('room1', {
        nickname: 'Alice',
      });
      expect(result).toEqual(mockResponse);
    });

    it('should throw DuplicateNicknameError on 409 status', async () => {
      (global.fetch as any).mockResolvedValueOnce(
        createFetchResponse({}, 409)
      );

      await expect(
        lotteryApi.registerEntry('room1', { nickname: 'Alice' })
      ).rejects.toThrow(DuplicateNicknameError);
    });
  });

  describe('startLottery', () => {
    it('should start lottery successfully', async () => {
      (global.fetch as any).mockResolvedValueOnce(
        createFetchResponse({})
      );

      await lotteryApi.startLottery('room1');
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/lottery/rooms/room1/start',
        expect.objectContaining({
          method: 'POST',
        })
      );
    });
  });

  describe('getStatus', () => {
    it('should fetch status successfully', async () => {
      const mockStatus = {
        phase: 'waiting' as const,
        entries: [{ id: '1', nickname: 'Alice' }],
      };

      (global.fetch as any).mockResolvedValueOnce(
        createFetchResponse(mockStatus)
      );

      const result = await lotteryApi.getStatus('room1');
      expect(result).toEqual(mockStatus);
    });
  });
});

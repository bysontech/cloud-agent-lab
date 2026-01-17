import { describe, it, expect } from 'vitest';
import { DuplicateNicknameError } from './api';

describe('DuplicateNicknameError', () => {
  it('should create error with default message', () => {
    const error = new DuplicateNicknameError();
    expect(error.message).toBe('Nickname already exists');
    expect(error.name).toBe('DuplicateNicknameError');
  });

  it('should create error with custom message', () => {
    const error = new DuplicateNicknameError('Custom message');
    expect(error.message).toBe('Custom message');
    expect(error.name).toBe('DuplicateNicknameError');
  });
});

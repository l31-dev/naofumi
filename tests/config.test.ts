import { describe, expect, it } from 'bun:test';
import { getenv } from '@utils/environment';

describe('getenv', () => {
        it('should return the value of an existing environment variable', () => {
                process.env.MY_VARIABLE = 'my value';
                expect(getenv('MY_VARIABLE')).toBe('my value');
        });

        it('should throw an error for a missing environment variable', () => {
                expect(() => getenv('MISSING_VARIABLE')).toThrow(
                        'Missing environment variable MISSING_VARIABLE',
                );
        });

        it('should throw an error for an empty environment variable', () => {
                process.env.EMPTY_VARIABLE = '';
                expect(() => getenv('EMPTY_VARIABLE')).toThrow(
                        'Missing environment variable EMPTY_VARIABLE',
                );
        });
});

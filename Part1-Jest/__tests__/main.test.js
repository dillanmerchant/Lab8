const  formatVolumeIconPath = require('../assets/scripts/main');

describe('Correct volume icon given', () => {
    test('67% volume (3 levels)', () => {
      expect(formatVolumeIconPath(67)).toMatch(/volume-level-3.svg$/);
    });
    test('34% volume (2 levels)', () => {
      expect(formatVolumeIconPath(34)).toMatch(/volume-level-2.svg$/);
    });
    test('1% volume (1 level)', () => {
      expect(formatVolumeIconPath(1)).toMatch(/volume-level-1.svg$/);
    });
    test('0% volume (no levels)', () => {
        expect(formatVolumeIconPath(0)).toMatch(/volume-level-0.svg$/);
      });
  });

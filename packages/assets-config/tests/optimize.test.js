import {optimize} from 'svgo';
import {svgoOptions} from '../optimize';
import {getFixture} from './helpers';

describe('optimize()', () => {
  describe('svg', () => {
    it('removes all useless attributes', () => {
      const {data} = optimize(getFixture('example'), svgoOptions());
      expect(data).not.toMatch(/title/);
    });
  });
});

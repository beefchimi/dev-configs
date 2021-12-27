import {optimize} from 'svgo';

import {svgoConfig} from '../optimize';
import {getFixture} from './helpers';

describe('optimize()', () => {
  describe('svg', () => {
    it('removes all useless attributes', () => {
      const {data} = optimize(getFixture('example'), svgoConfig());
      expect(data).not.toMatch(/title/);
    });
  });
});

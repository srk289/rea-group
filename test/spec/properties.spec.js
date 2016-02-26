define(['loadProperties'], function(lp) {
  'use strict';

  describe('lp', function() {
    it('should return promise', function() {
      expect.promise(lp.init()).be(object).notify(done);
    });
  });
});
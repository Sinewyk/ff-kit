var storyStore

describe('Story store', function(){
  it('should instantiate', function(){
    storyStore = require('../src/stores/story');
    storyStore.eventLabel.should.equal('change');
  });
});

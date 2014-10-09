'use strict';

app.factory('Story', 
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'stories');

    var stories = $firebase(ref).$asArray();

    var Story = {
      all: stories,
      create: function (story) {
        return stories.$add(story);
      },
      find: function (storyId) {
        return $firebase(ref.child(storyId)).$asObject();
      },
      delete: function (story) {
        return stories.$remove(story);
      }
    };

    return Story;
});
'use strict';

app.filter('priorityFromImpactAndEvidence', function () {
  return function (str) {
    
    var priority = (story.impact * story.evidence);

    return priority;
  }
})
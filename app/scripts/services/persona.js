'use strict';

app.factory('Persona', 
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'personas');

    var personas = $firebase(ref).$asArray();

    var Persona = {
      all: personas,
      create: function (persona) {
        return personas.$add(persona);
      },
      find: function (personaId) {
        return $firebase(ref.child(personaId)).$asObject();
      },
      delete: function (persona) {
        return personas.$remove(persona);
      }
    };

    return Persona;
});
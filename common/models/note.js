'use strict';

module.exports = function(Note) {
  const remoteMethodNames = ['exists',
    'deleteById', 'updateAll', 'findOne',
    'patchOrCreate', 'confirm',
    'createChangeStream', 'replaceById',
    'prototype.patchAttributes',
    'replaceOrCreate', 'upsertWithWhere'];

  remoteMethodNames.forEach(function(value) {
    Note.disableRemoteMethodByName(value);
  });
};

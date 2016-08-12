
(function() {
StorageManager._localFileDirectoryPath = process.cwd()+'/save/';
StorageManager.localFileDirectoryPath = function() {
  return this._localFileDirectoryPath;
};
})();
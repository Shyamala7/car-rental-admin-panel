(function (module) {
     
    var fileReader = function ($q, $log) {
 
        var onLoad = function(file, reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve({result: reader.result, file_name: file});
                });
            };
        };
 
        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };
 
        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
 
        var getReader = function(file, deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(file, reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };
 
        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();
            
            var reader = getReader(file, deferred, scope);         
            reader.readAsDataURL(file);
            //deferred.promise.file = file;  
            return deferred.promise;
        };
 
        return {
            readAsDataUrl: readAsDataURL  
        };
    };
 
    module.factory("fileReader",
                   ["$q", "$log", fileReader]);
 
}(angular.module("iResearchApp")));
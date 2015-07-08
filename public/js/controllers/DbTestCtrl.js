angular.module('DbTestCtrl', ['DbTestService']).controller('DbTestController', function($scope,DbTestHandlers) {

   DbTestHandlers.getAllDocs().then(function(docs){
    
        console.log(docs)
        $scope.docs = docs
        /*
        angular.forEach(docs, function(doc) {
          $scope.docs.push({"name":doc.name, "age" : doc.age})
        });
       */
   })
 
});
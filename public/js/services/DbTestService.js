angular.module('DbTestService', []).factory('DbTestHandlers', ['$http', function($http) {

    return {
        getAllDocs :  function(){
                        return $http.get("/api/dbtest").then(function(response){
                            return response.data
                        }) 
                    }   
    }
        
}]);
var app = angular.module('main', ['ngTable']).
controller('testcontrol',function($scope){


console.log('sss');
console.log($scope.page==$scope.params.page());
console.log($scope.params.page());





    }).controller('DemoCtrl', function($scope, $filter, $http,ngTableParams) {
var mydata = [];
var sortsetting={Corresp: 'asc'};
var thefiltersetting={Corresp: ' '};
 
   $scope.save = function(){


     console.log($scope.mytableParams.data);
 
     $http.post('savedata.php',mydata);
     

   }

   
    $http.get("current.json",{header : {'Content-Type' : 'application/json; Charset=UTF-8'}}).success(function(response){
            console.log(response);
             mydata = response;
             $scope.mytableParams.reload(); // ng-table function built in



});


    $scope.mytableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter:   thefiltersetting,       // initial filter
        sorting:  sortsetting     // initial sorting
        
    }, {
        total: 0, // length of data
        getData: function($defer, params) {
      
        console.log ("params.sorting",params.sorting());
         console.log ("sort setting",sortsetting);
         
         if (JSON.stringify(sortsetting) != JSON.stringify(params.sorting())){

         console.log ('changed!');
         sortsetting=params.sorting();
         params.page(1);
         
         
         }


         console.log ("params.filter",params.filter());
         console.log ("filtersetting",thefiltersetting);
         //check if filter changed.....
         if (JSON.stringify(thefiltersetting) != JSON.stringify(params.filter())){

         console.log ('changed!');
         thefiltersetting=params.filter();
         params.page(1);
         
         
         }


         
        
          
       

            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')(mydata, params.filter()) :
                    mydata;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    mydata;

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
     





        


      }
    });





});
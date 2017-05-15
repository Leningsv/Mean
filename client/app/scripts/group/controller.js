'use strict';

angular.module('Group')
.controller('group', function ($scope) {
  $scope.listGroup=[];
  $scope.listPerson=[];
  $scope.res=[];
  $scope.controller_loaded = 'Group loaded!';
  //Definicion funcion multiplicacion
  $scope.Multiplication= function(listNum){
    var res=1;
    listNum.forEach(function(element) {
      res=res*element;
    }, this);
    return res;
  };
  $scope.ValidateGroup=function(listPerson){
    if(listPerson.length <2){
      return false;
    }
    var stateA= false;
    var stateB= false;
    if(listPerson.length>0){
       listPerson.forEach(function(element) {         
         if(element.id >= 1000 && element.id <=1999){
           stateA=true;
         }
         if(element.id >= 2000 && element.id <=2999){
           stateB=true;
         }
         //console.log(stateA+'-'+stateB);         
         if(stateA  && stateB){
           return true;
         }
       },this);       
       if(!stateA || !stateB){         
         return false;
       }
       $scope.listGroup.push(listPerson);
       $scope.personA={};
       $scope.personB={};
       return true;
    }
  };
  $scope.GetPersonTravel= function(listGroup){
    $scope.res= new Array();
    var resList=[];
    listGroup.forEach(function(element) {    
      var groupNumberA=0;  
      var groupNumberB=0;  
      listGroup.forEach(function(auxElement) {
        if(element[0].id=== auxElement[0].id || element[0].id=== auxElement[1].id){
          groupNumberA++;
        }
        if(element[1].id=== auxElement[0].id || element[1].id=== auxElement[1].id){
          groupNumberB++;
        }
      }, this);
      element[0].groupNumber=groupNumberA;
      element[1].groupNumber=groupNumberB;

    }, this);
    listGroup.forEach(function(element) {    
      if(element[0].groupNumber >= element[1].groupNumber){
        resList.push(element[0].id);
      }
      if(element[0].groupNumber < element[1].groupNumber){
        resList.push(element[1].id);
      }    
    }, this);
    $scope.res=eliminateDuplicates(resList);
    return $scope.res;
  };
  function eliminateDuplicates(arr) {
 var i,
     len=arr.length,
     out=[],
     obj={};

 for (i=0;i<len;i++) {
    obj[arr[i]]=0;
 }
 for (i in obj) {
    out.push(i);
 }
 return out;
}
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/group', {
    templateUrl: 'scripts/group/views/group.html',
    controller: 'group'
  });
});

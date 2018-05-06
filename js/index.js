var todoApp = angular.module("App",[]);   //Delcaring  App Moudule Name  []Dependency needed
    todoApp.controller("todoCtrl",function($rootScope,$scope){  //$scope object containt mehod or property
    	$scope.todo = {
    		user:'Jasper',
    		lists:[{action:'Suit1',state:true},
    				{action:'Suit2',state:true},
    				{action:'Suit3',state:false},
    				{action:'Suit4',state:false}]
    	};

    	//add
    	$scope.addItem = function(inputVal){
    		//alert(inputVal);
    		if(!inputVal) return;
    		$scope.todo.lists.push({action:inputVal,state:false});
    		$scope.inputVal = '';
    		$scope.notCount();
    	};
    	//checkbox
    	$scope.notCount = function(){
    		$scope.count = 0;
    		angular.forEach($scope.todo.lists,function(item){
    			if(!item.state){
    				$scope.count ++;
    			}
    		})
    	};
    	$scope.notCount();
    	//del
    	$scope.del = function(index) {
    		$scope.todo.lists.splice(index,1);
    		$scope.notCount();
    	}
    });
    //filter
    todoApp.filter("stateFilter",function(){
    	return function(text){
    		switch(text){
    			case true:
    				return "Purchased";
    			case false:
    				return "Not Purchased";
    			default:
    				return "Not Purchased";
    		}
    	}
    })
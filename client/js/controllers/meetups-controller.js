app.controller('meetupsController', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams){
	var Meetup = $resource('/api/meetups');
	
	Meetup.query(function	(results){
		$scope.meetups = results;
	});
	
	$scope.meetups = []

	$scope.createMeetup = function(){
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function	(result){
			$scope.meetups.push(result);
			$scope.meetupName = '';
		});

	}
	$scope.deleteMeetup = function($id, $index) {
		var meetup = $resource('/api/meetups/:_id/delete', {_id:$id});
		meetup.delete();
		$scope.meetups.splice($index,1);
	}

	$scope.editMeetup = function($id) {
		var Meetup = $resource('/api/meetups/:_id/edit', {_id:$id});
		var res = Meetup.get();
		console.log(res);
	}
}]);


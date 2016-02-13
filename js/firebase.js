var saveAnnotation = function(object) {
	console.log("object", object);
	console.log("firebaseRef", firebaseRef);
	firebaseRef.child('temp').set(object);
};

var getAnnotation = function() {
	var deferred = q.defer();

	$ajax('https://web-annotator.firebaseio.com/')
	.done(function(annotation) {
		deferred.resolve(annotation);
	}).fail(function(error) {
		deferred.reject();
		console.log("error", error);
	});
	return deferred.promise;
};
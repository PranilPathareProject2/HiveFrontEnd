app.controller('UploadController', ['$scope', 'Upload', function ($scope, Upload) {
	
    // upload on file select or drop
    this.upload = function (file, username) {
        Upload.upload({
            url: 'http://localhost:8081/HiveBackEnd/fileupload',
            data: {'file': file, 'username': username}
        }).then(function (resp) {
            console.log('Successfully uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
}]);
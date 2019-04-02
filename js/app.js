(function () {
    'use strict';

    angular.module('web-cielo', [])

        .controller('ExtratoController', function ($scope, $http) {
			
			$http.get('http://localhost:8080/api/extrato/getExtrato/').then(function(response) {
				$scope.extratos = response.data;
			});

        });

})();


'use strict';

angular.module('widget1', ['angularWidget'])
  .controller('Widget1Ctrl', function($scope, widgetConfig) {
    widgetConfig.exportProperties({ title: 'SNOTEL' });
    $scope.widgetOptions = widgetConfig.getOptions();
    $scope.awesomeThings = [
      'Dinky 11',
      'Item 12',
      'Item 13',
      'Item 14',
      'Item 15'
    ];
  });

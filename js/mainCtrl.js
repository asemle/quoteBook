angular.module('quoteBook')
.controller('mainCtrl', function($scope, dataService) {
  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = function(textToDelete) {
    dataService.removeQuote(textToDelete);
  }

  $scope.addQuote = function(text, author) {
    var newQuote = {
      text: text,
      author: author
    }
    dataService.addQuote(newQuote);

  }
});

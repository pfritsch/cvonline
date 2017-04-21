(function ($, window, document, undefined) {
  'use strict';

  $(function () {

    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-66873222-2', 'auto');
    ga('send', 'pageview');

  });
})(jQuery, window, document);


// Portfolio Behance
$(document).ready(function() {

  var apiKey  = 'vZKMHaSad38XOB26xsak6NARmB0YhHr2';
  var userID  = 'fritschpierre';

	(function() {
    Handlebars.registerPartial('portfolio-list', '{{portfolio-list}}');
		var perPage = 12;
		var behanceProjectAPI = 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey + '&per_page=' + perPage;


		function setPortfolioTemplate() {
			var projectData = JSON.parse(sessionStorage.getItem('behanceProject')),
				getTemplate = $('#portfolio-template').html(),
				template    = Handlebars.compile(getTemplate),
				result      = template(projectData);
			$('#portfolio').html(result);
		}

		if(sessionStorage.getItem('behanceProject')) {
			setPortfolioTemplate();
		} else {
			$.getJSON(behanceProjectAPI, function(project) {
				var data = JSON.stringify(project);
				sessionStorage.setItem('behanceProject', data);
				setPortfolioTemplate();
			});
		}
	})();

});

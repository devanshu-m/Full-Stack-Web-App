'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');
angular.module('myApp.services', [])
	.service('surveyHelper',function(){

		this.stat = function(surv){
			return surv.length;
			}
		this.stats = function(surv){
			var i;
			var h = [0,1,"name"];
			var max=0;
			for(i=0;i<surv.length;i++)
			{
			var js=surv[i];
			var j =js.questions;

				if(max<j.length)
				{
				max=j.length;
				h[0]=max;
				//h[1]=(i+1);
				h[2]=surv[i].name;
				}
			}
			return h;
		}

	})
.value('version', '0.1');
//stub for lab 1_2
var AWS = require('aws-sdk');
var ec2 = new AWS.EC2();
AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	
var params = {
  DryRun: false,
  Filters: [],
  InstanceIds: [],
  MaxResults: 20,
  NextToken: 'STRING_VALUE'
};
ec2.describeInstances(params, function(err, data) {
	if (err) callback(null, "Error"); // an error occurred
	else     callback(null, data);    // successful response
});
	
}

exports.lab = task
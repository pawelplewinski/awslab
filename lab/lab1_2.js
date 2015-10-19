//stub for lab 1_2
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();

//AWS.config.update({region: 'us-west-2'});
var task =  function(request, callback){
/*	
var params = {
  DryRun: false,
 // Filters: [],
 // InstanceIds: ['yyy'],
  MaxResults: 20,
  NextToken: 'STRING_VALUE'
};
ec2.describeInstances(null, function(err, data) {
	if (err) callback(null, "Error  " + err + err.stack); // an error occurred
	else     callback(null, data);    // successful response
});*/

var params = {
  ImageId: 'ami-fc2fa2cc', /* required */
  MaxCount: 1, /* required */
  MinCount: 1, /* required */
  AdditionalInfo: 'created automatically',
  ClientToken: 'yyy',
  InstanceInitiatedShutdownBehavior: 'terminate',
  InstanceType: 't1.micro',
  Monitoring: {
    Enabled: false /* required */
  },
};
ec2.runInstances(params, function(err, data) {
	if (err) callback(null, "Error  " + err + err.stack); // an error occurred
	else     callback(null,  data.Instances[0].NetworkInterfaces   + '\r\n ' + data);    // successful response
});

	
}

exports.lab = task
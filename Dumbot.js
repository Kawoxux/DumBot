var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
	token: 'MTkzODMwODI1ODc4NDg3MDUw.CkdGhg.M_dq1xPgH3Q3PdB-jA8QFQzH8xQ'
	});
		
client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log('Connected as: ' + client.User.username);
	});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if (e.message.content == 'PING') {
      //  Code Flops Here//
		e.mesage.channel.sendMessage('PONG');
		}
	});

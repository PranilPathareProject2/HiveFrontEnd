app.service("ChatForumService", function($q, $timeout) {
    console.log("ChatForumService started...")
    var service = {};
    var listener = $q.defer();
    var socket = {
      client: null,
      stomp: null
    }
    var messageIds = [];
    
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/HiveBackEnd/chatforum";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chatforum";
    
    service.receive = function() {
    	console.log("receive message");
    	return listener.promise;
    };
    
    service.send = function(message) {
    	console.log("send message")
    	var message_id = Math.floor(Math.random() * 1000000);
	      socket.stomp.send(service.CHAT_BROKER, {
	        priority: 9
	      }, JSON.stringify({
	        message: message,
	        message_id: message_id
	      }));
	      messageIds.push(message_id);
    };
    
    var reconnect = function() {
      $timeout(function() {
        initialize();
      }, this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) {
      var message = JSON.parse(data);
      var out = {};
      out.message = message.message;
      out.message_date = new Date(message.message_date);
      /*if (_.contains(messageIds, message.message_id)) {
        out.self = true;
        messageIds = _.remove(messageIds, message.message_id);
      }*/
      return out;
    };
    
    var startListener = function() {
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
      socket.client = new SockJS(service.SOCKET_URL);
      socket.stomp = Stomp.over(socket.client);
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
    
    var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		addForum: function(chatforum) {
			return $http.post(url+'/addforum',chatforum).then(
				function(response){
					response.data.created_date = new Date(response.data.created_date);
					return response.data;
				},
				null
			);
		}
	};
  });
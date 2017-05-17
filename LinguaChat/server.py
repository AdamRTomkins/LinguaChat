from autobahn.twisted.wamp import ApplicationSession
# or: from autobahn.asyncio.wamp import ApplicationSession
from autobahn.twisted.util import sleep
from twisted.internet.defer import inlineCallbacks


class AppSession(ApplicationSession):

    @inlineCallbacks
    def onJoin(self, details):

        # Load persistant database:

        # Load room
        # On joining a room, forward conversational history to the user
        # 3. register a procedure for remote calling
        def join_room(room_id):
            pass
            #return room_history

        self.register(join_room, u'chat.room.join');

        # subscribe to all edits

        # subscribe to all messages
        # 1. subscribe to a topic so we receive events
        def on_message(message):
            print("Got message: {}".format(message))

        yield self.subscribe(on_message, u'chat.on_message')
        """
        # 2. publish an event to a topic
        self.publish(u'com.myapp.hello', 'Hello, world!')

        # 3. register a procedure for remote calling
        def add2(x, y):
            return x + y

        self.register(add2, u'com.myapp.add2');

        # 4. call a remote procedure
        res = yield self.call(u'com.myapp.add2', 2, 3)
        print("Got result: {}".format(res))
        """

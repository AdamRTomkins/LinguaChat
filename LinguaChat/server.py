from autobahn.twisted.wamp import ApplicationSession
# or: from autobahn.asyncio.wamp import ApplicationSession
from autobahn.twisted.util import sleep
from twisted.internet.defer import inlineCallbacks


class AppSession(ApplicationSession):

    @inlineCallbacks
    def onJoin(self, details):

        # 1. subscribe to a topic so we receive events
        def onevent(msg):
            print("Got event: {}".format(msg))

        yield self.subscribe(onevent, u'com.myapp.hello')

        # 2. publish an event to a topic
        self.publish(u'com.myapp.hello', 'Hello, world!')

        # 3. register a procedure for remote calling
        def add2(x, y):
            return x + y

        self.register(add2, u'com.myapp.add2');

        # 4. call a remote procedure
        res = yield self.call(u'com.myapp.add2', 2, 3)
        print("Got result: {}".format(res))

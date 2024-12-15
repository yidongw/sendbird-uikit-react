// we use pubsub to sync events between multiple components(example - ChannelList, Channel)
// for example, if customer sends a message from their custom component
// without pubsub,we would not be able to listen to it
// in our ChannelList or Conversation
var pubSubFactory = function (opts) {
    var topics = {};
    return {
        __getTopics: function () { return topics; },
        subscribe: function (topic, listener) {
            var _a;
            (_a = topics[topic]) !== null && _a !== void 0 ? _a : (topics[topic] = new Set());
            topics[topic].add(listener);
            return {
                remove: function () {
                    topics[topic].delete(listener);
                },
            };
        },
        publish: function (topic, info) {
            if (topics[topic]) {
                topics[topic].forEach(function (fn) {
                    if (opts === null || opts === void 0 ? void 0 : opts.publishSynchronous) {
                        fn(info !== undefined ? info : {});
                    }
                    else {
                        setTimeout(function () { return fn(info !== undefined ? info : {}); }, 0);
                    }
                });
            }
        },
    };
};

export { pubSubFactory as p };
//# sourceMappingURL=bundle--SXvYGPR.js.map

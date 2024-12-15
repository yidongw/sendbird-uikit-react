'use strict';

/**
 * This function helps consider the every condition
 * related to enabling emoji reaction feature.
 */
function getIsReactionEnabled(_a) {
    var channel = _a.channel, config = _a.config, moduleLevel = _a.moduleLevel;
    if (!channel || channel.isBroadcast || channel.isEphemeral) {
        return false;
    }
    if (channel.isSuper)
        return moduleLevel !== null && moduleLevel !== void 0 ? moduleLevel : config.groupChannel.enableReactionsSupergroup;
    return moduleLevel !== null && moduleLevel !== void 0 ? moduleLevel : config.groupChannel.enableReactions;
}

exports.getIsReactionEnabled = getIsReactionEnabled;
//# sourceMappingURL=bundle-Dim56WjD.js.map

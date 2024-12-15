'use strict';

var index = require('./bundle-e2d_I3io.js');

function getModalDeleteMessageTitle(stringSet, message) {
    return index.K(message)
        .when(index.isMultipleFilesMessage, function () {
        var filesCount = message.fileInfoList.length;
        return "Do you want to delete all ".concat(filesCount, " photos?");
    })
        .otherwise(function () {
        return stringSet.MODAL__DELETE_MESSAGE__TITLE;
    });
}

exports.getModalDeleteMessageTitle = getModalDeleteMessageTitle;
//# sourceMappingURL=bundle-M6Urrta6.js.map

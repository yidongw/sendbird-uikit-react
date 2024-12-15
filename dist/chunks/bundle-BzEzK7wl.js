import { K, d as isMultipleFilesMessage } from './bundle-Bd-i99nk.js';

function getModalDeleteMessageTitle(stringSet, message) {
    return K(message)
        .when(isMultipleFilesMessage, function () {
        var filesCount = message.fileInfoList.length;
        return "Do you want to delete all ".concat(filesCount, " photos?");
    })
        .otherwise(function () {
        return stringSet.MODAL__DELETE_MESSAGE__TITLE;
    });
}

export { getModalDeleteMessageTitle as g };
//# sourceMappingURL=bundle-BzEzK7wl.js.map

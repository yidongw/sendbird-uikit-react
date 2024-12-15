import { d as __rest } from '../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';

var EditUserProfileProviderContext = React__default.createContext(null);
var EditUserProfileProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default.createElement(EditUserProfileProviderContext.Provider, { value: props }, children);
};
var useEditUserProfileContext = function () {
    var context = React__default.useContext(EditUserProfileProviderContext);
    if (!context)
        throw new Error('EditUserProfileContext not found. Use within the EditUserProfile module.');
    return context;
};

export { EditUserProfileProvider, useEditUserProfileContext };
//# sourceMappingURL=context.js.map

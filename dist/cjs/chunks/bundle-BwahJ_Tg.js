'use strict';

var React = require('react');

/* global MutationCallback */
/* global MutationObserverInit */
// To prevent Undefined lint errors: https://github.com/standard/standard/issues/1159#issuecomment-403003627
function useElementObserver(selector, targetElement) {
    var _a = React.useState(false), isElementMounted = _a[0], setIsElementMounted = _a[1];
    React.useEffect(function () {
        var targetElements = Array.isArray(targetElement) ? targetElement : [targetElement];
        var updateElementState = function () {
            var _a;
            var elements = targetElements === null || targetElements === void 0 ? void 0 : targetElements.map(function (target) { return target === null || target === void 0 ? void 0 : target.querySelector(selector); });
            setIsElementMounted((_a = elements === null || elements === void 0 ? void 0 : elements.some(function (element) { return !!element; })) !== null && _a !== void 0 ? _a : false);
        };
        updateElementState();
        var observerCallback = function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    Array.from(mutation.addedNodes).forEach(function (node) {
                        if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
                            setIsElementMounted(true);
                        }
                    });
                    Array.from(mutation.removedNodes).forEach(function (node) {
                        if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
                            setIsElementMounted(false);
                        }
                    });
                }
            });
        };
        var observer = new MutationObserver(observerCallback);
        var observerOptions = {
            childList: true, // Observe addition and removal of child nodes
            subtree: true, // Observe the entire subtree
        };
        targetElements === null || targetElements === void 0 ? void 0 : targetElements.forEach(function (target) {
            if (target)
                observer.observe(target, observerOptions);
        });
        return function () {
            observer.disconnect();
        };
    }, [selector, targetElement]);
    return isElementMounted;
}

exports.useElementObserver = useElementObserver;
//# sourceMappingURL=bundle-BwahJ_Tg.js.map

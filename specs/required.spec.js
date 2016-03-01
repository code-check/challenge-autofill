var assert = require("chai").assert;

describe("Required", function () {
    it("window must be in the global scope", function () {
        assert.isDefined(global.window);
        assert.isNotNull(global.window);
    });

    it("window must have jQuery defined", function () {
        assert.isDefined(global.window.$);
        assert.isNotNull(global.window.$);
        assert.isDefined(global.window.jQuery);
        assert.isNotNull(global.window.jQuery);
    });

    it("should not remove/rename existing elements", function () {
        var $ = global.window.$,
            $input = $("#autofill_input"),
            $result = $("#autofill_result");

        assert.equal($input.length, 1);
        assert.equal($result.length, 1);
    })
});
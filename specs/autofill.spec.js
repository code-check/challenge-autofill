var assert = require("chai").assert;

describe("Autofill", function () {
    var $, $input, $result;
    before(function () {
        $ = global.window.$;
        $input = $("#autofill_input");
        $result = $("#autofill_result");
    });

    it("must autofill 'R' to 'Raspberry'", function () {
        $input.val("R")
            .trigger("change")
            .trigger("keyup");
        assert.match($result.text(), /Raspberry/i);
    });

    it("must display multiple results", function () {
        $input.val("P")
            .trigger("change")
            .trigger("keyup");
        var result = $result.text();
        assert.match(result, /Pear/i);
        assert.match(result, /Peach/i);
        assert.match(result, /Pineapple/i);
    });

    it("must ignore casing", function () {
        $input.val("s")
            .trigger("change")
            .trigger("keyup");
        assert.match($result.text(), /Strawberry/i);
    });

    it("must only display words starting with 'a'", function () {
        $input.val("a")
            .trigger("change")
            .trigger("keyup");
        assert.match($result.text(), /Apple/i);
        assert.notMatch($result.text(), /Banana/i);
    });
});
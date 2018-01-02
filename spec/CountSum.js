"use strict";
let CountSum = require("../lib/CountSum");

describe("Sum should be", () => {

    it("student", () => {
        let result = CountSum({ "chinese": "90", "chinese": "90", "english": "90", "code": "90" });
        expect(result).toBe(360);
    })
});
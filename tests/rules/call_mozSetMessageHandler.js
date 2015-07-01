/**
 * @fileoverview Test for call_mozSetMessageHandler rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/call_mozSetMessageHandler", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "navigator.mozSetMessageHandler()",
            errors: [
                { message: "The function mozSetMessageHandler can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json
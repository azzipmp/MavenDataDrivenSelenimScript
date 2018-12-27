$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/MercuryRegisterTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Testing Mercury register functionality",
  "description": "",
  "id": "testing-mercury-register-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11324250964,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Testing the Register link",
  "description": "",
  "id": "testing-mercury-register-functionality;testing-the-register-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Navigate to the flight application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Register page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomeRegisterTeststep.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 1597022674,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.clickonregisterlink()"
});
formatter.result({
  "duration": 2776855803,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.verifyregisterpagedispay()"
});
formatter.result({
  "duration": 15901879,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.closethebrowser()"
});
formatter.result({
  "duration": 1387751140,
  "status": "passed"
});
formatter.after({
  "duration": 156522,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Testing the user Registration",
  "description": "",
  "id": "testing-mercury-register-functionality;testing-the-user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Navigate to the flight application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter \"\u003cusername\u003e\" ,\"\u003cpassword\u003e\" and \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the \"\u003cusername\u003e\" created sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "testing-mercury-register-functionality;testing-the-user-registration;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "confirmPassword"
      ],
      "line": 39,
      "id": "testing-mercury-register-functionality;testing-the-user-registration;;1"
    },
    {
      "cells": [
        "test123",
        "test",
        "test"
      ],
      "line": 40,
      "id": "testing-mercury-register-functionality;testing-the-user-registration;;2"
    },
    {
      "cells": [
        "test789",
        "cucumber",
        "cucumber"
      ],
      "line": 41,
      "id": "testing-mercury-register-functionality;testing-the-user-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6054108042,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Testing the user Registration",
  "description": "",
  "id": "testing-mercury-register-functionality;testing-the-user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Navigate to the flight application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter \"test123\" ,\"test\" and \"test\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the \"test123\" created sucessfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomeRegisterTeststep.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 1397330585,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.clickonregisterlink()"
});
formatter.result({
  "duration": 3481331629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 7
    },
    {
      "val": "test",
      "offset": 18
    },
    {
      "val": "test",
      "offset": 29
    }
  ],
  "location": "UserRegisterTeststep.entervalues(String,String,String)"
});
formatter.result({
  "duration": 985075310,
  "status": "passed"
});
formatter.match({
  "location": "UserRegisterTeststep.clickonsubmit()"
});
formatter.result({
  "duration": 3973934073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 14
    }
  ],
  "location": "UserRegisterTeststep.verifyusercreation(String)"
});
formatter.result({
  "duration": 248600717,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.closethebrowser()"
});
formatter.result({
  "duration": 1128190511,
  "status": "passed"
});
formatter.after({
  "duration": 29508,
  "status": "passed"
});
formatter.before({
  "duration": 4580352729,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Testing the user Registration",
  "description": "",
  "id": "testing-mercury-register-functionality;testing-the-user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Navigate to the flight application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter \"test789\" ,\"cucumber\" and \"cucumber\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the \"test789\" created sucessfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomeRegisterTeststep.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 1119672931,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.clickonregisterlink()"
});
formatter.result({
  "duration": 2820285330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test789",
      "offset": 7
    },
    {
      "val": "cucumber",
      "offset": 18
    },
    {
      "val": "cucumber",
      "offset": 33
    }
  ],
  "location": "UserRegisterTeststep.entervalues(String,String,String)"
});
formatter.result({
  "duration": 1254427928,
  "status": "passed"
});
formatter.match({
  "location": "UserRegisterTeststep.clickonsubmit()"
});
formatter.result({
  "duration": 3282228846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test789",
      "offset": 14
    }
  ],
  "location": "UserRegisterTeststep.verifyusercreation(String)"
});
formatter.result({
  "duration": 280200484,
  "status": "passed"
});
formatter.match({
  "location": "HomeRegisterTeststep.closethebrowser()"
});
formatter.result({
  "duration": 1157124712,
  "status": "passed"
});
formatter.after({
  "duration": 23949,
  "status": "passed"
});
});
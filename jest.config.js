export default {
    testMatch: ['**/specs/**/*.spec.js'],
    "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    reporters: [
        "default",
        [
            "jest-html-reporters", {
            "publicPath": "./report-api-tests",
            "filename": "report.html"
        }
        ]
    ],
    testTimeout: 6000,
    testRunner: "jest-circus/runner"
}
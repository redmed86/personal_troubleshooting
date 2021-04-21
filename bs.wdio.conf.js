exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    host: "hub.browserstack.com",
    
    specs: [
      "e2e-tests/specs/fileSamples.spec.js",
      "e2e-tests/specs/googleDisplays.spec.js"
    ],
    
    exclude: [
      // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [
      {
        browser: "Chrome",
        browserVersion: "latest",
        os: "OS X",
        os_version: "Mojave",
        "browserstack.networkLogs": true,
        "browserstack.console": "verbose",
        name: "Chrome Test",
        build: "Abbott: Opera Troubleshooting",
        project: "Opera Troubleshooting Abbott"
      },
      {
        browser: "Firefox",
        browserVersion: "latest",
        os: "OS X",
        os_version: "Mojave",
        "browserstack.networkLogs": true,
        "browserstack.console": "verbose",
        name: "Chrome Test",
        build: "Abbott: Opera Troubleshooting",
        project: "Opera Troubleshooting Abbott"
      },
      {
        browser: "Opera",
        browserVersion: "12.15",
        os: "OS X",
        os_version: "Mojave",
        "browserstack.networkLogs": true,
        "browserstack.console": "verbose",
        name: "Opera Test",
        build: "Abbott: Opera Troubleshooting",
        project: "Opera Troubleshooting Abbott"
      }
    ],
    logLevel: "trace",
    bail: 0,
    // baseUrl: "http://localhost",
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    services: [
      ['browserstack', {
          browserstackLocal: false
      }]
    ],
      
    framework: "mocha",
  
    reporters: ["spec"],
  
    mochaOpts: {
      ui: "bdd",
      timeout: 60000,
    },
 
    before: function (capabilities, specs) {
      console.log(exports.config)
    }
  };
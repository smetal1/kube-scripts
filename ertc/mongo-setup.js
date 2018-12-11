let res = [
    db.accounts.drop(),
    db.accounts.createIndex({ nameSpace: 1 }, { unique: true }),
    db.accounts.insert({        "_id" : "57964c1a2014c4544afb8efe",        "name" : "Sample Tenant",        "enabled" : true,        "apiKey" : "cpbSOZl806tBjKefBTAHmGO0JR7zRyXl",        "nameSpace" : "sample.ertc.com",        "config" : {            "loginType" : "email",            "maxUsers" : 50,            "bundleIds" : {                "android" : "com.android.sample",                "ios" : "com.ios.sample",                "web" : "com.web.sample"            },            "features" : {                "chat" : {                    "enabled" : true                },                "groupChat" : {                    "enabled" : false                }            },            "serverUrls" : {                "chatServer" : "chat.ertc.com",                "userServer" : "user.ertc.com"            },            "contractPeriod" : {                "start" : 1234567890,                "end" : 123456789            }        },        "__v" : 0    }),
]

printjson(res);


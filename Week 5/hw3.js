// ------------------------- Question 1 ----------------------

const websites = [
    {
        site: 'yahoo.com',
        responseTime: 50,
        unit: 'ms'
    },
    {
        site: 'google.com',
        responseTime: 10,
        unit: 'ms'
    },
    {
        site: 'reddit.com',
        responseTime: null,
        unit: 'ms'
    },
    {
        site: 'slack.com',
        responseTime: 80,
        unit: 'ms'
    },
    {
        site: 'github.com',
        responseTime: 30,
        unit: 'ms'
    }
];

let responses = [];
let noResponse = [];


function checkWebsiteResponseTime(website, callback) {
    setTimeout(() => {
        if (website.responseTime) {
            callback(true, website);
        } else {
            callback(false, website);
        }
    }, website.responseTime)
}

function websiteResponseTimes(websites) {
    let count = 0;

    websites.forEach(site => {
        checkWebsiteResponseTime(site, (hasResponse, resultSite) => {
            if (hasResponse) {
                responses.push({
                    site: resultSite.site,
                    responseTime: resultSite.responseTime
                })
            } else {
                noResponse.push({
                    site: resultSite.site,
                    responseTime: resultSite.responseTime
                })
            }

            count++;
            console.log("count ", count);

            if (count === websites.length) {
                console.log("No response: ", noResponse)
                console.log("Responses: ", responses);
            }
        })
    });
}

websiteResponseTimes(websites);


// https://stackoverflow.com/questions/22442321/callback-function-example#22442533

// ------------------------- Question 2 ----------------------

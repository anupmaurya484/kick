const cron = require('node-cron');
var CronJob = require('cron').CronJob;
const fs = require('fs');
const path = require('path');
var request = require('request');
const mongodb = require("../models/mongodb");
//Import Contorller
const crawl_kiplinger = require('./kiplinger/router');
const crawl_yahoo = require('./yahoo/router');
const crawl_stocknews = require('./stocknews/router');
const crawl_marketwatch = require('./marketwatch/router');
var nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");
const { resolve } = require('dns');



if (process.env.NODE_ENV == "Production") {
    //0 */3 * * * Every Three hours
    //* * * * * Every Minute
    var job1 = new CronJob('0 */1 * * *',
        async function () {
            try {
                console.log("Start sync completed.")
                await crawl_marketwatch.getMainArticle();
                await crawl_marketwatch.latestArticle();
                console.log("All sync completed.")
                console.log('You will see this message every second');
            } catch (err) {
                console.log("Error=> ", err.message)
            }
        },
        null,
        true,
        'America/Los_Angeles'
    );

    var job2 = new CronJob('0 */3 * * *',
        async function () {
            try {
                console.log("Start sync completed.")
                await crawl_kiplinger.getLatesArticleNews();
                await crawl_kiplinger.getNews();
                await crawl_yahoo.getYahooNews();
                // await crawl_kiplinger.getMainArticle();
                await crawl_stocknews.getMainArticle();
                console.log("All sync completed.")
                console.log('You will see this message every second');
            } catch (err) {
                console.log("Error=> ", err.message)
            }
        },
        null,
        true,
        'America/Los_Angeles'
    );

    job1.start();
    job2.start();
}

const main = (app) => {

    app.get("/api/get-dashboard-news", async (req, res) => {
        try {
            //const main_article = await mongodb.items.findOne({ groupType: 'main_article_news', type: 'kiplinger' });
            //  const latest_news = await mongodb.items.find({ groupType: 'latest_news', type: 'kiplinger' }).limit(10).sort({ _id: -1 });;
            const market_watch_main_article = await mongodb.items.findOne({ groupType: 'main_article_news', type: 'marketwatch' });
            const market_watch_latest_article = await mongodb.items.find({ groupType: 'latest_news', type: 'marketwatch' }).limit(10).sort({ _id: -1 });

            res.json({
                status: true,
                data: {
                    //main_article: main_article,
                    market_watch_main_article,
                    market_watch_latest_article,
                    latest_news: []
                }
            });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    })

    app.post("/api/get-finance-news-v3", async (req, res) => {
        try {
            const limit = req.body.limit || 10;
            const page = req.body.page || 1;
            const query = {
                groupType: 'top_news',
                type: 'yahoo'
            };
            const tempData = await mongodb.items.find(query).sort({ _id: -1 }).skip(((page * limit) - limit)).limit(limit);
            const count = await mongodb.items.count(query)
            res.json({ page_recodes: tempData.length, total_recodes: count, data: tempData });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.post("/api/get-search-record", async (req, res) => {
        try {
            const limit = req.body.limit || 10;
            const page = req.body.page || 1;
            let searchQuery = {};
            if (req.body.search && req.body.search) {
                searchQuery = { "title": { "$regex": req.body.search, "$options": "i" } }
            }
            const query = { $or: [{ ...searchQuery }] };
            const tempData = await mongodb.items.find(query).sort({ _id: -1 }).skip(((page * limit) - limit)).limit(limit);
            const count = await mongodb.items.count(query)
            res.json({ page_recodes: tempData.length, total_recodes: count, data: tempData });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.post("/api/delete-search-record", async (req, res) => {
        try {
            const tempData = await mongodb.items.distinct("link")
            tempData.forEach(async (num) => {
                var i = 0;
                const numdata = await mongodb.items.find({ link: num })
                numdata.forEach(async (doc) => {
                    if (i) await mongodb.items.remove({ link: num }, { justOne: true })
                    i++
                })
            });
            res.json({ page_recodes: tempData });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.post("/api/get-investing", async (req, res) => {
        try {
            const limit = req.body.limit || 10;
            const page = req.body.page || 1;
            let searchQuery = {};
            const query = {
                groupType: 'investing_news',
                type: 'kiplinger'
            };
            const tempData = await mongodb.items.find(query).sort({ updatedAt: -1 }).skip(((page * limit) - limit)).limit(limit);
            const count = await mongodb.items.count(query)
            res.json({ page_recodes: tempData.length, total_recodes: count, data: tempData });

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.post("/api/get-stock-news", async (req, res) => {
        try {
            const limit = req.body.limit || 10;
            const page = req.body.page || 1;
            const query = {
                groupType: 'stock_news',
                type: 'stocknews'
            };
            const tempData = await mongodb.items.find(query).sort({ updatedAt: -1 }).skip(((page * limit) - limit)).limit(limit);
            const count = await mongodb.items.count(query)
            res.json({ page_recodes: tempData.length, total_recodes: count, data: tempData });

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.get("/api/sync-all-news", async (req, res) => {
        try {
            res.json({ status: true, message: "sysnc start....." })
            await crawl_marketwatch.getMainArticle();
            await crawl_marketwatch.latestArticle();
            await crawl_kiplinger.getLatesArticleNews();
            await crawl_kiplinger.getNews();
            await crawl_yahoo.getYahooNews();
            // await crawl_kiplinger.getMainArticle();
            // await crawl_stocknews.getMainArticle();

        } catch (err) {
            console.log(err)
            res.json({ status: false, message: err.message });
        }
    });

    app.get("/api/restore-story", async (req, res) => {
        try {
            res.json({ status: true, message: "sysnc start....." })
            const query = {
                groupType: 'stock_news',
                type: 'stocknews'
            };
            const tempData = await mongodb.items.remove(query)
            await crawl_stocknews.getMainArticle();
        } catch (err) {
            console.log(err)
            res.json({ status: false, message: err.message });
        }
    });

    app.post("/api/send-contactus", async (req, res) => {
        try {
            const output = `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>  
              <li>Requester Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
              <li>Message: ${req.body.message}</li>
            </ul>
            <h3>Content Message</h3>
            <p>${req.body.message}</p>
          `;

            var mailOptions = {
                from: `${process.env.SMTP_FROM}`,
                to: "contact@marketwealthadvisor.com",
                subject: "Contact US Market Wealth Advisor ",
                html: output,
            };

            const payload_config = {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT || 587,
                secure: process.env.SMTP_SECURE ? (process.env.SMTP_SECURE == "false" ? false : true) : false,
                auth: {
                    user: process.env.SMTP_USER_Name,
                    pass: process.env.SMTP_PASSWORD,
                }
            }

            console.log(mailOptions)
            console.log(payload_config);
            const Transport = nodemailer.createTransport(payload_config)

            Transport.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.send("Email Failed");
                } else {
                    console.log('Email sent: ' + info.response);
                    res.send("Email Sent");
                }
            });

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.get("/api/get-news-details/:news_id", async (req, res) => {
        try {
            const query = { _id: req.params.news_id };
            const tempData = await mongodb.items.findOne(query)
            res.json({ status: true, data: tempData });

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.get("/api/update-uuid/", async (req, res) => {
        try {
            let itemData = await mongodb.items.count();
            let count = 0;
            while (itemData < count) {
                const list = await mongodb.items.findOne({ uuid: null }).select('title');
                if (list) {
                    const title = list.title.toLocaleLowerCase().replace(/ /g, '-').replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                    let itemDatanew = await mongodb.items.count({ uuid: null });
                    await mongodb.items.updateOne({ _id: list._id }, { uuid: title });
                }
                count++
            }
            res.json({ status: true });
        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    app.get("/api/get-stort/:uuid", async (req, res) => {
        try {
            const data = await mongodb.items.findOne({ uuid: req.params.uuid })
            if (data) {
                res.json({ status: true, data: data });
            } else {
                res.json({ status: true });
            }

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });

    const GetEmailTemplete = async (reqData) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '..', './templates', reqData.filename), 'utf8', (err, htmlBody) => {
                if (err) resolve(false);
                resolve(htmlBody);
            });
        });
    }

    app.get("/api/send-Subscribe/:email", async (req, res) => {
        try {
            var options = {
                'method': 'POST',
                'url': 'https://api-us1.chd01.com/accounts/2390/forms/1/subscribe/1ad41de67717a4eb70f8795b5ddc683fbf880fc5',
                'formData': {
                    'contact_fields[email]': req.params.email,
                    'commit': 'Subscribe'
                }
            };
            request(options, async function (error, response) {
                if (error) throw new Error(error);


                var mailOptions = {
                    from: `Market Wealth Advisor <${process.env.SMTP_FROM}>`,
                    to: req.params.email,
                    subject: "Thanks for subscribing!",
                    html: await GetEmailTemplete({ filename: 'subscribing.html' })
                };

                const payload_config = {
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT || 587,
                    secure: process.env.SMTP_SECURE ? (process.env.SMTP_SECURE == "false" ? false : true) : false,
                    auth: {
                        user: process.env.SMTP_USER_Name,
                        pass: process.env.SMTP_PASSWORD,
                    }
                }

                console.log(mailOptions)
                console.log(payload_config);
                const Transport = nodemailer.createTransport(payload_config)

                Transport.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.json({ status: false });
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.json({ status: true });
                    }
                });
            });

        } catch (err) {
            res.json({ status: false, message: err.message });
        }
    });



    // app.get('*.js', function (req, res, next) {
    //     req.url = req.url + '.gz';
    //     res.set('Content-Encoding', 'gzip');
    //     next();
    // });

    // app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "..", "..", 'build', 'index.html')));

}

module.exports = main
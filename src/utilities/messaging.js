import 'whatwg-fetch';
import { updateErrorMessage } from '../actions/app';
/* API keys added to env on startup, to be attached to deployment script in server. */

export function sendEmail(data) {
    return (dispatch) => {
        /* Construct body using data. Depending on the api, there might be the need to 
            iterate over the CC and BCC addresses to send separately. */

        /* Do fetch to endpoint in separate functions to avoid too-long code blocks. 
            Currently not working due to CORS issue where attaching Authorization header is not allowed when fetching mailgun.
            Below is the pseudocode / prototype. Surely there are better, non-repetitive ways.: 

            fetchMailgun(data).then((res, err) => {
                if (err) {
                    fetchSendgrid(data).then((res, err) => {
                        if (err) {
                            switch(res) {
                                case 501:
                                    return dispatch(updateErrorMessage('Err 501'));
                                case 400:
                                    return dispatch(updateErrorMessage('Err 400'));
                                default:
                                    return dispatch(updateErrorMessage('Something else bad happened.'));
                            }
                        } else if (res === 200) { 
                            // Dispatch confirmation after receiving 200 ok response. 
                            return dispatch(updateErrorMessage('Message sent.'));
                        }
                    });
                } else if (res === 200) { 
                    // Dispatch confirmation after receiving 200 ok response. 
                    return dispatch(updateErrorMessage('Message sent.'));
                }
            }
        */

        /* Alternatively, Consider fetching to local server as proxy and do api transactions in express to see if authorization can be done more easily there. */
    }
}

function fetchMailgun(data) {
    /* Do preprocessing here to fit data in the API's methods. */

    // const testdata = {
    //     from: 'test@mail.com',
    //     to: 'test@mail.com',
    //     subject: 'Hello',
    //     text: 'test',
    // }

    // const formBody = Object.keys(data).map(key=>
    //     encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&');
    // const request = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic '+btoa(`api:${MAILGUN_API_KEY}`), 
    //     },
    //     body: formBody
    // }

    /* Send back the results */
    // fetch(`https://api.mailgun.net/v3/sandbox776110e4ebce44e2ad81e7e13c998034.mailgun.org/messages`, request)
        // .then((res) => {if (res === 200) { return res.statusCode }})
        // .catch((err) => {return (res.statusCode, err)});
}

function fetchSendgrid(data) {
    /* Do preprocessing here to fit data in the API's methods. */

    // const helper = require('sendgrid').mail;
    // const fromEmail = new helper.Email('test@example.com');
    // const toEmail = new helper.Email('test@example.com');
    // const subject = 'Sending with SendGrid is Fun';
    // const content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
    // const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    // const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    // const request = sg.emptyRequest({
    //     method: 'POST',
    //     path: '/v3/mail/send',
    //     body: mail.toJSON()
    // });

    /* Send back the results */

    // sg.API(request, function (error, response) {
    // if (error) {
    //     console.log('Error response received');
        //    return (res.statusCode, error);
    // }
    // return response.statusCode;

    // console.log(response.statusCode);
    // console.log(response.body);
    // console.log(response.headers);
    // });
}
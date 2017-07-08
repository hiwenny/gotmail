import { mailgun_api_key } from '../server/creds/mailgun';
import { Mailgun } from 'mailgun';
// var api_key = 'key-XXXXXXXXXXXXXXXXXXXXXXX';
const domain = '*.herokuapp.com';
const tempdomain = '*';
// const mailgun = require('mailgun-js')({apiKey: mailgun_api_key, domain: domain});
 
// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'serobnic@mail.ru',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!'
// };
 
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });

export function sendEmail(data) {
    const mg = new Mailgun(mailgun_api_key);
    mg.sendText('example@example.com', ['Recipient 1 <rec1@example.com>', 'rec2@example.com'],
        'This is the subject',
        'This is the text',
        domain, {},
        (err) => {
            if (err) {
                console.log('Oh noes: ' + err);
            } else {
                console.log('Success');
            }
        });
    // return (dispatch) => {
    //     return dispatch(updateErrorMessage('dispatch from sendmail'));
    // }
    // mailgun.messages().send(data, (err, body) => {
    //     return new Promise((resolve) => {})
    // })
}

// export function fetchComponentData(store, props, ip) {
//   const {query, params, components, location} = props;

//   return new Promise((resolve) => {
//     const component = components[components.length - 1].WrappedComponent;
//     if (component && component.fetchData) {
//       return resolve(component.fetchData({store, params, query, location, ip}));
//     }
//     resolve();
//   });
// }
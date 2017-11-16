'use strict';

module.exports = function(Email) {
    // send an email
    Email.sendEmail = function(req, cb) {
        // console.log(req.body);
        const { name, email, subject, message} = req.body;
        const output = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br><br>
            <strong>Subject:</strong> ${subject}<br>
            <strong>Message:</strong> ${message}
        `;
        Email.app.models.Email.send({
            to: 'projectpcari@gmail.com',
            from: '"New Message" <projectpcari@gmail.com>',
            subject: subject,
            html: output
        }, function(err, mail) {
            if(err){
                cb(err);
            }else{
                cb(null,'Email sent!');
            }
        });
    }
    Email.remoteMethod('sendEmail', {
        description: 'Sends email',
        accepts: {arg: 'req', type:'object', http: {source: 'req'}},
        returns: {arg: 'res', type:'object', root: true}
    });
};

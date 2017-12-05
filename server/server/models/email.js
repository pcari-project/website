'use strict';

module.exports = function(Email) {
    // send an email
    Email.sendEmail = function(req, cb) {
        // console.log(req.body);
        const { name, email, subject, message} = req.body;
        const output = `
            <div style="background:#eee">
                <div style="font-family:Roboto,Arial,Helvetica,sans-serif;font-size:15px;line-height:18px;background:#eee;margin:auto;padding:8px;max-width:500px">
                    <div style="padding:6px 0 14px 16px">
                        <a href="https://wiseir.herokuapp.com"><img src="https://i.imgur.com/OA8Pkws.png" height="78" /></a>
                        <div style="background:#fff;padding:16px;">
                            <div style="margin:16px 0 24px 0;font-size:32px;font-weight:bold;">${subject}</div>
                            <div style="color:#555;">${message}</div>
                            <div style="font-size:13.5px;margin:30px 0;color:#777">${name}<br>${email}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        Email.app.models.Email.send({
            to: 'pcari.wiseir@gmail.com',
            from: '"WISEIr" <pcari.wiseir@gmail.com>',
            subject: 'You have a new message',
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
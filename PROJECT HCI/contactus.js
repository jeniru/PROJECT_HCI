document.getElementById("sendMessageButton").addEventListener("click", function() {
    sendEmailWithDetails();
});

function captureBookingDetails() {
    return {
        first: document.getElementById("firstName").value,
        last: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
}

function sendEmailWithDetails() {
    // Capture booking details
    const bookingDetails = captureBookingDetails();

    // Compose email body with captured details
    const bodyMessage = `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="x-apple-disable-message-reformatting">
            <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
    
            
            <!--[if !mso]><!-->
              
            <!--<![endif]-->
    
            <!--[if mso]>
              <style>
                  // TODO: fix me!
                  * {
                      font-family: sans-serif !important;
                  }
              </style>
            <![endif]-->
        
            
            <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
            <title></title>
    
            <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            
        <style>
            :root {
                color-scheme: light;
                supported-color-schemes: light;
            }
    
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
    
                overflow-wrap: break-word;
                -ms-word-break: break-all;
                -ms-word-break: break-word;
                word-break: break-all;
                word-break: break-word;
            }
    
    
            
      direction: undefined;
      center,
      #body_table {
        
      }
    
      ul, ol {
        padding: 0;
        margin-top: 0;
        margin-bottom: 0;
      }
    
      li {
        margin-bottom: 0;
      }
    
      
    
      .list-block-list-outside-left li {
        margin-left: 20px !important;
      }
    
      .list-block-list-outside-right li {
        margin-right: 20px !important;
      }
    
      
        .paragraph {
          font-size: 14px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #5f5f5f;
          
        }
      
    
        .heading1 {
          font-size: 32px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #414640;
          
        }
      
    
        .heading2 {
          font-size: 28px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #414640;
          
        }
      
    
        .heading3 {
          font-size: 20px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #414640;
          
        }
      
    
        .list {
          font-size: 14px;
          font-family: Helvetica, sans-serif;
          font-weight: normal;
          font-style: normal;
          text-align: start;
          line-height: 1;
          text-decoration: none;
          color: #5f5f5f;
          
        }
      
    
      p a, 
      li a {
        
      display: inline-block;  
        color: #A3BABD;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
    
      }
    
      .button-table a {
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
      }
    
      .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
    
    
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            div[style*="margin: 16px 0"] {
                margin: 0 !important;
            }
    
            #MessageViewBody,
            #MessageWebViewDiv {
                width: 100% !important;
            }
    
            table {
                border-collapse: collapse;
                border-spacing: 0;
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
            table:not(.button-table) {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
    
            th {
                font-weight: normal;
            }
    
            tr td p {
                margin: 0;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            a[x-apple-data-detectors],
    
            .unstyle-auto-detected-links a,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            .im {
                color: inherit !important;
            }
    
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }
    
            img.g-img+div {
                display: none !important;
            }
    
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                u~div .contentMainTable {
                    min-width: 320px !important;
                }
            }
    
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                u~div .contentMainTable {
                    min-width: 375px !important;
                }
            }
    
            @media only screen and (min-device-width: 414px) {
                u~div .contentMainTable {
                    min-width: 414px !important;
                }
            }
        </style>
    
        <style>
            @media only screen and (max-device-width: 600px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
            @media only screen and (max-width: 600px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
        </style>
        
        
    <!--[if mso | IE]>
        <style>
            .list-block-outlook-outside-left {
                margin-left: -18px;
            }
        
            .list-block-outlook-outside-right {
                margin-right: -18px;
            }
    
            a:link, span.MsoHyperlink {
                mso-style-priority:99;
                
      display: inline-block;  
        color: #A3BABD;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
    
            }
        </style>
    <![endif]-->
    
    
        </head>
    
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #7c7c75;">
            <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #7c7c75;">
                <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #7c7c75;">
                <tbody>    
                    <tr>
                        <td>
                        <![endif]-->
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: auto;" class="contentMainTable">
                                <tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#7C7C75;line-height:30px;font-size:30px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#7C7C75"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:right;line-height:10.35px;font-size:9px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#ffffff">Una​ble to view? Read it </span><a href="{view}" data-type="mergefield" data-id="2555f5fd-8dc9-4fc8-844a-aeb77308179e-fV5NwAZCzEwTVAPWj4Qnh" data-filename="" class="2555f5fd-8dc9-4fc8-844a-aeb77308179e-fV5NwAZCzEwTVAPWj4Qnh" data-mergefield-value="view" data-mergefield-input-value="" style="color: #A3BABD; display: inline-block;"><span class="bold" style="font-weight: bold;"><span class="underline" style="display: inline-block; text-decoration: underline;">Online</span></span></a></p></td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#7C7C75;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px" align="center"><table align="center" width="100.8" class="imageBlockWrapper" style="width:100.8px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/wanderlogo.png" width="100.8" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#fff;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0" align="right"><table align="right" width="600" class="imageBlockWrapper" style="width:600px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/adasdas.jpeg" width="600" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#fff;display:block;padding-top:40px;padding-right:20px;padding-bottom:30px;padding-left:20px;text-align:center"><p style="font-family:Helvetica, sans-serif;text-align:center;line-height:36.80px;font-size:32px;background-color:#fff;color:#414640;margin:0;word-break:normal" class="heading1">Thank you for messaging Us!</p></td></tr><tr class="wp-block-editor-dividerblock-v1" align="center" valign="top"><td style="padding-top:8px;padding-bottom:8px;padding-left:40px;padding-right:40px;background-color:#fff"><div style="background:#808080;font-size:1px;line-height:1px;border:0">&nbsp;</div></td></tr><tr class="wp-block-editor-dividerblock-v1" align="center" valign="top"><td style="padding-top:8px;padding-bottom:8px;padding-left:40px;padding-right:40px;background-color:#fff"><div style="background:#808080;font-size:1px;line-height:1px;border:0">&nbsp;</div></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 60px 20px 60px;background-color:#fff"><p class="paragraph" style="font-family:Helvetica, sans-serif;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal">
                                First Name: ${bookingDetails.first}<br>
                                Last Name: ${bookingDetails.last}<br>
                                Email: ${bookingDetails.email}<br>
                                Message: ${bookingDetails.message}<br><br>
                                <h2>We will get in touch with you as soon as possible.</h2>
                                
                                </p></td></tr><tr class="wp-block-editor-dividerblock-v1" align="center" valign="top"><td style="padding-top:8px;padding-bottom:8px;padding-left:40px;padding-right:40px;background-color:#fff"><div style="background:#808080;font-size:1px;line-height:1px;border:0">&nbsp;</div></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;background-color:#7C7C75"><table role="presentation" class="multi-column" style="width:600px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1"><td style="width:300px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="300" style="width:300px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#7C7C75;line-height:24px;font-size:24px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#7C7C75;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0" align="center"><table align="center" width="96" class="imageBlockWrapper" style="width:96px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/ee0a7c8a-9dd1-473a-a4e1-eddeb44a132c/wanderlogo.png" width="96" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#7C7C75;line-height:24px;font-size:24px;width:100%;min-width:100%">&nbsp;</td></tr></tbody></table></td><td style="width:300px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="300" style="width:300px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff"><p class="paragraph" style="font-family:Helvetica, sans-serif;text-align:right;line-height:21.00px;font-size:14px;margin:0;color:#5f5f5f;word-break:normal">WanderLust <br>Bonifacio St. Davao City, Philippines<span style="font-weight: bold;" class="bold"><br></span>tourpackages.wanderlust@gmail.com<br>+63958536560</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-socialiconsblock-v1" role="article" aria-roledescription="social-icons" style="display:table-row;background-color:#7C7C75"><td style="width:100%"><table style="background-color:#7C7C75;width:100%;padding-top:30px;padding-bottom:20px;padding-left:20px;padding-right:20px;border-collapse:separate !important" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td align="center" valign="top"><div style="max-width:560px"><table role="presentation" style="width:100%" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><div style="margin-left:auto;margin-right:auto;margin-top:-5px;margin-bottom:-5px;width:100%;max-width:156px"><table role="presentation" style="padding-left:202" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://facebook.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/facebook/facebook-round-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="Facebook"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://twitter.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/x/x-round-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="X (formerly Twitter)"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://instagram.com" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/instagram/instagram-round-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="Instagram"></a></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div></td></tr></tbody></table></td></tr><tr><td valign="top" align="center" style="padding:20px 20px 20px 20px;background-color:#7C7C75"><p aria-label="Unsubscribe" class="paragraph" style="font-family:Helvetica, sans-serif;text-align:center;line-height:15.00px;font-size:10px;margin:0;color:#5f5f5f;word-break:normal"><span style="color:#fafafa">If you no longer wish to receive mail from us, you can</span> <a href="{unsubscribe}" data-type="mergefield" data-filename="" data-id="6834a13b-6b5d-46ab-bf58-6f250bedef5c-CqggEjfnjf9u_gT4w3_qM" class="6834a13b-6b5d-46ab-bf58-6f250bedef5c-CqggEjfnjf9u_gT4w3_qM" data-mergefield-value="unsubscribe" data-mergefield-input-value="" style="color: #A3BABD; display: inline-block;"><span class="underline" style="display: inline-block; text-decoration: underline;"><span class="bold" style="font-weight: bold;">unsubscribe</span></span></a>.<br><span style="color:#FFFFFf">{accountaddress}</span></p></td></tr>
                            </table>
                        <!--[if mso | IE]>
                        </td>
                    </tr>
                </tbody>
                </table>
                <![endif]-->
            </center>
        </body>
    </html>`;

    // Use Email.send() to send the email with the composed bodyMessage
    Email.send({
        SecureToken: "30441a16-942e-46f7-9655-66add9a75c5e",
        Host: "smtp.elasticemail.com",
        Username: "tourpackage.wanderlust@gmail.com",
        Password: "4A9A7C1809558F4A01C60764CAEF6A023E80",
        To: 'tourpackage.wanderlust@gmail.com',
        From: "tourpackage.wanderlust@gmail.com",
        Subject: "CUSTOMER FEEDBACK",
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Email Sent!",
                    text: "Your data has been sent.", 
                    icon: "success",
                    confirmButtonColor: "#3085d6"
                });
            }
        }
    );
}

function sendEmailWithDetails() {
    // Capture booking details
    captureBookingDetails();

    // Compose email body with captured details
    const bodyMessage = `First Name: ${bookingDetails.first}\nLast Name: ${bookingDetails.last}\nEmail: ${bookingDetails.email}\nMessage: ${bookingDetails.required}`;
        
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
function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "yl301114@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "哇咧設計諮詢",
        Body : "Name:" + document.getElementById("name").value
                + "<br>Email:" + document.getElementById("email").value
                + "<br>Whatsapp:" + document.getElementById("whatsapp").value
                + "<br>Line ID:" + document.getElementById("lineid").value
                + "<br>Title:" + document.getElementById("title").value
                + "<br>Content:" + document.getElementById("content").value
    }).then(
        message => alert("Thank you for your email, we will contact you soon!"),
    );
}
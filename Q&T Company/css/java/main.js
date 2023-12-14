const user = {
    name : "Ahmed",
    password : "ahmed2000",
    email :{
        emailUser : "Ahmed@gmail.com",
        passwordUser : "12345",
    },
    conferm : function() {
        return `my name is ${this.name}
my email is ${this.email.emailUser}
my password is ${this.password}`;
        
    },
};
 console.log(user.conferm());

/**
 *? Напиши клас Client який створює об'єкт
 *? з властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
 class Client {
    #login; 
    #email;
    constructor(login, email) {
        this.#email = email;
        this.#login = login;
    }
    get login (){
        return this.#login
    }
    set login (newLogin) {
        this.#login = newLogin;
    }
    get email (){
        return this.#email
    }
    set email (newEmail) {
        this.#email = newEmail;
    }
 }
 const Client1 = new Client("user", "wwww")
console.log(Client1.login)
console.log(Client1.login = "user3");
 console.log(Client1);
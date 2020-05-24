function send() {

    class Person {

        constructor(name, telephone, comment) {
                this.name = name,
                this.telephone = telephone,
                this.comment = comment
        }

        forAlert() {
            alert("Отправлено");
        }

    }
    
    let user = new Person("Виктор",80291438443,'Hello, ElectroNeek')
    document.getElementById('name').value = user.name
    document.getElementById('telephone').value = user.telephone
    document.getElementById('comment').value = user.comment

}
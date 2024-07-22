const car = {
    brand: "Fiat",
    model: "500X Off Road",
    color: "#d6282f",
    graduationYear: "2014",
    fullCar: function () {
        return `Автомобіль - ${this.brand}.
                Модель - ${this.model}.
                Рік випуску - ${this.graduationYear}.
                Колір - ${this.color}`;
    }
}
document.getElementById("car").innerHTML = car.fullCar();
document.getElementById("car").style.fontSize = "20px";


const book = {
    bookTitle: "Дюна",
    bookAuthor: "Френк Герберт",
    numberOfPages: "656",
    fullBook: function () {
        return `Назва книги - ${this.bookTitle}.    
                Автор книги - ${this.bookAuthor}.    
                Кількість сторінок - ${this.numberOfPages}.`
    }
}
document.getElementById("book").innerHTML = book.fullBook();
document.getElementById("book").style.color = "#45818e";
document.getElementById("book").style.fontSize = "20px";


const student = {
    firstName: "Орест",
    lastName: "Складний",
    course: "2",
    fullStudent: function() {
        return `Привіт!  
        мене звати  ${this.firstName} ${this.lastName},  
        я навчаюсь на ${this.course}  курсі.`
    }
}
document.getElementById("student").innerHTML = student.fullStudent();
document.getElementById("student").style.color = "#351c75";
document.getElementById("student").style.fontSize = "20px";

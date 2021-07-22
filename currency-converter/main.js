//esta clase contiene todos los métodos del patrón observador
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(o) {
        this.observers.push(o);
    }

    unsubscribe(o) {
        this.observers = this.observers.filter((e) => e != o);
    }

    notify(model) {
        this.observers.forEach((observer) => {
            observer.notify(model);
        });
    }
}
//esta clase hereda de la principal y añade sus características, corresponde
//al campo de la moneda guaranies
class TextSubject extends Subject {
    constructor() {
        super();
        this.valor = 0;
    }

    notify(valor) {
        this.valor = valor;

        super.notify(this);
    }
}
//ahora creamos las clases para las monedas que se actualizarán
//de acuerdo al valor de los guaraníes
class dolarObserver {
    notify(subject) {
        let cambio = subject.valor / 6850;
        document.getElementById("dolar").textContent = cambio.toFixed(2);
    }
}
class euroObserver {
    notify(subject) {
        let cambio = subject.valor / 8000;
        document.getElementById("euro").textContent = cambio.toFixed(2);
    }
}
class pesoObserver {
    notify(subject) {
        let cambio = subject.valor / 50;
        document.getElementById("peso").textContent = cambio.toFixed(2);
    }
}
class realObserver {
    notify(subject) {
        let cambio = subject.valor / 1350;
        document.getElementById("real").textContent = cambio.toFixed(2);
    }
}
class copObserver {
    notify(subject) {
        let cambio = subject.valor / 1.8;
        document.getElementById("cop").textContent = cambio.toFixed(2);
    }
}
class mxnObserver {
    notify(subject) {
        let cambio = subject.valor / 340;
        document.getElementById("mxn").textContent = cambio.toFixed(2);
    }
}
class yuanObserver {
    notify(subject) {
        let cambio = subject.valor / 1050;
        document.getElementById("yuan").textContent = cambio.toFixed(2);
    }
}
class libraObserver {
    notify(subject) {
        let cambio = subject.valor / 9400;
        document.getElementById("libra").textContent = cambio.toFixed(2);
    }
}
class yenObserver {
    notify(subject) {
        let cambio = subject.valor / 62;
        document.getElementById("yen").textContent = cambio.toFixed(2);
    }
}

//ahora instanciamos las clases y creadas y las suscribimos al campo de guaraníes
const textSubject = new TextSubject();
const dolar = new dolarObserver();
const euro = new euroObserver();
const peso = new pesoObserver();
const real = new realObserver();
const cop = new copObserver();
const mxn = new mxnObserver();
const yuan = new yuanObserver();
const libra = new libraObserver();
const yen = new yenObserver();

textSubject.subscribe(dolar);
textSubject.subscribe(euro);
textSubject.subscribe(peso);
textSubject.subscribe(real);
textSubject.subscribe(cop);
textSubject.subscribe(mxn);
textSubject.subscribe(yuan);
textSubject.subscribe(libra);
textSubject.subscribe(yen);

//aquí hacemos que se notifique cada cambio en el campo guaraníes
document.getElementById("guaranies").addEventListener("input", () => {
    textSubject.notify(event.target.value);
});

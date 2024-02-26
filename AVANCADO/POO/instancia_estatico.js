// Metodos estatiscos são metodos que podem ser acessados sem instanciar a classe

function teste() {
    console.log('Testando 1,2,3')
}

class ControleRemoto { // métodos estaticos são referentes somemte a classe e não a sua instancia
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste(); // quando criar a instancia deve executar essa função
    }

    // método de instancia
    aumentaVolume() {
        this.volume += 2;
    }

    // método de instancia
    diminuiVolume() {
        this.volume -= 2;
    }

    // método estatico
    static trocaPilha() { // se acessado irá ser executado em todos os controles
        console.log('Vou trocar');
    }

    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);

ControleRemoto.trocaPilha(); // não se refere a instancia e sim a classe
console.log(Math.random()); // uma classe que cham o metodo estatic random

console.log(ControleRemoto.soma(8, 2));

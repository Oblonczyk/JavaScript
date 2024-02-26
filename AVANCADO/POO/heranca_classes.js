class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
            return
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
}

class SmartWatch extends DispositivoEletronico { // o Extends serve para criar heranças, é possível fazer quantas vezes quiser, mas quanto mais extensões, mais dificil debugar|alterar
    constructor(nome, cor, modelo) {
        super(nome); // É uma superClass, trás dentro dos parenteses seus parâmetros, além disso também trás todas as propriedades e métodos
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new SmartWatch('AppleWatch', 'Branco', '4 Pro');
s1.ligar();
console.log(s1);

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo, marca, valor) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.valor = valor;
    }

    ligar() {
        console.log('Você alterou o método ligar');
    }
}

const cel1 = new SmartPhone('Celular', 'Preto', 'Galaxy S10', 'Samsung', 1356.98);
cel1.ligar();
console.log(cel1);

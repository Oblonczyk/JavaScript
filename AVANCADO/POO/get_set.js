const _velocidade = Symbol('velocidade'); // cada vez que a função Symbol é chamada ela gera um novo Symbol

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { // set sempre precisa receber um valor | set é usado para atribuir valores
        if(typeof valor !== "number") return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() { // get retorna o valor quando requisitado
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 150) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca', 0);

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Vinycius', 'Oblonczyk');
p1.nomeCompleto = 'Vinycius Gabriel Oblonczyk'
console.log(p1.nomeCompleto);

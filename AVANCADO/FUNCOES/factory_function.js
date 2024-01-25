// função fabrica fabrica obj

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },

        fala(assunto = 'falando sobre nada') { // quando uma função esta dentro de um objeto, denomina-se método
            return `${this.nome} está ${assunto}`; // o this sempre vai se referir ao objeto inteiro (equivale a p1.nome)
        },

        altura,
        peso,
        get imc() { // get mascara a função como um atributo (Getter)
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Vinycius', 'Oblonczyk', 1.81, 78);
p1.nomeCompleto = 'Vinycius Gabriel Oblonczyk'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);

// A vantagem de usar uma factory function é facilitar o uso, no exemplo acima criar inumeras pessoas sem precisar criar uma função para cada

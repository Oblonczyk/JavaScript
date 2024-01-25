// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 123; // privada

    const metodoInterno = () => { // privada
        
    }

    this.nome = nome; // publico
    this.sobrenome = sobrenome; // publico

    this.metodo = () => { // publico
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Vinycius', 'Oblonczyk'); // é preciso usar o new, e por isso deve começar com letra maiúscula
p1.metodo();

const p2 = new Pessoa('Maria', 'Joana');

//a palavra new cria um novo obj vazio e faz o this apontar para o obj vazio e, implicitamente faz o return

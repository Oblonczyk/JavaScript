function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes();
        this.pressionaEnter();
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta) {
                alert('Conta Inválida');
                return
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta Inválida')
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(el.classList.contains('btn-equal')){
                this.realizaConta()
            }

        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();

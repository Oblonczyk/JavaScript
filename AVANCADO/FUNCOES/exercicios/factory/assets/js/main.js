function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        realizaConta() {
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
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickBotoes() {
            document.addEventListener('click', function(e) {
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

            }.bind(this)); // faz com o JS considere o valor de this fora da função ao inves de document
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

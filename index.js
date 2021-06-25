//let variable1 = 1;

//const variable = 2;

//function proof (a, b){
  //  return a+b ;


class FabricaBicicleta {
    costructor (materiaPrima, pintura, pintado, armado){
        this.pintado = pintado || false;
        this.armado =  armado || false;
        this.materiaPrima = materiaPrima;
        this.pintura = pintura;
    }
    informar (mensaje){
        console.log(mensaje);
    };
    armar(){
        this.materiaPrima = this.materiaPrima - 1;
        this.informar ('tu bici esta ensamblada')
        this.armado = true;
    }
    pintar(){
        if(this.armado){
            this.pintura = this.pintura -1;
            this.informar ('la bici esta pintada');
            this.pintado = true;
            
        }
    }
}

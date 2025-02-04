class Carta extends Phaser.GameObjects.Sprite {
    constructor(scene, cont, own, sprite) {
        var x = 0;
        var y = 0;
        var spriteusar;
        super(scene, x, y, sprite);

        //this.setInteractive();

        this.seleccionada;
        this.which = cont;

        this.colocada = false;
        this.owner = own;

        this.norte;
        this.sur;
        this.este;
        this.oeste;

    }


    getA() { return this.movible; }
    setA(b) { this.movible = b; }

    getMovimiento() { return this.movimiento; }

    getX() { return this.x; }
    setX(man) { this.x = man; }

    getY() { return this.y; }
    setY(man) { this.y = man; }

    setPosicion(posx, posy) {
        this.x = posx;
        this.y = posy;
    }

    getSeleccionada(){return this.seleccionada};
    setSeleccionada(info){ this.seleccionada = info};

    getId() { return this.ident; }
    setId(idn) { this.ident = idn; }


    getNorte() { return this.norte; }
    getSur() { return this.sur; }
    getEste() { return this.este; }
    getOeste() { return this.oeste; }

    setNorte(a) { this.norte = a; }
    setSur(a) { this.sur = a; }
    setEste(a) { this.este = a; }
    setOeste(a) { this.oeste = a; }

    setWhich(cont){
        this.which = cont;
    }

    setOwner(propietario){
        this.owner = propietario;
    }


    pintarCarta(escena) {
        escena.add.existing(this);
    }

    setSprite(sprite){

        spriteusar = sprite;

    }

    /*
    setCeldaCercana(celda){
        var distX = Math.abs(celda.getX() - this.getX());
        var distY = Math.abs(celda.getY() - this.getY());

        //if(!celda.isOcupada()){
            if(distX < 118 && distY < 153) {
                this.setX(celda.getX());
                this.setY(celda.getY());
            }
        //} else {
            //this.setX(50);
            //this.setY(50);
        //}
    } */


}
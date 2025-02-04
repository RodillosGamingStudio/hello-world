
class Jugador {

	constructor(scene, cont, own, ndeck) {
		var i = 0;
		var n = 125;
		var m = 125;
	
		//this.cartaSeleccionada = -1;

		this.mano = [];
		
		if (ndeck == 0) {
			this.mano = this.crearManoNordico(scene, cont, own);
		} else {
			this.mano = this.crearManoGriego(scene, cont, own);
		}

		if (cont == 1) {
			this.setManoPos(250, 220);
		} else if (cont == 2) {
			this.setManoPos(1225, 220);
		}
	}

	crearManoNordico(scene, cont, own){
		var aux = [];
		var aux2 = [];

		aux[0] = new CartaRagnar(scene, cont, own);
		aux[1] = new CartaRagnar(scene, cont, own);
		aux[2] = new CartaN1(scene, cont, own);
		aux[3] = new CartaN1(scene, cont, own);
		aux[4] = new CartaN2(scene, cont, own);
		aux[5] = new CartaN2(scene, cont, own);
		aux[6] = new CartaN3(scene, cont, own);
		aux[7] = new CartaN3(scene, cont, own);

		aux2[0] = new CartaRagnarBig(scene);
		aux2[1] = new CartaRagnarBig(scene);
		aux2[2] = new CartaN1Big(scene);
		aux2[3] = new CartaN1Big(scene);
		aux2[4] = new CartaN2Big(scene);
		aux2[5] = new CartaN2Big(scene);
		aux2[6] = new CartaN3Big(scene);
		aux2[7] = new CartaN3Big(scene);

		return [aux, aux2];
	}

	crearManoGriego(scene, cont, own){
		var aux = [];
		var aux2 = [];

		aux[0] = new CartaMedusa(scene, cont, own);
		aux[1] = new CartaMedusa(scene, cont, own);
		aux[2] = new CartaG1(scene, cont, own);
		aux[3] = new CartaG1(scene, cont, own);
		aux[4] = new CartaG2(scene, cont, own);
		aux[5] = new CartaG3(scene, cont, own);
		aux[6] = new CartaG4(scene, cont, own);
		aux[7] = new CartaG5(scene, cont, own);

		aux2[0] = new CartaMedusaBig(scene);
		aux2[1] = new CartaMedusaBig(scene);
		aux2[2] = new CartaG1Big(scene);
		aux2[3] = new CartaG1Big(scene);
		aux2[4] = new CartaG2Big(scene);
		aux2[5] = new CartaG3Big(scene);
		aux2[6] = new CartaG4Big(scene);
		aux2[7] = new CartaG5Big(scene);

		return [aux, aux2];
	}

	getCartaSeleccionada() { return this.cartaSeleccionada; }
	setCartaSeleccionada(a) { this.cartaSeleccionada = a; }

	getMano() {
		return this.mano;
	}

	pintarMano(scene) {
		var i = 0;
		for (i; i < 8; i++) {
			this.mano[0][i].pintarCarta(scene);
			this.mano[1][i].pintarCarta(scene);
		}
	}

	setManoX(a) {
		var i = 0;
		for (i; i < 8; i++) {
			this.mano[0][i].setX(a);
		}
	}

	setManoPos(a, b){
		for (var i = 0; i < 4; i++) {
			this.mano[0][i].setX(a);
			this.mano[0][i].setY(b + i*154);
		}

		for (var i = 4; i < 8; i++) {
			this.mano[0][i].setX(a + 120);
			this.mano[0][i].setY(b + (i-4)*154);
		}
	}



}
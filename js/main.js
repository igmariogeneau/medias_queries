/*jshint esversion: 6*/

$(function() {
	"use strict";
	$("#lien_taxes").click(showTaxes);
	$("#taxes").mouseout(function() {
		$(this).css("opacity", "0");
	});
});

function showTaxes() {
	"use strict";
	$("#taxes").css("opacity", "1");
	calculateTaxes();
}

function calculateTaxes() {
	"use strict";
	
	const montantDansLeChamp = "100";
	var textePourAffichage = "";
	
	// Doubles
	const leMontant = parseFloat(montantDansLeChamp);
	const tps = leMontant * 0.05;
	const tvq = leMontant * 0.09975;
	const montantAvecTaxes = leMontant + tps + tvq;
	// Strings
	const leMontantPrec = `${leMontant.toFixed(2)} $<br>`;
	const tpsPrec = `${tps.toFixed(2)} $<br>`;
	const tvqPrec = `${tvq.toFixed(2)} $<br>`;
	const montantAvecTaxesPrec = `${montantAvecTaxes.toFixed(2)} $<br>`;
	// Concatenation
	textePourAffichage = `MONTANT ORIGINAL : ${leMontantPrec}`;
	textePourAffichage += `LA TPS : ${tpsPrec}`;
	textePourAffichage += `LA TVQ : ${tvqPrec}`;
	textePourAffichage += `MONTANT AVEC TAXES : ${montantAvecTaxesPrec}`;
	// Affichage
	$("#taxes").html(textePourAffichage);
}


















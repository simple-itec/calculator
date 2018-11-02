
function test() {

	//Init
	if (document.kForm.fIVRValue.value) {

		var str1 = document.kForm.fIVRValue.value;
		str1 = str1.replace("'", "");
		str1 = str1.replace("-", "");
		str1 = str1.replace(".00", "");
		document.kForm.fIVRValue.value = str1;
		
		
	}

	if (document.kForm.fTodesfallValue.value) {

		var str2 = document.kForm.fTodesfallValue.value;
		str2 = str2.replace("'", "");
		str2 = str2.replace("-", "");
		str2 = str2.replace(".00", "");
		document.kForm.fTodesfallValue.value = str2;
		
	}

	if (document.kForm.fWaisenValue.value) {

		var str3 = document.kForm.fWaisenValue.value;
		str3 = str3.replace("'", "");
		str3 = str3.replace("-", "");
		str3 = str3.replace(".00", "");
		document.kForm.fWaisenValue.value = str3;
		
	}						



		if (document.kForm.fVorname.value == ''){
			alert('Veuillez indiquer votre prénom.');
			document.kForm.fVorname.focus();
		return false;
		}
		
		if (document.kForm.fNachname.value == ''){
			alert('\nVeuillez indiquer votre nom.');
			document.kForm.fNachname.focus();
		return false;
		}				

		if (document.kForm.fGender.value == '0'){
			alert('\nVeuillez indiquer votre sexe.');
			document.kForm.fGender.focus();
		return false;
		}				

		if (document.kForm.fGebDatum.value == ''){
			alert('\nVeuillez indiquer votre date de naissance.');
			document.kForm.fGebDatum.focus();
		return false;
		}							
		
		
		if (document.kForm.fVersichDatum.value == ''){
			alert('\nBitte geben Sie das Datum fuer den Versicherungsbeginn an.');
			document.kForm.fVersichDatum.focus();
		return false;
		}
		
		if (!document.kForm.fIVRCheck && !document.kForm.fTodesfallCheck && !document.kForm.fWaisenCheck){
			alert('\nBitte waehlen Sie die gewuenschten Versicherungen aus.');
			document.kForm.fVersichDatum.focus();
		return false;
		}					

	if (document.kForm.fIVRValue.value < 6000 && document.kForm.fIVRCheck.checked){
		alert("\nLa rente d’invalidité doit être au minimum de CHF 6'000");
		document.kForm.fIVRValue.value='6000';
		document.kForm.fIVRValue.focus();
	return false;
	}																	

	if (document.kForm.fIVRValue.value > 10000000000000000 && document.kForm.fIVRCheck.checked){
		alert("\nMaximal versicherbare Erwerbsunfaehigkeitsrente Fr. 10'000'000'000'000'000");
		document.kForm.fIVRValue.value='10000000000000000';
		document.kForm.fIVRValue.focus();
	return false;
	}

	if (document.kForm.fTodesfallValue.value < 50000 && document.kForm.fTodesfallCheck.checked){
		alert("\nLe capital décès doit être au minimum de CHF 50'000");
		document.kForm.fTodesfallValue.value='50000';
		document.kForm.fTodesfallValue.focus();
	return false;
	}																	

	if (document.kForm.fTodesfallValue.value > 10000000000000000 && document.kForm.fTodesfallCheck.checked){
		alert("\nMaximal versicherbares Todesfallkapital Fr. 10'000'000'000'000'000");
		document.kForm.fTodesfallValue.value='10000000000000000';
		document.kForm.fTodesfallValue.focus();
	return false;
	}

	if (document.kForm.fWaisenValue.value < 6000 && document.kForm.fWaisenCheck.checked){
		alert("\nLa rente d’orphelin doit être au minimum de CHF 6'000");
		document.kForm.fWaisenValue.value='6000';
		document.kForm.fWaisenValue.focus();
	return false;
	}																	

	if (document.kForm.fWaisenValue.value > 36000 && document.kForm.fWaisenCheck.checked){
		alert("\nLa rente d’orphelin ne peut être au maximum que de CHF 36'000");
		document.kForm.fWaisenValue.value='36000';
		document.kForm.fWaisenValue.focus();
	return false;
	}					
						
}

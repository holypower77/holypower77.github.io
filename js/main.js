var btn = document.getElementById('button');
var gg = document.getElementById('info');
var invalid = document.getElementById('invalid');
btn.onclick = function Complete() {
	var note = document.getElementById("Note").value;
	if (note == 'C' || note == 'c') {
		gg.innerHTML = 'C_D_E^F_G_A_H^C<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'D' || note == 'd') {
		gg.innerHTML = 'D_E_F#^G_A_H_C#^D<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'E' || note == 'e') {
		gg.innerHTML = 'E_F#_G#^A_H_C#_D#^E<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'F' || note == 'f') {
		gg.innerHTML = 'F_G_A^H_C_D_E^F<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'G' || note == 'g') {
		gg.innerHTML = 'G_A_H^C_D_E_F#^G<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'A' || note == 'a') {
		gg.innerHTML = 'A_H_C#^D_E_F#_G#^A<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else if (note == 'H' || note == 'h') {
		gg.innerHTML = 'H_C#_D#^E_F#_G#_A#_H<br><div><a href="#">Прослушать</a></div><div class="comm">* примечание<br># - диез<br>^ - полутон<br>_ - тон<br></div>';
		document.getElementById('invalid').style.display="none";
		document.getElementById('info').style.display="block";
	}
	else {
		invalid.innerHTML = '<div>Введено недопустимое значение!</div><div class="instruction">Используйте латинский алфавит<br>Ноты: C, D, E, F, G, A, H</div>';
		document.getElementById('info').style.display="none";
		document.getElementById('invalid').style.display="block";
	}
}

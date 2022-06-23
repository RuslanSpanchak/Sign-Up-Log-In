$("#logIn").click(function() {

	$("#logIn").addClass("active");
	$("#signUp").removeClass("active");

	$(".row").css("display", "none");
	$("#password_repeat").css("display", "none");

	$(".container").css("height", "400px");
	$(".container").css("width", "600px");

	$(".gmail").css("display", "block");
	$(".password").css("display", "block");
	$("#password_repeat").css("display", "none");
	$(".btn_login").css("display", "flex");
	$(".enter_way").css("display", "none");
	$(".btn").css("display", "flex");

	$(".bottom_logIn").css("display", "flex");
	$(".bottom").css("display", "none");

	$(".password_hint").css("display", "none");
	$(".top").css("margin-bottom", "25px");
	$(".bottom").css("margin-top", "25px");

});

$("#signUp").click(function() {

	$("#signUp").addClass("active");
	$("#logIn").removeClass("active");

	$(".row").css("display", "flex");
	$("#password_repeat").css("display", "flex");

	$(".container").css("height", "550px");
	$(".container").css("width", "700px");

	$(".gmail").css("display", "block");
	$(".password").css("display", "block");
	$(".btn").css("display", "flex");
	$(".enter_way").css("display", "none");

	$(".bottom_logIn").css("display", "none");
	$(".bottom").css("display", "flex");

});

let users = [];

$("#btn").click(function() {

	let email_info = email.value;
	let password_info = password.value;
	let password_repeat_info = password_repeat.value;
	let first_name_info = first_name.value;
	let last_name_info = last_name.value;

	if (checkEmpty(email_info, password_info, password_repeat_info, first_name_info, last_name_info) && checkLen(password_info) && checkLow(password_info) && checkUpper(password_info) && checkSpecial(password_info) && checkRepeat(password_info, password_repeat_info) && checkEmptyName(first_name_info, last_name_info) && checkLenName(first_name_info, last_name_info) && checkUpperName(first_name_info, last_name_info) && checkSpecialName(first_name_info, last_name_info) && checkSpecialEmail(email_info)) {

		$(".container").css("height", "300px");
		$(".container").css("width", "600px");

		$(".top").css("display", "none");
		$(".center").css("display", "none");
		$(".bottom").css("display", "none");
		$(".register_done").css("display", "flex");
		$(".register_done_text").html("Registration Was Successful");
		$(".bottom_logIn").css("display", "none");

		let user_first_name = "First Name: ";
		let user_last_name = "Last Name: ";
		let user_email = "Email: ";

		$(".firstName").html(user_first_name + first_name.value);
		$(".lastName").html(user_last_name + last_name.value);
		$(".email").html(user_email + email.value);

	} else {

		$(".password_hint").css("display", "flex");
		$(".top").css("margin-bottom", "10px");
		$(".bottom").css("margin-top", "0px");

	}

});

$("#btn_logIn").click(function() {

	let login_register_done = 0;

	if (login_register_done === 0) {

		$(".container").css("height", "200px");
		$(".container").css("width", "550px");

		$(".top").css("display", "none");
		$(".center").css("display", "none");
		$(".bottom").css("display", "none");
		$(".register_done").css("display", "flex");
		$(".bottom_logIn").css("display", "none");
		$(".register_done_text").html("Login Was Successful");

		let user_email = "Email: ";

		$(".email").html(user_email + email.value);

	} else {

		alert("Hello");

	}

});

function checkEmpty(login, password, repeat, first, last) {

	if (login && password && repeat && first && last) {

		return true;

	} else {

		return false;

	}

};

function checkLen(password) {

	if (password.length < 6) {

		return false;

	} else if (password.length > 20) {

		return false;

	} else {

		return true;

	}

};

function checkLow(password) {

	let countL = 0;

	for (let i = 0; i < password.length; i++) {

		if (password[i] == password[i].toLowerCase()) {

			countL++;

		}

	};

	if (countL == 0) {

		return false;

	} else {

		return true;

	}
 
};

function checkUpper(password) {

	let countL = 0;

	for (let i = 0; i < password.length; i++) {

		if (password[i] == password[i].toUpperCase()) {

			countL++;

		}

	};

	if (countL == 0) {

		return false;

	} else {

		return true;

	}
 
};

function checkSpecial(password) {

	let count = 0;

	let symbol = ['!', '@', '#', '$', '%', 'ˆ', '&', '*'];

	for (let i = 0; i < password.length; i++) {

		for (let j = 0; j < password.length; j++) {

			if (password[i] == symbol[j]) {

				count++

			}

		};

	};

	if (count == 0) {

		return false;

	} else {

		return true;

	}

};

function checkRepeat(password, repeat) {

	if (password == repeat) {

		return true;

	} else {

		return false;

	}

};

function checkEmptyName(first, last) {

	if (first && last) {

		return true;

	} else {

		return false;

	}

};

function checkLenName(first, last) {

	if (first.length < 4) {

		return false;

	} else if (first.length > 10) {

		return false;

	} else if (last.length < 5) {

		return false;

	} else if (last.length > 20) {

		return false;

	} else {

		return true;

	}

};

function checkLowName(first, last) {

	let countL = 0;

	for (let i = 0; i < first.length; i++) {

		if (first[i] == first[i].toLowerCase()) {

			countL++;

		}

	};

	for (let i = 0; i < last.length; i++) {

		if (last[i] == last[i].toLowerCase()) {

			countL++;

		}

	};

	if (countL == 0) {

		return false;

	} else {

		return true;

	}
 
};

function checkUpperName(first, last) {

	let countL = 0;

	for (let i = 0; i < first.length; i++) {

		if (first[i] == first[i].toUpperCase()) {

			countL++;

		}

	};

	for (let i = 0; i < last.length; i++) {

		if (last[i] == last[i].toUpperCase()) {

			countL++;

		}

	};

	if (countL == 0) {

		return false;

	} else {

		return true;

	}
 
};

function checkSpecialName(first, last) {

	let count = 0;

	let symbol = ['!', '@', '#', '$', '%', 'ˆ', '&', '*'];

	for (let i = 0; i < first.length; i++) {

		for (let j = 0; j < first.length; j++) {

			if (first[i] == symbol[j]) {

				count++

			}

		};

	};

	for (let i = 0; i < last.length; i++) {

		for (let j = 0; j < last.length; j++) {

			if (last[i] == symbol[j]) {

				count++

			}

		};

	};

	if (count == 0) {

		return true;

	} else {

		return false;

	}

};

function checkSpecialEmail(login) {

	let count = 0;

	let symbol = ["@"];

	for (let i = 0; i < login.length; i++) {

		for (let j = 0; j < login.length; j++) {

			if (login[i] == symbol[j]) {

				count++

			}

		};

	};

	if (count == 0) {

		return false;

	} else {

		return true;

	}

};
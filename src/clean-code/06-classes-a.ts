(() => {
	// Sin principio de resposabilidad única
	type Gender = "M" | "F";
	class Person {
		// public name: string;
		// public gender: Gender;
		// public birthdate: Date;

		// constructor(name: string, gender: Gender, birthdate: Date) {
		// 	this.name = name;
		// 	this.gender = gender;
		// 	this.birthdate = birthdate;
		// }

		constructor(public name: string, public gender: Gender, public birthdate: Date) {}
	}

	class User extends Person {
		private lastAccess: Date;

		constructor(public email: string, public role: string, name: string, gender: Gender, birthdate: Date) {
			super(name, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(email, role, name, gender, birthdate);
		}
	}

	const person = new Person("Nicolas", "M", new Date("1998-03-27:00:00:00"));
	console.log(person);

	const userSettings = new UserSettings(
		"/user/home",
		"/home",
		"nicolas@correo.com",
		"admin",
		"Nicolas",
		"M",
		new Date("1998-03-27:00:00:00")
	);

	console.log({ userSettings, areCredentials: userSettings.checkCredentials() });
})();

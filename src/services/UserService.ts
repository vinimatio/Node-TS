export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Crislane",
    email: "crislane@oab.com.br",
  },
  {
    name: "Jhon",
    email: "jon@jom.com",
  },
  {
    name: "Vini",
    email: "vini@vini.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log("DB Atualizado", this.db);
  };

  getAllusers = () => {
    return this.db;
  };

  deleteUser = (name: string) => {
    const index = this.db.findIndex((item) => item.name === name);

    if (index !== -1) {
      db.splice(index, 1);
      console.log(db);
    } else {
      console.log("usuário não encontrado");
    }
  };
}

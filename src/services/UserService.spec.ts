import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const mockConsole = jest.spyOn(global.console, "log");
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    userService.createUser("teste", "test@test.com");
    expect(mockConsole).toHaveBeenCalledWith("DB Atualizado", mockDb);
  });
});

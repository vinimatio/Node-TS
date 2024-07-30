import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockRespose.mock";

describe("UserCOntroller", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllusers: jest.fn(),
    deleteUser: jest.fn(),
  };

  const mockResponse = makeMockResponse();

  const mockResquest = {
    body: {
      name: "Vini",
      email: "vini@vini.com",
    },
  } as Request;

  const mockResquestNameNull = {
    body: {
      email: "vini@vini.com",
    },
  } as Request;

  const mockResquestEmailNull = {
    body: {
      name: "vini",
    },
  } as Request;

  const mockRequestNull = {} as Request;

  const userController = new UserController(mockUserService as UserService);

  it("Deve adicionar um novo usuário", () => {
    const response = userController.createUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({ message: "user created" });
  });

  it("Deve confirmar o erro em caso de não envio do name", () => {
    const response = userController.createUser(
      mockResquestNameNull,
      mockResponse
    );
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: name is mandatory",
    });
  });

  it("Deve confirmar o erro em caso de não envio do email", () => {
    const response = userController.createUser(
      mockResquestEmailNull,
      mockResponse
    );
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: email is mandatory",
    });
  });

  it("Deve confirmar o funcionamento da função getAllUsers", () => {
    const response = userController.getAllusers(mockRequestNull, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });

  it("Deve confirmar a exclusão de usuário", () => {
    const response = userController.deleteUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({ message: "user deleted" });
  });
});

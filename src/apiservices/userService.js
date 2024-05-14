
// import { TEmailSchema, TLoginSchema, TPasswordSchema, TSignUpSchema } from "../utils/validation";
import ApiClient from "./ApiCLient";


class UserService {
//   getAllUsers() {
//     const controller = new AbortController();

//     const request = ApiClient.get("/users", {
//       signal: controller.signal,
//     });
//     return { request, cancel: () => controller.abort() };
//   }

//   getUser() {
//     const controller = new AbortController();

//     const request = ApiClient.get("/users/user", {
//       signal: controller.signal,
//     });
//     return { request, cancel: () => controller.abort() };
//   }

//   deleteUser(id: number) {
//     return ApiClient.delete("/users/" + id);
//   }

  signupUser(user) {
    return ApiClient.post("/auth/signup", user);
  }
  

  loginUser(user) {
    return ApiClient.post("/auth/login", user);
  }

//   forgotPassword(user: TEmailSchema) {
//     return ApiClient.post("/auth/forgot-password", user);
//   }

//   resetPassword(id: string | undefined, data: TPasswordSchema) {
//     return ApiClient.post(`/auth/reset-password/${id}`, data);
//   }

//   updateUser(id: number, users: TSignUpSchema) {
//     return ApiClient.patch("/users/" + id, users);
//   }
}

export default new UserService();

import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const repositories = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(repositories);
    } catch (e) {
      return response.status(404).json({ error: `${e.message}` });
    }
  }
}

export { TurnUserAdminController };

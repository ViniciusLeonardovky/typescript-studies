import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [{ name: "Vinicius", email: "vile@aa.com.br" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Vinicius Henrique",
        email: "vile@aa.com.br"
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Olá senhor!"
      }
    });

    return res.send();
  }
};

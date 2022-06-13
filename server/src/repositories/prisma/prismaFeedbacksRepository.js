"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaFeedbacksRepository {
    async create({ type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                type: type,
                comment: comment,
                screenshot, //quando a chave é igual ao nome do valor podemos passá-la assim
            }
        });
    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;

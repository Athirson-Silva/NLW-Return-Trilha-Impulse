import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {

        await prisma.feedback.create({
            data: {
                type: type,
                comment: comment,
                screenshot, //quando a chave é igual ao nome do valor podemos passá-la assim
            }
        });
    }
}
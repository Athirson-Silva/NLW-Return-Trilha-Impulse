import { MailAdapter } from "../../src/adapters/mail-adapter";
import { FeedbacksRepository } from "../../src/repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    // private feedbacksRepository: FeedbacksRepository
    // constructor(
    //     feedbacksRepository: FeedbacksRepository,
    // ) {
    //     this.feedbacksRepository = feedbacksRepository;
    // }


    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) { }

    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new ErrorEvent('Type is required')
        };

        if (!comment) {
            throw new ErrorEvent('Comment is required')
        };

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: "Novo email",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p`,
                `<p>Comentário: ${comment}</p`,
                screenshot ? `<img src="${screenshot}">` : null,
                `</div>`
            ].join('\n')
        })
    }
} 
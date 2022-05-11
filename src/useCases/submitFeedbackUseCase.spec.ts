import { SubmitFeedbackUseCase } from './submitFeedbackUseCase'

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'test comment',
      screenshot: 'data:image/png;base64,jiejiejdijdefhe'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'test comment',
      screenshot: 'data:image/png;base64,jiejiejdijdefhe'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,jiejiejdijdefhe'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with invalid screenshot format', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'test',
      screenshot: 'data:image/jpg;base64,jiejiejdijdefhe'
    })).rejects.toThrow();
  });
});
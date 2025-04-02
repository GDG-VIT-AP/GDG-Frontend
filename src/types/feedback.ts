export type QuestionType = 'star' | 'text' | 'radio';

export interface Option {
  value: string;
  label: string;
}

export interface Question {
  category: string;
  question: string;
  type: QuestionType;
  options?: Option[];
}

export interface FeedbackPage {
  title: string;
  questions: Question[];
}

export interface FeedbackData {
  [key: string]: {
    [key: string]: string | number;
  };
}
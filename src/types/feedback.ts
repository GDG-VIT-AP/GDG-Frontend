/*Purpose: The feedback.ts file serves as a central type definition module for the GDG event feedback system.
It defines TypeScript interfaces and types that structure the feedback form's data architecture, including QuestionType for different input methods
(star, text, radio), Option for radio button choices, Question for individual feedback questions, FeedbackPage for organizing questions into sections, 
and FeedbackData for storing user responses. These type definitions ensure type safety and provide a consistent data structure across the feedback collection system.*/

/*Contributor: Arpit Makkar (23BCE7565)*/
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
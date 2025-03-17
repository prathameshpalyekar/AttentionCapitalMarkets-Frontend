export interface Bet {
  id: string;
  topic: string;
  description: string;
  category: 'Prediction' | 'Event Speculation' | 'Poll';
  options: {
    yes: {
      price: number;
      volume: number;
    };
    no: {
      price: number;
      volume: number;
    };
  };
}
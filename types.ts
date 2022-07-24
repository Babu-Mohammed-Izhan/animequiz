export interface Question {
  q: string;
  op1: string;
  op2: string;
  op3: string;
  op4: string;
  ans: string;
}

export interface Levels {
  name: string;
  colors: { from: string; to: string };
  route: string;
  level: string;
  imglink?: string;
}


export class JobPost {
  constructor(
    public title?: string,
    public description?: string,
    public overview?: string,
    public requirements?: string,
    public responsibilities?: string,
    public contact?: string,
    public company?: string,
    public location?: string
  ) {}
}

// export interface Desc {
//   overview?: string;
//   requirements?: string;
//   repsonsibilities?: string;
//   contact?: string;
// }
// export class Description {
//   constructor(
//     public overview?: string,
//     public requirements?: string,
//     public repsonsibilities?: string,
//     public contact?: string
//   ) {}
// }

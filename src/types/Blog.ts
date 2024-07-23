export interface blogCardType {
  slug: String;
  thumnail: string;
  _id: String;
  likes: number;
  category: String;
}

export default interface blogType extends blogCardType {
  readTime: number;
  discription: String;
  owner: {
    firstName: String;
    lastName: String;
    userName: String;
    profilePic: string;
  };
  blog: string;
  createdAt: Date;
  updatedAt: Date;
}

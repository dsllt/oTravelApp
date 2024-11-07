export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostApi {
  id: number; //1,
  text: string; //"Bom dia!",
  user_id: number; //1,
  image_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg",
  is_fixed: boolean; //false,
  is_activated: boolean; //true,
  created_at: string; //"2024-11-01T08:55:11.638-03:00",
  updated_at: string; //"2024-11-01T08:55:11.642-03:00",
  user: {
    id: number; //1,
    first_name: string; //"Maria",
    last_name: string; //"Julia",
    username: string; //"mariajulia",
    email: string; //"mariajulia@coffstack.com",
    profile_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png",
    is_online: boolean; //false,
    full_name: string; //"Maria Julia"
  };
  status: string; //"published",
  meta: {
    like_count: string; //"7",
    favorite_count: string; //"0",
    comments_count: string; //"5"
  };
}

export type PageParams = {
  page: number;
  per_page: number;
};

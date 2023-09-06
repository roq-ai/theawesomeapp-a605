import { UserInterface } from 'interfaces/user';
import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id: string;
  task_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  task?: TaskInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  task_id?: string;
}

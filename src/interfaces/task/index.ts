import { AttachmentInterface } from 'interfaces/attachment';
import { CommentInterface } from 'interfaces/comment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  priority: number;
  status: string;
  due_date?: any;
  assignee_id: string;
  waiting_on_id: string;
  created_at?: any;
  updated_at?: any;
  attachment?: AttachmentInterface[];
  comment?: CommentInterface[];
  user_task_assignee_idTouser?: UserInterface;
  user_task_waiting_on_idTouser?: UserInterface;
  _count?: {
    attachment?: number;
    comment?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  assignee_id?: string;
  waiting_on_id?: string;
}

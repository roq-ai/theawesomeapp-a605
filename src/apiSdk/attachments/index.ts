import axios from 'axios';
import queryString from 'query-string';
import { AttachmentInterface, AttachmentGetQueryInterface } from 'interfaces/attachment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttachments = async (
  query?: AttachmentGetQueryInterface,
): Promise<PaginatedInterface<AttachmentInterface>> => {
  const response = await axios.get('/api/attachments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAttachment = async (attachment: AttachmentInterface) => {
  const response = await axios.post('/api/attachments', attachment);
  return response.data;
};

export const updateAttachmentById = async (id: string, attachment: AttachmentInterface) => {
  const response = await axios.put(`/api/attachments/${id}`, attachment);
  return response.data;
};

export const getAttachmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/attachments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAttachmentById = async (id: string) => {
  const response = await axios.delete(`/api/attachments/${id}`);
  return response.data;
};

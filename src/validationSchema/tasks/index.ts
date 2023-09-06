import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  priority: yup.number().integer().required(),
  status: yup.string().required(),
  due_date: yup.date().nullable(),
  assignee_id: yup.string().nullable().required(),
  waiting_on_id: yup.string().nullable().required(),
});

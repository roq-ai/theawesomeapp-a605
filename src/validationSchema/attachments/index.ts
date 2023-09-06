import * as yup from 'yup';

export const attachmentValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  task_id: yup.string().nullable().required(),
});

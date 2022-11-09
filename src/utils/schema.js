import * as YUP from 'yup';

export const loginSchema = YUP.object().shape({
  name: YUP.string().required(),
  password: YUP.string().min(5).required(),
});

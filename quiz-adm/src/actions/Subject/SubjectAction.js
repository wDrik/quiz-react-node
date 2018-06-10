import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  createSubject: null,
  createSuccess: ['subject'],
  createError: ['error']
});

export const SubjectTypes = Types;
export default Creators;

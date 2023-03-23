import {upLoadPhoto, createUser } from './utils';

export default async function asynUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return {photo, user};
}

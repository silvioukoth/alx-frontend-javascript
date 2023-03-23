import signUpUser from './4-user-promise';
import upLoadPhoto from './5-photo-reject';

export default function handleProfileSIgnup(firstName, lastName, fileName) {
  const promises = [signUpuser(firstName, lastName), upLoadPhoto(filename)];
  const result = [];
  return promise.allSettled(promises).then(results) => {
    result.map(({status, value, reason }) => (
      result.push({
        status,
	value: status ==='rejected' ? reason.toString() : value,
      })
    ));
    return result;
  });
}

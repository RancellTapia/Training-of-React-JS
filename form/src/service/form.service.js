import {call} from '../tools/Api';

 export const sendData = async (paylod) => {
  return await call('post', 'registerinfo', paylod )
}
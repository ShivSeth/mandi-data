import axios from 'axios';
import { IonLoading } from '@ionic/react';

import { personCircleOutline } from "ionicons/icons";
const axiosCall = async (url: string, config: any) => {
  const XhrRes = await axios(url, config)
      .then(function(response:any) {
        if (typeof response.config !== 'undefined') {
          response.config.successCallBack(response);
        }
        return  response;
      })
      .catch(function(error) {
        console.log(error);
      });
  return XhrRes;
}

export const APIService = {
  axiosCall
};


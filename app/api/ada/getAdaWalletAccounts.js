// @flow
import type { ApiAccounts } from './types';
import { request } from './lib/request';


export type GetAdaWalletAccountsParams = {
  ca: string,
  walletId: string,
};

export const getAdaWalletAccounts = (
  { ca, walletId }: GetAdaWalletAccountsParams
): Promise<ApiAccounts> => (
  request({
    hostname: 'localhost',
    method: 'GET',
    path: '/api/accounts',
    port: 8090,
    ca,
  }, { accountId: walletId })
);

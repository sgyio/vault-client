import { injectable, inject } from "inversify";
import * as request from "request-promise";

import { IVaultService } from "./IVaultService";

@injectable()
export class VaultService implements IVaultService {

    public async getSecret(url: string, token: string): Promise<any> {
        const options = {
            method: "GET",
            uri: url,
            headers: {
                "X-Vault-Token": token
            }
        };

        const response = await request(options);

        return JSON.parse(response).data;
    }
}

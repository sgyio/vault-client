import * as nconf from "nconf";

import TYPES from "./constant/types";
import vaultContainer from "./conf/vaultContainer";
import { IVaultService } from "./services/IVaultService";

export async function getSecret(urlEnv: string, tokenEnv: string): Promise<any> {
    nconf.env();

    try {
        nconf.required([urlEnv, tokenEnv]);
    } catch (error) {
        throw error;
    }

    const vaultService = vaultContainer.get<IVaultService>(TYPES.VaultService);

    let secret = {};

    try {
        secret = await vaultService.getSecret(nconf.get(urlEnv), nconf.get(tokenEnv));
    } catch (error) {
        throw error;
    }

    return secret;
}

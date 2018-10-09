import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "../constant/types";

import { IVaultService } from "../services/IVaultService";
import { VaultService } from "../services/vaultService";

let container = new Container();

container
    .bind<IVaultService>(TYPES.VaultService)
    .to(VaultService);

export default container;

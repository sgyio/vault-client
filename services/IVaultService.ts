export interface IVaultService {
    getSecret(url: string, token: string): Promise<any>;
}

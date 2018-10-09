# Vault Client

Usage:

```
import * as vaultClient from "@sgy/vault-client";

(async () => {
  const secret = await vaultClient.getSecret("VAULT_API_URL", "VAULT_API_TOKEN");
  console.log(secret);
})();
```

The `VAULT_API_URL` is the name of the Env variable where the full URL of secret can be found and the `VAULT_API_TOKEN` is the env variable for the token to access secret.

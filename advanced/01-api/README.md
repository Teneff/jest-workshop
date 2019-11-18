# [Jest workshop](../..)

## [Advanced](..)

## API

### Example usage

```typescript
import api from "./index";

const client = api({ locale: "en_US" });

type Product = {
  id: string;
  language: string;
  country: string;
};
const products: Promise<Product[]> = client.products();
```


### To test
## CONTRATOS DA API

* **GET** `/chocolates`
* **Objetivo:** retornar uma lista com todos os chocolates cadastrados
* **Código HTTP:** `200 - OK`
* **Body** (exemplo):

```javascript
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

* **GET **`/chocolates/:id`
* **Objetivo:** buscar um chocolate específicio pelo id
* **Código HTTP:**` 200 - OK`
* **Body** (exemplo):

```javascript
  [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

* **GET** *`/chocolates/brand/:brandId`*

* Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
* Código HTTP: `200 - OK`;
* Body (exemplo):

```javascript
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```


# Personal Expense Tracker

#### Developed a RESTful API's for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries.


## 


## Setup and Run

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Post Transaction

```http
  POST /api/transactions
```

#### Get All Transactions

```http
  GET /api/transactions
```



#### Get Transaction

```http
  GET /api/transactions/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Update Transaction

```http
  PUT /api/transactions/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete Transaction

```http
  DELETE /api/transactions/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get Summary

```http
  GET /api/summary
```

## Screenshots

#### Post Transaction API
![Post Transaction](https://res.cloudinary.com/dptc4np08/image/upload/v1729657003/Screenshot_2024-10-23_094500_dmlswu.png)


#### GET all Transactions API
![Get All Transaction](https://res.cloudinary.com/dptc4np08/image/upload/v1729657221/get_all_vkp8zf.png)


#### GET Transaction API
![Get Transaction](https://res.cloudinary.com/dptc4np08/image/upload/v1729657387/get_transaction_mycl70.png)

#### Update Transaction API
![Update Transaction](https://res.cloudinary.com/dptc4np08/image/upload/v1729657934/update_odwmpc.png)

#### Delete Transaction API
![Delete Transaction](https://res.cloudinary.com/dptc4np08/image/upload/v1729658056/delete_al2kyo.png)

#### Summary Of Transactions API
![Summary Of Transactions](https://res.cloudinary.com/dptc4np08/image/upload/v1729658155/summary_ey3unb.png)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URL`


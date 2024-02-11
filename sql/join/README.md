[<= README.md](/README.md)

---

### TABLE users

CREATE TABLE users (
    id INT PRIMARY KEY,
    user VARCHAR(255)
);

| id  | user  |
|-----|-------|
| 123 | Bob   |
| 124 | Alice |
| 125 | John  |

### TABLE orders

CREATE TABLE orders (
    id INT,
    order INT
);

| id  | order |
|-----|-------|
| 123 | 22    |
| 123 | 87    |
| 125 | 99    |
| 126 | 34    |

```sql
JOIN orders USING (id)   ===   JOIN orders ON users.id = orders.id
```

### VIEW users_orders

```sql

CREATE VIEW users_orders AS (
    SELECT * FROM users
    JOIN orders USING (id)
);

| id  | user | order |
|-----|------|-------|
| 123 | Bob  | 22    |
| 123 | Bob  | 87    |
| 125 | John | 99    |
```

### INNER JOIN

```sql
SELECT * FROM users
INNER JOIN orders USING (id);

| id  | user | order |
|-----|------|-------|
| 123 | Bob  | 22    |
| 123 | Bob  | 87    |
| 125 | John | 99    |
```

### LEFT JOIN

```sql
SELECT * FROM users
LEFT JOIN orders USING (id);

| id  | user  | order |
|-----|-------|-------|
| 123 | Bob   | 22    |
| 123 | Bob   | 87    |
| 124 | Alice | NULL  |
| 125 | John  | 99    |
```

### RIGHT JOIN

```sql
SELECT * FROM users
RIGHT JOIN orders USING (id);

| id  | user | order |
|-----|------|-------|
| 123 | Bob  | 22    |
| 123 | Bob  | 87    |
| 125 | John | 99    |
| 126 | NULL | 34    |
```

### FULL JOIN

```sql
SELECT * FROM users
FULL JOIN orders USING (id);

| id  | user  | order |
|-----|-------|-------|
| 123 | Bob   | 22    |
| 123 | Bob   | 87    |
| 124 | Alice | NULL  |
| 125 | John  | 99    |
| 126 | NULL  | 34    |
```

[<= README.md](/README.md)
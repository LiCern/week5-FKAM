BEGIN;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  postcode VARCHAR(8)
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  category VARCHAR(20)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  post TEXT NOT NULL,
  time TIMESTAMPTZ,
  category INTEGER REFERENCES category(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  username VARCHAR(255) NOT NULL,
  postcode VARCHAR(8)
);

INSERT INTO category (category) VALUES
  ('Food'),
  ('Toiletries'),
  ('Household'),
  ('Other')
;

COMMIT;

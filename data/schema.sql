DROP TABLE IF EXISTS dogfood;

CREATE TABLE dogfood(
  ID SERIAL PRIMARY KEY,
  brand VARCHAR(100),
  life_stage VARCHAR(100),
  type VARCHAR(100),
  flavor VARCHAR(100),
  food_form VARCHAR(10),
  kcal INT,
  measurement VARCHAR
);



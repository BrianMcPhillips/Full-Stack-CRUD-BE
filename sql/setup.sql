DROP TABLE IF EXISTS microphones;

CREATE TABLE microphones (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  model TEXT NOT NULL,
  brand TEXT NOT NULL,
  pattern TEXT NOT NULl,
  microphone_type TEXT,
  price DOUBLE PRECISION,
  summary TEXT
)
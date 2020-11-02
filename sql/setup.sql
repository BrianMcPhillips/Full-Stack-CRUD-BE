DROP TABLE IF EXISTS Microphones;

CREATE TABLE Microphones (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  model TEXT NOT NULL,
  brand TEXT NOT NULL,
  pattern TEXT NOT NULl,
  microphone_type TEXT,
  price DOUBLE PRECISION,
  summary TEXT,
  awesome BOOLEAN
)
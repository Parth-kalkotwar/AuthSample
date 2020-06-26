
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE posts (
  post_id BIGSERIAL NOT NULL PRIMARY KEY,	
  so_id BIGINT REFERENCES users(id),
  title VARCHAR(500),
  details VARCHAR(2000),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


INSERT INTO posts (so_id, title,details)
VALUES ('20', 'test1', 'test1') RETURNING *;
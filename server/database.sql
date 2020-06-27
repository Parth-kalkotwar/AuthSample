
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
VALUES ('30', 'post1', 'post1') RETURNING *;


CREATE TABLE comments (
  comment_id BIGSERIAL NOT NULL PRIMARY KEY,	
  post_id BIGINT REFERENCES posts(post_id) ON DELETE CASCADE,
  comment_details VARCHAR(2000) NOT NULL
);

INSERT INTO comments (post_id, comment_details) VALUES ('20', 'comment2');

ALTER TABLE comments
ADD COLUMN user_id BIGINT REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE comments 
DROP COLUMN post_id;

-- USer Comments
SELECT
	users.id,
	users.name,
	comments.comment_id,
	comments.comment_details
FROM
	comments
LEFT JOIN users ON comments.user_id = users.id where comments.comment_id = 4;

--POst Comments
SELECT
	posts.post_id,
	posts.title,
	comments.comment_id,
	comments.comment_details
FROM
	posts
LEFT JOIN comments ON posts.post_id = comments.post_id;


UPDATE posts 
   SET likes = likes + '1'
WHERE post_id = '22';

--LIKES

alter table posts add column likes BIGINT [];


update posts
set likes = likes || '20'::BIGINT
where post_id = '21';

--LIKES COUNT

SELECT array_length((SELECT likes from posts where post_id=15), 1);



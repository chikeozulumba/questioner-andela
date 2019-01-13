export const getAllUsers = 'SELECT * FROM users';
export const getUserByEmail = 'SELECT * FROM users WHERE email = $1';
export const getUserByID = 'SELECT * FROM users WHERE id = $1';
export const createNewUser = 'INSERT INTO users(firstname, lastname, email, phone, password) VALUES($1, $2, $3, $4, $5) returning *';
export const createNewMeetup = 'INSERT INTO meetups(topic, location, tags, images, happeningOn) VALUES($1, $2, $3, $4, $5) returning *';
export const getMeetupByID = 'SELECT * FROM meetups WHERE id = $1';
export const getAllMeetups = 'SELECT * FROM meetups';
export const createRSVP = 'INSERT INTO rsvps(meetup, user_id, response) VALUES($1, $2, $3) returning *';
export const getQuestionByID = 'SELECT * FROM questions WHERE id = $1';
export const createNewQuestion = 'INSERT INTO questions(title, body, meetup, createdBy) VALUES($1, $2, $3, $4) returning *';
export const checkIfUpvoted = 'SELECT * FROM questions WHERE $1 = ANY (upvotes) AND id = $2';
export const checkIfDownvoted = 'SELECT * FROM questions WHERE $1 = ANY (downvotes) AND id = $2';
export const addVote = (field, value, id) => `UPDATE questions SET ${field} = array_append(${field}, ${value}) WHERE id = ${id} returning *`;
export const removeVote = (field, value, id) => `UPDATE questions SET ${field} = array_remove($
 
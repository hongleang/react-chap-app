const users = []

const createUser = ({ id, name, room }) => {
    name = name.toLowerCase().trim();
    room = room.toLowerCase().trim();

    const user = { id, name, room }
    users.push(user)

    return { user }
}

const findUser = (id) => {
    const user = users.find(user => user.id === id)
    if (!user) {
        return { error: 'User is not found!' }
    }

    return user
}
const findUsersInARoom = (roomId) => users.filter(user => user.room === roomId);

const deleteUser = (id) => users.filter(user => user.id !== id);


module.exports = {
    createUser,
    findUser,
    findUsersInARoom,
    deleteUser
};

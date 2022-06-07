import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const DESIRED_NUM = 5;

let waitForUser = async () => {
    const data = await faker;
    let result = []
    try {
        for (let i = 0; i < DESIRED_NUM; i++) {
            result.push({
                id: data.image.people() + ' ' + i,
                name: data.name.findName(),
                profilePic: `https://picsum.photos/id/${Math.round(i * Math.random() + i * 20)}/300/300`
            })
        }

    } catch (e) {
        console.log(e.message)
    }

    return result
}

const fake_users = await waitForUser();

export { fake_users }
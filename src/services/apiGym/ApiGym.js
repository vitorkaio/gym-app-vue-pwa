import MongoStitch from './mongoStitch';

const ApiGym = async () => {
  try {
    const mongodb = await MongoStitch();
    const gymServices = new GymServices(mongodb);

    const getClient = () => gymServices

    return {
      getClient: getClient,
    };
  } catch (error) {
    throw(error)
  }
}

class GymServices {

  constructor (client) {
    this.mongodb = client;
  }

  // Get all users.
  async getUsers () {
    return new Promise( async (resolve, reject) => {
      try {
        const res = await this.mongodb.db('gym').collection('users').find().asArray();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    })
  }

  // verifica se o objeto já existe no banco.
  /* async ifExists (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.mongodb.db('gitrepos').collection('repos').find({'id_repos': id}).first();
        console.log(res);
        resolve(res);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }

  // Save name repos in mongo atlas
  async saveRepo (repo) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.mongodb.db('gitrepos').collection('repos').insertOne(repo);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    })
  } */
}// Fim da classe

export default ApiGym();
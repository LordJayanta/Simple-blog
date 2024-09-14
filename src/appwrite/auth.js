import { Client, Account, ID } from "appwrite";
import config from '../config/config'

class AuthServise {
    client;
    account;
    constructor() {
        this.client = new Client().setEndpoint(config.serverUrl).setProject(config.serverProjectID);
        this.account = new Account(this.client)
    }

    async createAccout({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name)
            if (userAccount) return this.loginAccount({email, password});
            else return userAccount // maybe it's not working or bug
        } catch (error) {
            console.error("Appwrite :: createAccout :: ", error)
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error("Appwrite :: loginAccount :: ", error)
        }
    }

    async logoutAll() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.error("Appwrite :: logoutAll :: ", error)
        }
    }

    async logout({ sessionId }) {
        try {
            return await this.account.deleteSession(sessionId)
        } catch (error) {
            console.error("Appwrite :: logout :: ", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.error("Appwrite :: getCurrentUser :: ", error)
        }
    }

    async getCurrentSession(session) {
        try {
            return await this.account.getSession(session)
        } catch (error) {
            console.error("Appwrite :: getCurrentSession :: ", error)
        }
    }
}

const authServise = new AuthServise();
export default authServise;
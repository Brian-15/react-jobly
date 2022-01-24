import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const { company } = await this.request(`companies/${handle}`);
    return company;
  }

  /** Get details on companies */

  static async getCompanies(nameLike) {
    const { companies } = await this.request(
      `companies`,
      { name: nameLike }
    );
    return companies;
  }

  /** Create new company */

  static async createCompany(handle, name, description, numEmployees, logoUrl) {
    const { company } = await this.request(
      'companies',
      { handle, name, description, numEmployees, logoUrl },
      'post'
    );
    return company;
  }

  /** update company data via patch */

  static async patchCompany(handle, ...data) {
    const { company } = await this.request(
      `companies/${handle}`,
      {...data},
      'patch'
    );
    return company;
  }

  /** delete company */

  static async deleteCompany(handle) {
    const res = await this.request(`companies/${handle}`, {}, 'delete');
    return res.deleted;
  }

  /** Get details on a job by id */

  static async getJob(id) {
    const { job } = await this.request(`jobs/${id}`);
    return job;
  }

  /** Get details on jobs */

  static async getJobs(minSalary, hasEquity, title) {
    const { jobs } = await this.request('jobs', { minSalary, hasEquity, title });
    return jobs;
  }

  /** Create new job */

  static async createJob(title, salary, equity, companyHandle) {
    const { job } = await this.request(
      'jobs',
      { title, salary, equity, companyHandle },
      'post'
    );
    return job;
  }
  
  /** updates job data */

  static async patchJob(id, ...data) {
    const { job } = await this.request(
      `jobs/${id}`,
      {...data},
      'patch'
    );
    return job;
  }

  /** delete job */

  static async deleteJob(id) {
    const res = await this.request(`jobs/${id}`, {}, 'delete');
    return res.deleted;
  }

  /** get user by username */

  static async getUser(username) {
    const { user } = await this.request(`users/${username}`);
    return user;
  }

  /** get all users */

  static async getUsers() {
    const { users } = await this.request('users');
    return users;
  }

  /** create new user */

  static async createUser(data) {
    const { user, token } = await this.request(
      'auth/register',
      { ...data },
      'post'
    );
    return { user, token };
  }

  /** authenticate user, returns token */

  static async authenticate(username, password) {
    const { token } = await this.request(
      'auth/token',
      { username, password },
      'post'
    );
    this.token = token;
    return token;
  }

  /** update user data by username */

  static async patchUser(username, data) {
    console.log('update data', username, data)
    const { user } = await this.request(
      `users/${username}`,
      data,
      'patch'
    );
    return user;
  }

  /** delete user by username */

  static async deleteUser(username) {
    const { deleted } = await this.request(
      `users/${username}`,
      {},
      'delete'
    );
    return deleted;
  }

  /** apply to job for user */

  static async apply(username, jobId) {
    const res = await this.request(
      `users/${username}/jobs/${jobId}`,
      {},
      'post'
    );
    return res;
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
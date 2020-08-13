import { Injectable } from '@angular/core';
import { REPO_DETAILS } from 'src/app/config/config';
import {Octokit} from '@octokit/core';
import { USER_DETAILS } from 'src/app/config/user-details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  octokit = new Octokit({ auth: USER_DETAILS.TOKEN });
  constructor() { 
    // this.getForkList();
  }

  async getForkList(){
    const forkList = await this.octokit.request('GET /repos/{owner}/{repo}/forks', {
      owner: REPO_DETAILS.OWNER,
      repo: REPO_DETAILS.REPO
    })
    console.log(forkList)
  }

  async followUser(){
    // write follow code.
  }


}

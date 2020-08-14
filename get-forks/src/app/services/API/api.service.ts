import { Injectable } from '@angular/core';
import { REPO_DETAILS, END_POINTS } from 'src/app/config/config';
import {Octokit} from '@octokit/core';
import { USER_DETAILS } from 'src/app/config/user-details';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  octokit = new Octokit({ auth: USER_DETAILS.TOKEN }); // To call Gihub APIs
  forkList$ = new BehaviorSubject<any>([]); // To update forklist on API call

  constructor() {  }

  /**
   * Calls API to get forks of a repo
   * Repo details are fetched from Config
   * @param index :Number Optional Parameter for Pagination
   * @updates ForkList
   */
  async getForkList(index?){
    const forkList = await this.octokit.request( `GET ${END_POINTS.FORKS}`, {
      owner: REPO_DETAILS.OWNER,
      repo: REPO_DETAILS.REPO,
      per_page: 10,
      page: index ? index : 0
    })
    if(forkList.status===200){
      this.forkList$.next(forkList.data);
    }else if(forkList.status===401){
      this.forkList$.next('Invalid User');
    }
  }

  /**
   * User in UserDetails config Starts following <UserName>
   * @param userName : string - User to be Followed
   */
  async followUser(userName){
    return await this.octokit.request(`PUT ${END_POINTS.FOLLOW}`, {
      username: userName
    })
  }


}

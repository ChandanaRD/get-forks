import { Injectable } from '@angular/core';
import { REPO_DETAILS, END_POINTS } from 'src/app/config/config';
import {Octokit} from '@octokit/core';
import { USER_DETAILS } from 'src/app/config/user-details';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  octokit = new Octokit({ auth: USER_DETAILS.TOKEN });
  forkList$ = new BehaviorSubject<any>([]);
  constructor() { 
    // this.getForkList();
  }

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

  async followUser(userName){
    return await this.octokit.request(`PUT ${END_POINTS.FOLLOW}`, {
      username: userName
    })
  }


}

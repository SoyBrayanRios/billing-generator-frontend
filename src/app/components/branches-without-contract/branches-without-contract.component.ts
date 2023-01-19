import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/common/branch';
import { BranchService } from 'src/app/services/branch.service';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-branches-without-contract',
  templateUrl: './branches-without-contract.component.html',
  styleUrls: ['./branches-without-contract.component.scss']
})
export class BranchesWithoutContractComponent implements OnInit {

  faFolderPlus = faFolderPlus;
  branches: Branch[] = [];

  constructor(private branchService: BranchService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getBranchesToUpdate();
    });
  }

  getBranchesToUpdate() {
    this.branchService.getBranchesWithoutContract().subscribe(
      this.processResumeResult());
  }

  processResumeResult() {
    return (data: any) => {
      this.branches = data;
    }
  }

}
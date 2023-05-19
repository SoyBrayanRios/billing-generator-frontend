import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/common/branch';
import { BranchService } from 'src/app/services/branch.service';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branches-without-contract',
  templateUrl: './branches-without-contract.component.html',
  styleUrls: ['./branches-without-contract.component.scss']
})
export class BranchesWithoutContractComponent implements OnInit {
  
  faFolderPlus = faFolderPlus;
  branches: Branch[] = [];
  fileName = '';
  i = 0;
  
  constructor(private branchService: BranchService,
    private route: ActivatedRoute, private http: HttpClient) { }
    
    ngOnInit(): void {
      this.route.paramMap.subscribe(() => {
        this.getBranchesToUpdate('FE');
      });
    }
    
    onFileSelected(event: any) {
      const file:File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);
            const upload$ = this.http.post("/api/thumbnail-upload", formData);
            upload$.subscribe();
        }
    }

  getBranchesToUpdate(module: string) {
    this.branchService.getBranchesWithoutContract(module).subscribe(
      this.processResumeResult());
  }

  processResumeResult() {
    return (data: any) => {
      this.branches = data;
      console.log(data);
      
    }
  }

}
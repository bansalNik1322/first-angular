import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddEditUserComponent } from '../../../components/User/add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [AddEditUserComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
  providers: [],
})
export class EditUserComponent implements OnInit {
  userid: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userid = params.get('userid');
    });
  }
}

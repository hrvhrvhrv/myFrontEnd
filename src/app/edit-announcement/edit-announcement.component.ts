import { Component, OnInit } from '@angular/core';
import { AnnouncementService} from "../services/announcement.service";
import { Announcement} from "../models/announcement";
import { ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

  editAnnouncement: Announcement;

  constructor(private announcementService: AnnouncementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.announcementService.getAnnouncementByID(this.route.snapshot.params.id).subscribe(data => this.editAnnouncement = data);
  }

  edit() {
    this.announcementService.editAnnouncement(this.editAnnouncement).subscribe(res => {this.router.navigate(['/viewAnnouncement'])})
  }

}

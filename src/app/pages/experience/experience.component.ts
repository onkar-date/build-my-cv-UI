import { Subject, takeUntil } from 'rxjs';
import {
  removeExperience,
  selectSection,
} from './../../state/CV-State/cv.actions';
import {
  selectExperiences,
  selectSections,
} from './../../state/CV-State/cv.selectors';
import { AppState } from './../../state/app.state';
import { Store } from '@ngrx/store';
import { IExperience } from './../../shared/interface/experience.interface';
import { AddExperienceModalComponent } from './../../library/shared-components/add-experience-modal/add-experience-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addExperience } from 'src/app/state/CV-State/cv.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { ISection } from 'src/app/shared/interface/section.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences: IExperience[] = [];
  sections: ISection[] = [];
  destroy$ = new Subject();
  constructor(
    private modalService: NgbModal,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.store
      .select(selectExperiences)
      .pipe(takeUntil(this.destroy$))
      .subscribe((experiences: IExperience[]) => {
        this.experiences = experiences;
      });
    store
      .select(selectSections)
      .pipe(takeUntil(this.destroy$))
      .subscribe((sections: ISection[]) => {
        this.sections = sections;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addExperience() {
    const modal = this.modalService.open(AddExperienceModalComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modal.result.then((experience: IExperience) => {
      if (experience) {
        this.store.dispatch(addExperience({ experience }));
      }
    });
  }

  deleteExperience(experience: IExperience) {
    this.store.dispatch(removeExperience({ experience }));
  }

  goToNextSection(): void {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].active) {
        this.store.dispatch(selectSection({ section: this.sections[i + 1] }));
        this.router.navigate([`../${this.sections[i + 1].routerLink}`], {
          relativeTo: this.activatedRoute,
        });
        break;
      }
    }
  }

  goToPreviousSection(): void {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].active) {
        this.store.dispatch(selectSection({ section: this.sections[i - 1] }));
        this.router.navigate([`../${this.sections[i - 1].routerLink}`], {
          relativeTo: this.activatedRoute,
        });
        break;
      }
    }
  }
}
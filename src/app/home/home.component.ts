import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {DataObj} from '../models/data.model';

@Component({
    selector: 'app-searchbar',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // constructor
    constructor(private dataService: DataService) {
    }

    // all variables declaration and initial values
    public jobData: DataObj[];
    public copyJobData: DataObj[];
    public jobDataWithoutSkillsFilter: DataObj[];
    public experienceJobData: DataObj[];
    public locationJobData: DataObj[];
    public experiences = [];
    public countOfJobs: number;
    public location = '';
    public experience = '';
    public searchClicked: boolean;
    public searchText = '';
    public pageStart = 0;
    public sortingField = '';

    // init function to get data from service
    ngOnInit() {
        this.dataService.getData().subscribe((success: any) => {
                this.copyJobData = success.jobsfeed;
                this.experiences = this.copyJobData.map(data => data.experience);
                this.experiences = this.experiences.filter((x, i, a) => x && a.indexOf(x) === i);
            }, error => {
                console.log(error);
            }
        );
    }

    // function to set value of experience selected
    filterByExperience(experience) {
        this.experience = experience;
        console.log('experience', location);
        this.searchClicked = false;
    }

    // function to set value of location selected
    filterByLocation(location) {
        this.location = location;
        console.log('location', location);
        this.searchClicked = false;
    }

    // function to get data based on location and experience selected
    filterData() {
        this.experienceJobData = this.copyJobData.filter(
            data => this.experience === '' ? data : data.experience.includes(this.experience));
        this.locationJobData = this.experienceJobData.filter(data => this.location === '' ? data : data.location.includes(this.location));
        this.jobData = this.jobDataWithoutSkillsFilter = this.locationJobData;
        this.countOfJobs = this.jobData.length;
        this.searchClicked = true;
    }

    // function to filter data based on skills
    filterBySkills() {
        this.jobData = this.jobDataWithoutSkillsFilter.filter(
            data => this.searchText.toLocaleLowerCase() === '' ? data : data.skills.toLocaleLowerCase().includes(
                this.searchText.toLocaleLowerCase()));
        if (this.sortingField !== '') {
            this.sortData(this.sortingField);
        }
        this.countOfJobs = this.jobData.length;
    }

    // function to sort data based on location or experience
    sortData(sortField) {
        // console.log('sortfield', sortField);
        if (sortField === 'location') {
            this.jobData.sort((a, b) => a.location.localeCompare(b.location));
        } else if (sortField === 'experience') {
            this.jobData.sort((a, b) => a.experience.localeCompare(b.experience));
        }
    }

    // function to get next page data
    nextData() {
        this.pageStart += 4;
    }

    // function to get previous page data
    prevData() {
        this.pageStart -= 4;
    }
}
